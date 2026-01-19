// DisplayTags.js
import DisplayRecipes from './DisplayRecipes.js';
import DisplayMenu from './DisplayMenu.js';
import { addTag, removeTag, setCurrentRecipes } from './state.js';
import { applyAllFilters } from './filters.js';

const dispRecipes = new DisplayRecipes();
const dispMenu    = new DisplayMenu();

export default class DisplayTags {
  init() {
    // Délégation d'événements sur les listes
    document.querySelector('.dropdown').addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        const type = e.target.dataset.type;
        const value = e.target.dataset.value;
        if (type && value) {
          addTag(type, value);
          this.refreshAll();
          this.showTag(type, value);
        }
      }
    });

    // Suppression tags
    document.querySelectorAll('.underSearch').forEach(container => {
      container.addEventListener('click', e => {
        if (e.target.closest('i.fas.fa-times-circle')) {
          const tagContainer = e.target.closest('[class*="Tags"]');
          if (!tagContainer) return;

          const type = tagContainer.className.includes('ingredients') ? 'ingredient' :
                       tagContainer.className.includes('appliance')  ? 'appliance'  :
                       'ustensil';

          const value = tagContainer.querySelector('[class^="tag"]').textContent.trim();

          removeTag(type, value);
          tagContainer.style.display = 'none';
          this.refreshAll();
        }
      });
    });
  }

  showTag(type, value) {
    let container, tagEl;
    if (type === 'ingredient') {
      container = document.querySelector('.underSearch_ingredientsTags');
      tagEl = container.querySelector('.tagIngredients');
    } else if (type === 'appliance') {
      container = document.querySelector('.underSearch_applianceTags');
      tagEl = container.querySelector('.tagAppliance');
    } else {
      container = document.querySelector('.underSearch_ustensilsTags');
      tagEl = container.querySelector('.tagUstensils');
    }

    if (container && tagEl) {
      tagEl.textContent = value;
      container.style.display = 'flex';
    }
  }

  refreshAll() {
    const filtered = applyAllFilters();
    setCurrentRecipes(filtered);

    dispRecipes.nbrRecipes(filtered);
    dispRecipes.render(filtered);
    dispMenu.render();
  }
}
