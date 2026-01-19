// GlobalSearch.js
import DisplayRecipes from './DisplayRecipes.js';
import DisplayMenu from './DisplayMenu.js';
import { setSearchText, setCurrentRecipes } from './state.js';
import { applyAllFilters } from './filters.js';   // ← ICI le changement important

const dispRecipes = new DisplayRecipes();
const dispMenu = new DisplayMenu();

export default class GlobalSearch {
  render() {
    const search = document.querySelector(".globalSearch");

    search.addEventListener('input', () => {
      setSearchText(search.value);
      const filtered = applyAllFilters();           // ← vient de filters.js
      setCurrentRecipes(filtered);

      dispRecipes.nbrRecipes(filtered);
      dispRecipes.render(filtered);
      dispMenu.render();
    });
  }
}
