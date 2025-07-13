const cart = document.getElementById("cart");
let products = [];

function add(event) {
    event.preventDefault();

    const name = document.getElementById("Name").value.trim();
      const price =parseFloat(document.getElementById("Price").value.trim());
      const category = document.getElementById("Category").value.trim();
      const image = document.getElementById("Image").value.trim();


     if(!name || isNaN(price) || !category || !image){
        alert("Please fillall fields correctly.")
        return;
     }

     
}
