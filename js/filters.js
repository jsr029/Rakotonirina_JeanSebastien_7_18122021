// filters.js
import recipes from './recipes.js';
import { currentSearchText, activeTags } from './state.js';

export function filterByText(list, query) {
  if (!query || query.length < 3) return list;
  const q = query.toLowerCase();
  return list.filter(r => {
    if (r.name.toLowerCase().includes(q)) return true;
    if (r.description.toLowerCase().includes(q)) return true;
    return r.ingredients.some(i => i.ingredient.toLowerCase().includes(q));
  });
}

export function filterByTag(list, tag) {
  const { type, value } = tag;
  const v = value.toLowerCase();
  return list.filter(r => {
    if (type === 'ingredient') {
      return r.ingredients.some(i => i.ingredient.toLowerCase().includes(v));
    }
    if (type === 'appliance') {
      return r.appliance.toLowerCase().includes(v);
    }
    if (type === 'ustensil') {
      return r.ustensils.some(u => u.toLowerCase().includes(v));
    }
    return false;
  });
}

export function applyAllFilters() {
  let result = recipes;

  // Filtre texte
  if (currentSearchText.length >= 3) {
    result = filterByText(result, currentSearchText);
  }

  // Tous les tags
  activeTags.forEach(tag => {
    result = filterByTag(result, tag);
  });

  return result;
}