import displayRecipes from './displayRecipes.js';
import dropdown from './dropdown.js';
import globalSearch from './globalSearch.js';
import recipes from './recipes.js';
new dropdown().render();
new globalSearch().render(recipes);
