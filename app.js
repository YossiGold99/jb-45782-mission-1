const cartBody = document.getElementById("cartBody");

let products = JSON.parse(localStorage.getItem("products")) || [];
updateTable();

function addProduct(event) {
    event.preventDefault();

    const data = collectDataFromForm();
    if (!data) return;

    products.push(data);

    localStorage.setItem("products", JSON.stringify(products));

    updateTable();
    clearForm();
}

function collectDataFromForm() {
    const name = document.getElementById("productName").value.trim();
    const price = parseFloat(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value;
    const image = document.getElementById("productImage").value.trim();

    if (!name || isNaN(price) || !category || !image) {
        alert("Please fill in all fields correctly.");
        return null;
    }

    return { name, price, category, image };
}

function updateTable() {
    cartBody.innerHTML = "";

    products.forEach((product, index) => {
        cartBody.innerHTML += `
      <tr>
        <td>${product.name}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.category}</td>
        <td><img src="${product.image}" width="100"></td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button></td>
      </tr>
    `;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(products));

    updateTable();
}

function clearForm() {
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productImage").value = "";
}
