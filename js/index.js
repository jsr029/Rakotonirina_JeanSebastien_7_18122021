import dropdown from './dropdown.js';
import globalSearch from './globalSearch.js';
import recipes from './recipes.js';
import dropSearch from './dropSearch.js';
new dropdown().render();
new globalSearch().render(recipes);
dropSearch();
