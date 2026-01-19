// state.js
export let currentRecipes = [];
export let activeTags = [];          // ex: [{type: "ingredient", value: "citron"}, ...]
export let currentSearchText = "";

export function setCurrentRecipes(recipes) {
  currentRecipes = recipes;
}

export function addTag(type, value) {
  const normalized = value.trim().toLowerCase();
  const exists = activeTags.some(t => t.type === type && t.value.toLowerCase() === normalized);
  if (!exists) {
    activeTags.push({ type, value: value.trim() });
  }
}

export function removeTag(type, value) {
  const normalized = value.trim().toLowerCase();
  activeTags = activeTags.filter(t => 
    !(t.type === type && t.value.toLowerCase() === normalized)
  );
}

export function setSearchText(text) {
  currentSearchText = text.trim();
}