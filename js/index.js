import Dropdown from './Dropdown.js';
import GlobalSearch from './GlobalSearch.js';
import recipes from './recipes.js';
import dropSearch from './dropSearch.js';
new Dropdown().render();
new GlobalSearch().render(recipes);
dropSearch();
