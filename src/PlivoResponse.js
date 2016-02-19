import PlivoError from './PlivoError';
import responseSpec from './spec/response';
import builder from 'xmlbuilder';
import pick from 'lodash/object/pick';
import contains from 'lodash/collection/contains';

// Params
class PlivoResponseElement{
	constructor(root=this, parent=this, name='Response', attribs={}, body){
		if( !name ){
			throw new Error('ResponseElement cannot be initialized without a name');
		}
		
		const spec = responseSpec[name];
		
		if( !spec ){
			throw new Error(`Unknown element ${name}`);
		}


		if( body ){
			if( spec.nestables ){
				throw new Error('Only elements with no nestables can have body');
			}

			if( typeof body !== 'string' ){
				throw new Error('Body can only be string');
			}
			this.value = body;
		}

		this.children  = [];
		this.name      = name;
		this.root  	   = root;
		this.parent    = parent;
		this.attribs   = pick(attribs, spec.validAttributes);		
	}

	__toxml(root=null){

		const {name, attribs} = this;
		let el = root?root.ele(name):builder.create(name);
		
		Object.keys(attribs).forEach(key => {
			el.att(key, attribs[key]);
		});
		
		this.children.forEach((child) => child.__toxml(el));

		if( this.value ){
			el.txt(this.value);
		}
		
		return el;
	}

	toXML(){
		return this.root.__toxml().end();
	}
};

Object.keys(responseSpec).forEach(function(elName){
	PlivoResponseElement.prototype[`add${elName}`] = function(...args){
		const {nestables} = responseSpec[this.name]; 
		let attribs = args[0], body = null;
		
		if( args.length === 0 ){
			attribs = {};
		}

		if( typeof args[0] === 'string' ){
			attribs = args[1];
			body = args[0]; 
		}

		if( !nestables ){
			throw new Error(`${this.elName} cannot have children`);
		}

		if( !contains(nestables, elName) ){
			throw new Error(`${elName} cannot be inserted in ${this.name}`);
		}

		const child = new PlivoResponseElement(this.root, this, elName, attribs, body);
		this.children.push(child);
		return child;
	};
});
export default PlivoResponseElement;