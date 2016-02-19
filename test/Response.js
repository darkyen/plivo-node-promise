var assert = require('assert');
var plivo = require('../lib/plivo').default;

// Fot utility functions for this test.
var Utility = {};

/**
 * To check if two objects are equal.
 *
 * NOTE: Created to compare attributes. All attributes' values must be strings
 * because XMLbuilder on adding the element converts integers to strings. In
 * that case, this function will fail.
 *
 * USAGE:
 *   obj = new Object(...);
 *   another_obj = new Object(...);
 *
 *   Utility.areEqual(obj, another_obj); // returns true or false
 */
Utility.areEqual = function(x, y) {
    if (Object.keys(y).length !== Object.keys(x).length) {
        return false;
    }

    var key;
    for (key in y) {
        if (x[key] !== y[key]) {
            return false;
        }
    }

    return true;
}

describe('Response', function() {
    describe('toXML()', function() {
        var response = new plivo.Response();

        it('should return string of XML response.', function() {
            assert.equal('string', typeof response.toXML());
        });

        it('should return empty response element when no other elements have been added.', function() {
            assert.equal('<?xml version="1.0"?><Response/>', response.toXML());
        });

        delete response;
    });

    describe('add() via add<Element>()', function() {
        var response = new plivo.Response();

        it('should add child element to the object it is called on.', function() {
            var children_len = response.children.length;

            response.addWait({
                length: 3,
            });

            assert.equal(children_len+1, response.children.length);
            assert.equal('Wait', response.children[children_len].name);
            assert.equal('<?xml version="1.0"?><Response><Wait length="3"/></Response>', response.toXML());
        });

        it('should add child element with text content to the object it is called on.', function() {
            var child_pos = response.children.length;

            var text = 'This is a test speach.';
            response.addSpeak(text);
            // signifies that this is not an XML element but text
            assert.equal(undefined, response.children[child_pos].attribs.name);

            // // check if the text provided was added as provided or not
            assert.equal(text, response.children[child_pos].value);
        });

        it('should add child element with attributes to the object it is called on.', function() {
            var child_pos = response.children.length;

            var attributes = {
                action: 'http://test.com/dial',
                method: 'GET',
                timeout: '10',
            };
            response.addDial(attributes);

            if (!Utility.areEqual(attributes, response.children[child_pos].attribs)) {
                assert.fail(response.children[child_pos].attributes,
                        attributes, 'Attributes objects should match.');
            }
        });

        it('should add child element with text content and attributes to the object is called on.', function() {
            var child_pos = response.children.length;

            var attributes = {
                src: '1202322222',
                dst: '1203443444',
                type: 'sms',
            };
            var text = 'Sending a test message.';
            response.addMessage(text, attributes);

            assert.equal(child_pos+1, response.children.length);
            assert.equal('Message', response.children[child_pos].name);

            if (!Utility.areEqual(attributes, response.children[child_pos].attribs)) {
                assert.fail(response.children[child_pos].attributes,
                        attributes, 'Attributes objects should match.');
            }

            assert.equal(text, response.children[child_pos].value);
        });

        it('should add multiple child elements when called multiple times.', function() {
            var children_len = response.children.length;

            response.addWait({ length: '3' });
            response.addMessage('Some message.');
            response.addSpeak('Some speach.', { loop: '2' });

            assert.equal(children_len+3, response.children.length);
        });

        // we just pick the required attribtutes and ignore others
        // it('should throw error when invalid attribute is added.', function() {
        //     var child_pos = response.children.length;

        //     var attributes = {
        //         incorrect_attribute: 'xyz',
        //     };
        //     var text = 'Sending a test message.';

        //     assert.throws(
        //         function() {
        //             response.addMessage(text, attributes);
        //         }
        //     );
        // });

        it('should add child elements to elements that can have children', function() {
            var child_pos = response.children.length;
            var dial_element = response.addDial();
            var number = '1234567890';
            var attributes = {
                sendDigits: '2410',
            };
            dial_element.addNumber(number, attributes);

            assert.equal(1, response.children[child_pos].children.length);

            var child = response.children[child_pos].children[0];
            assert.equal('Number', child.name);

            if (!Utility.areEqual(child.attribs, attributes)) {
                assert.fail(child.attributes, attributes,
                        'Attributes objects should match.');
            }

            // check if the number was added as content or not
            assert.equal(number, child.value);
        });

        it('should throw error when attempted to add incorrect child element to parent.', function() {
            var hangup_element = response.addHangup();

            assert.throws(
                function() {
                    hangup_element.addNumber('1234567890');
                }
            );
        });

        delete response;
    });
})
