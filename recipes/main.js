export const recipes = [
    {
      name: "Apple Crisp",
      image: "images/apple-crisp.jpg",
      tags: ["dessert", "fruit"],
      rating: 4,
      description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    },
    {
      name: "Chocolate Cake",
      image: "images/chocolate-cake.jpg",
      tags: ["dessert", "chocolate"],
      rating: 5,
      description: "A rich and moist chocolate cake perfect for any occasion."
    },
    {
      name: "Caesar Salad",
      image: "images/caesar-salad.jpg",
      tags: ["salad", "healthy"],
      rating: 3,
      description: "A classic Caesar salad with homemade dressing."
    },
    {
        name: "Chocolate Chip Cookies",
        image: "images/chocolate-chip-cookies.jpg",
        tags: ["dessert", "snack"],
        rating: 5,
        description: "Classic homemade chocolate chip cookies that are soft and chewy."
      },
      {
        name: "Black Beans and Rice",
        image: "images/black-beans-and-rice.jpg",
        tags: ["dinner", "vegan"],
        rating: 4,
        description: "A flavorful and hearty dish, perfect as a main or side."
      },
];

// Get a random recipe
function getRandomRecipe(recipeList) {
    const randomIndex = Math.floor(Math.random() * recipeList.length);
    return recipeList[randomIndex]; // Use the parameter instead of hardcoding "recipes"
}

// Generate tags
function tagsTemplate(tags) {
    return tags.map(tag => `<button>${tag}</button>`).join('');
}

// Generate rating stars
function ratingTemplate(rating) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
        html += i <= rating 
            ? '<span aria-hidden="true" class="icon-star">⭐</span>' 
            : '<span aria-hidden="true" class="icon-star">☆</span>';
    }
    return html;
}

// Generate recipe HTML
function recipeTemplate(recipe) {
    return `
        <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="recipe-content">
            ${tagsTemplate(recipe.tags)}
            <h2>${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${ratingTemplate(recipe.rating)}
            </span>
            <p>${recipe.description}</p>
        </div>`;
}

// Render a recipe
function renderRecipes(recipe) {
    let recipeContainer = document.querySelector('.recipe');
    recipeContainer.innerHTML = recipeTemplate(recipe); // Replace instead of appending
}

// Initialize the page with a random recipe
function init() {
    const recipe = getRandomRecipe(recipes);
    renderRecipes(recipe);
}

init();

  


  
  
