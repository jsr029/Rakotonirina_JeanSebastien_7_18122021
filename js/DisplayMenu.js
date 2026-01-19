// DisplayMenu.js
import { currentRecipes } from './state.js';

export default class DisplayMenu {
  render() {
    const ingredients = new Set();
    const appliances = new Set();
    const ustensils  = new Set();

    currentRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => ingredients.add(ing.ingredient.trim()));
      appliances.add(recipe.appliance.trim());
      recipe.ustensils.forEach(u => ustensils.add(u.trim()));
    });

    // Ingrédients
    const ingList = document.querySelector('.dropdown_ingredients-list');
    ingList.innerHTML = [...ingredients]
      .sort()
      .map(item => `<a href="#" data-type="ingredient" data-value="${item}">${item}</a>`)
      .join('');

    // Appareils
    const appList = document.querySelector('.dropdown_appliance-list');
    appList.innerHTML = [...appliances]
      .sort()
      .map(item => `<a href="#" data-type="appliance" data-value="${item}">${item}</a>`)
      .join('');

    // Ustensiles
    const ustList = document.querySelector('.dropdown_ustensils-list');
    ustList.innerHTML = [...ustensils]
      .sort()
      .map(item => `<a href="#" data-type="ustensil" data-value="${item}">${item}</a>`)
      .join('');
  }
}
