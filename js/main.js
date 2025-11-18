const addItem = (event) => {
    event.preventDefault();
    const id = document.getElementById("id").value;
    const price = document.getElementById("price").value;
    const name = document.getElementById("name").value;

    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://eq08yo1hu1.execute-api.us-west-2.amazonaws.com/items");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "id": `${id}`,
        "price": price,
        "name": `${name}`
    }));

    event.target.reset();
}

const loadItems = () => {
    let tableBody = document.getElementById("table-body");
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", function () {
        for (let i = 0; i < xhr.response.length; i++) {
            let item = xhr.response[i];
            let row = tableBody.insertRow(tableBody.rows.length - 1);
            row.id = item.id;
            const idCell = row.insertCell();
            let nameCell = row.insertCell();
            let priceCell = row.insertCell();
            let actionCell = row.insertCell();

            idCell.innerText = item.id;
            nameCell.innerText = item.name;
            priceCell.innerText = item.price;
            actionCell.innerHTML = `<button id="delete-data" onClick="deleteItem(${item.id})">Delete</button>`;
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