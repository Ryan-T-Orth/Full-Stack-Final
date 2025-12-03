import {loadItems, deleteItem, randomQuip, onLoad} from '../js/main.js';
import {escapeHTML, addItem, addIngredient, addStep, deleteIngredient, deleteStep} from '../js/add.js';
import {handleSubmit} from '../js/search.js';
import {loadRecipe} from '../js/recipe.js';

// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    hooks.beforeEach(() => {
        fixture = document.getElementById("qunit-fixture");
    });

    QUnit.test('helloWorld should print Hello World to the console', function(assert) {
        //Arrange
        const consoleSpy = sinon.spy(console, 'log');
        //Act
        helloWorld();
        //Assert
        assert.ok(consoleSpy.calledWith('Hello World'), 'console.log should be called with Hello World');
        consoleSpy.restore();
    });

    

});


QUnit.module('add.js tests', function() {

    hooks.beforeEach(() => {
        fixture = document.getElementById("qunit-fixture");
    });

});


QUnit.module('search.js tests', function() {

    hooks.beforeEach(() => {
        fixture = document.getElementById("qunit-fixture");
    });
    
});


QUnit.module('recipe.js tests', function() {

    hooks.beforeEach(() => {
        fixture = document.getElementById("qunit-fixture");
    });
    
});
