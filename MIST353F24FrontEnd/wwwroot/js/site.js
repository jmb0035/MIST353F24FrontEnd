// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
 async function fetchInfo() {
    let userInput = document.getElementById("inputFld").value;
    let url = `https://world.openfoodfacts.org/api/v3/product/$(userInput).json`

     const response = await fetch(url);
     const data = await response.json();

     let productNutrientLevels = data.product.nutrient_levels

     for (let key in productNutrientLevels) {

     }

}


