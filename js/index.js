import displayRecipes from './displayRecipes.js';
import dropdown from './dropdown.js';
import recipes from './recipes.js';
new dropdown().render();
new displayRecipes().render(recipes);