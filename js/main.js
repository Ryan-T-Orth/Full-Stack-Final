const loadItems = () => {
    let grid = document.getElementById("recipe-grid");
    grid.innerHTML = '';
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function () {
        for (let i = 0; i < xhr.response.length; i++) {
            let recipe = xhr.response[i];

            let recipeCard = document.createElement("a");
            
            const url = new URL("pages/recipe.html", window.location.href);
            url.searchParams.set("id", recipe.id);
            
            recipeCard.href = url.toString();

            recipeCard.innerHTML = `
                <div class="recipe-div">
                    <h3 class="recipe-name">${recipe.name}</h3>
                    <p>${recipe.time} Mins</p>
                </div>`;

            grid.appendChild(recipeCard);
            
            // actionCell.innerHTML = `<button id="delete-data" onClick="deleteItem(${recipe.id})">Delete</button>`;
        }
        console.log(xhr.response);
    });
    xhr.open("GET", "https://eq08yo1hu1.execute-api.us-west-2.amazonaws.com/items");
    xhr.send();
}

const deleteItem = (id) => {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `https://eq08yo1hu1.execute-api.us-west-2.amazonaws.com/items/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    document.getElementById(id).remove();
}
