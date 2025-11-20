let nextIngredientNum = 2;
let nextStepNum = 2;

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
        let ingredientName = ingredient.children[0].value;
        let ingredientAmount = ingredient.children[1].value;
        let ingredientMeasurement = ingredient.children[2].value;
        ingredients.push({name: `${ingredientName}`, amount: `${ingredientAmount}`, measurement: `${ingredientMeasurement}`});
    }

    let step;
    for (let i = 0; i < stepsList.length; i++) {
        step = stepsList[i];
        let instruction = step.children[1].value;
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