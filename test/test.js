import { loadItems, onLoad, deleteItem, randomQuip, quips } from '../js/main.js'
import { addItem, addIngredient, deleteIngredient, addStep, deleteStep } from '../js/add.js'
import { loadRecipe } from '../js/recipe.js'
import { handleSubmit } from '../js/search.js'

// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    QUnit.test('randomQuip should load a random quip', function(assert) {

        this.html = createElement('div');
        this.html.innerHTML = index;

        randomQuip();
        
        const quip = document.getElementById("discover-title").innerText;

        assert.ok(quip !== "", 'randomQuip() actually generated text')
        assert.ok(quips.includes(quip), 'Generated quip is in the set of possible quips');
    });

});


QUnit.module('add.js tests', function() {


});


QUnit.module('search.js tests', function() {

    
});


QUnit.module('recipe.js tests', function() {

    
});





//  SETTING UP MOCK HTML  //

const index = `
    <div id="discover-container">
        <h2 id="discover-title"></h2>
        <button id="load-button" onclick="loadItems()"><strong>Load Recipes</strong></button>
    </div>

    <div id="recipe-grid">

    </div>
`;

const add = `
    <div id="form-area">

        <form onsubmit="addItem(event)">

            <div class="form-group" id="name-container">
                <label for="recipe-name">Name:</label>
                <input id="recipe-name" name="recipe-name" type="text" required>
            </div>

            <div class="form-group" id="time-container">
                <label for="time-estimate">Estimated Time (min):</label>
                <input id="time-estimate" name="time-estimate" type="number" min="1" required>
            </div>

            <div class="form-group" id="servings-container">
                <label for="recipe-servings">Servings:</label>
                <input name="recipe-servings" id="recipe-servings" min="1" type="number" required>
            </div>

            <div class="form-group" id="ingredients-container">
                <fieldset id="ingredients-list">
                    <legend>Ingredients List</legend>
                    <div class="ingredient">
                        <input name="ingredient-name" class="ingredient-name" placeholder="Ingredient" required aria-required>
                        
                        <input name="ingredient-amount" class="ingredient-amount" placeholder="Amount" type="number" min=".125" required aria-required>
                        
                        
                        <select name="ingredient-measurement" class="ingredient-measurement" aria-label="Ingredient Measurement" required aria-required>
                            <option disabled selected>Measurement</option>
                            <optgroup label="Volume">
                                <option value="Pinch">Pinch</option>
                                <option value="Tsp">Tsp</option>
                                <option value="Tbsp">Tbsp</option>
                                <option value="Fl Oz">Fl Oz</option>
                                <option value="Cup">Cups</option>
                                <option value="Pint (US)">Pint (US)</option>
                                <option value="Pint (UK)">Pint (UK)</option>
                                <option value="Quart">Quart</option>
                                <option value="Gal">Gal</option>
                                <option value="mL">mL</option>
                                <option value="L">L</option>
                            </optgroup>
                            <optgroup label="Weight">
                                <option value="Oz">Oz</option>
                                <option value="Lb">Lb</option>
                                <option value="g">g</option>
                            </optgroup>
                        </select>
                        <br>
                    </div>
                    
                </fieldset>
                
                <div class="button-group" id="ingredient-button-group">
                    <button id="add-ingredient" type="button" onclick="addIngredient()">Add Ingredient</button>
                    <button id="delete-ingredient" type="button" onclick="deleteIngredient()">Delete Ingredient</button>
                </div>
            </div>

            <div class="form-group" id="steps-container">
                <fieldset id="steps-list">
                    <legend>Steps</legend>
                    
                    <div class="step form-group">
                        <label class="step-label" for="step-1">Step 1: </label>
                        <textarea class="step-text" id="step-1" name="step-1" placeholder="Step" required aria-required></textarea>
                    </div>
                    
                </fieldset>
                
                 <div class="button-group" id="step-button-group">
                     <button id="add-step" type="button" onclick="addStep()">Add Step</button>
                     <button id="delete-step" type="button" onclick="deleteStep()">Delete Step</button>
                </div>
            </div>
                
            <div class="form-group" id="add-button-container">
                <button id="add-button" type="submit">Add Recipe</button>
            </div>
        </form>
    </div>
`;

const search = `
<div id="search-container">
        <h3 id="search-title">Quip</h3>
        <form id="search-form" onsubmit="handleSubmit(event)">
            <input aria-label="search bar" placeholder="Search" name="search-bar" id="search-bar">
            <button id="search-button" type="submit">Enter</button>
        </form>
    </div>

    <div id="search-results">

    </div>
`;

const recipe = `
    <div id="recipe-name-container">
        <h2 id="recipe-name"></h2>
    </div>

    <div id="info-container">
        <h4 id="recipe-time"></h4>
        <h4 id="recipe-servings"></h4>
    </div>

    <div id="ingredients-list-container">
        <h3 id="ingredients-title">Ingredients</h3>
        <hr>
        <ul id="ingredients-list">
            
        </ul>
    </div>

    <div id="steps-list-container">
        <h3 id="steps-title">Steps</h3>
        <hr>
        <ul id="steps-list">
            
        </ul>
    </div>
`;