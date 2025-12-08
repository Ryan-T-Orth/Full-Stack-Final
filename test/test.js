import { randomQuip, quips } from '../js/main.js'
import { addIngredient, deleteIngredient, addStep, deleteStep } from '../js/add.js'
import { escapeHTML } from '../js/recipe.js'
import { handleSubmit } from '../js/search.js'

// Import the sinon library to allow us to create a spy on the console.log function
// import sinon from 'sinon';

QUnit.module('main.js tests', function () {

    QUnit.test('randomQuip should load a random quip', function (assert) {

        const quip = randomQuip();

        assert.ok(quip !== "", 'randomQuip() actually generated text')
        assert.ok(quips.includes(quip), 'Generated quip is in the set of possible quips');
    });

});


QUnit.module("addStep tests", function (hooks) {

});


QUnit.module('search.js tests', function () {


});


QUnit.module('recipe.js tests', function () {


});