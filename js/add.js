let nextIngredientNum = 2;
let nextStepNum = 2;

const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
}

function escapeHTML (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return escapeMap[s];
    });
}

const addItem = (event) => {
    event.preventDefault();

    const UUID = Date.now();
    const recipeName = document.getElementById("recipe-name").value;
    const timeEstimate = document.getElementById("time-estimate").value;
    const recipeServings = document.getElementById("recipe-servings").value;
    const ingredientsList = document.getElementsByClassName("ingredient");
    const stepsList = document.getElementsByClassName("step");

    let ingredients = [];
    let steps = [];

    let ingredient;
    for (let i = 0; i < ingredientsList.length; i++) {
        ingredient = ingredientsList[i];
        let ingredientName = escapeHTML(ingredient.children[0].value);
        let ingredientAmount = ingredient.children[1].value;
        let ingredientMeasurement = ingredient.children[2].value;
        ingredients.push({name: `${ingredientName}`, amount: `${ingredientAmount}`, measurement: `${ingredientMeasurement}`});
    }

    let step;
    for (let i = 0; i < stepsList.length; i++) {
        step = stepsList[i];
        let instruction = escapeHTML(step.children[1].value);
        steps.push(`${instruction}`);
    }

    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://eq08yo1hu1.execute-api.us-west-2.amazonaws.com/items");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "id": `${UUID}`,
        "name": `${recipeName}`,
        "time": timeEstimate,
        "servings": recipeServings,
        "ingredients": ingredients,
        "steps": steps
    }));

    console.log(JSON.stringify({
        "id": `${UUID}`,
        "name": `${recipeName}`,
        "time": timeEstimate,
        "servings": recipeServings,
        "ingredients": ingredients,
        "steps": steps
    }));

    event.target.reset();
}

const addIngredient = () => {
    const ingredients = document.getElementById("ingredients-list");
    const ingredient = document.createElement("span");
    ingredient.className = "ingredient";
    ingredient.innerHTML = `

        <input class="ingredient-name" placeholder="Ingredient" required aria-required>
                    
        <input class="ingredient-amount" placeholder="Amount" type="number" required aria-required>
   
        <select class="ingredient-measurement" aria-placeholder="Measurement" required aria-required>
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
    `;

    ingredients.appendChild(ingredient);
    nextIngredientNum++;
}

const addStep = () => {
    const steps = document.getElementById("steps-list");
    const step = document.createElement("span");
    step.className = "step";
    step.innerHTML = `
        <br>
        <label for="step-${nextStepNum}">Step ${nextStepNum}: </label>
        <input class="step-text" id="step-1" name="step-1" placeholder="Step" required aria-required>
        <br>
    `;

    steps.appendChild(step);
    nextStepNum++;
}

const deleteIngredient = () => {
    const ingredients = document.getElementsByClassName("ingredient");
    
    if (nextIngredientNum === 2 || ingredients.length === 1) {
        alert("Recipes need at least 1 ingredient silly!");
        return;
    }

    ingredients[ingredients.length - 1].remove();
    nextIngredientNum--;
}

const deleteStep = () => {
    const steps = document.getElementsByClassName("step");
    
    if (nextStepNum === 2 || steps.length === 1) {
        alert("Recipes need at least 1 step silly!");
        return;
    }

    steps[steps.length - 1].remove();
    nextStepNum--;
}