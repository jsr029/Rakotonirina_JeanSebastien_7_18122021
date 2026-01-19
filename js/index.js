// index.js
import Dropdown from './Dropdown.js';
import GlobalSearch from './GlobalSearch.js';
import DisplayTags from './DisplayTags.js';
import recipes from './recipes.js';
import dropSearch from './dropSearch.js';
import { setCurrentRecipes } from './state.js';

setCurrentRecipes(recipes);           // initialisation

new Dropdown().render();
new GlobalSearch().render();
dropSearch();

const tagsManager = new DisplayTags();
tagsManager.init();
tagsManager.refreshAll();             // premier affichage