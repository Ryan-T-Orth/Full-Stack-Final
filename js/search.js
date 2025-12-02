function handleSubmit(event) {

    event.preventDefault();

    let query = document.getElementById("search-bar").value;
    let results = document.getElementById("search-results");

    results.innerHTML = '';

    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function () {
        for (let i = 0; i < xhr.response.length; i++) {
            let recipe = xhr.response[i];

            if (!recipe.name.includes(query)) {
                continue;
            }

           let recipeCard = document.createElement("div");
            recipeCard.className = "recipe-div";
            
            const url = new URL("recipe.html", window.location.href);
            url.searchParams.set("id", recipe.id);

            recipeCard.innerHTML = `
                    <a href="${url.toString()}"><h3 class="recipe-name">${recipe.name}</h3></a>
                    <button type="button" class="delete-button" onClick="deleteItem(${recipe.id})">Delete</button>
                    <p class="recipe-time">${recipe.time} Mins</p>`;

            results.appendChild(recipeCard);
        }
        console.log(xhr.response);
    });
    xhr.open("GET", "https://eq08yo1hu1.execute-api.us-west-2.amazonaws.com/items"); 
    xhr.send();

    // event.target.reset();
}