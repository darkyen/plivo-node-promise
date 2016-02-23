#plivo-node-promise
Unofficial fork of Plivo's node helper

## Note
This is a WIP fork of the ofifcial library, I would like suggestions over the api changes and more node style api's please see issues.

Node.js helper library for the [Plivo](http://plivo.com) API, to create powerful Voice and SMS applications.

This helper implements the following features:
* Wrappers for Plivo REST API
* XML generation for synchronously controlling incoming calls and messages.

We have developed some examples to show you how to use our node.js helper and to help you get started quickly. These examples are available at http://github.com/plivo/plivo-examples-node.

More information on Plivo APIs and related concepts, refer https://www.plivo.com/docs/.

Installation
---------------
Installing using npm (node package manager):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install plivo-promise@0.5.5-alpha
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Usage

`plivo` node.js helper can be used to make REST API calls and can also be used to control incoming calls and messages.

REST API
--------
`RestAPI` takes one argument i.e. an object that contains two keys - `authId` and `authToken`, like so:


```
var plivo = require('plivo');
// the same as plivo but notice the new!
var api = new plivo.RestAPI({
  authId: '<your AUTH ID>',
  authToken: '<your AUTH TOKEN>',
});
```

The `RestAPI` object exposes all the Plivo APIs and associated methods. Every method exposed by `RestAPI` object accepts two parameters:
* `params`: an object containing a map of API params and their values.
* `callback`: a callback that gets called after receiving response. Callbacks get two parameters:
  * `status`: HTTP Response Status Code. Example: `200`, `201`
  * `response`: a Javascript object because all our APIs send responses in JSON.


* All parameters are camelCased.
* All methods are camelCased.
* Remove _uuid, and _id from end.
References
----------
* [Plivo API Documentation and Concepts](https://www.plivo.com/docs/)
* [Examples](http://github.com/plivo/plivo-examples-node)

 
