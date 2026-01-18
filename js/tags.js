const selectedTags = {
    ingredients: new Set(),
    appliances:  new Set(),
    ustensils:   new Set()
};

function addTag(type, value) {
    const normalized = normalize(value);
    selectedTags[type].add(normalized);
    updateAll();
}

function removeTag(type, value) {
    const normalized = normalize(value);
    selectedTags[type].delete(normalized);
    updateAll();
}

function createTagElement(type, text) {
    const tag = document.createElement('div');
    tag.className = `tag ${type}`;
    tag.innerHTML = `
        ${text}
        <i class="fa fa-times" aria-hidden="true"></i>
    `;
    tag.querySelector('i').addEventListener('click', () => {
        removeTag(type, text);
    });
    return tag;
}

function refreshTagsDisplay() {
    const container = document.querySelector('.tags-container');
    container.innerHTML = '';

    Object.entries(selectedTags).forEach(([type, tagsSet]) => {
        tagsSet.forEach(tagNorm => {
            // On affiche la version originale (pas normalisée)
            let original = tagNorm;
            if (type === 'ingredients' || type === 'ustensils') {
                // On cherche une casse correcte dans les données
                for (const r of recipes) {
                    if (type === 'ingredients') {
                        const found = r.ingredients.find(i => normalize(i.ingredient) === tagNorm);
                        if (found) { original = found.ingredient; break; }
                    } else {
                        const found = r.ustensils.find(u => normalize(u) === tagNorm);
                        if (found) { original = found; break; }
                    }
                }
            } else if (type === 'appliances') {
                for (const r of recipes) {
                    if (normalize(r.appliance) === tagNorm) {
                        original = r.appliance;
                        break;
                    }
                }
            }

            const el = createTagElement(type, original);
            container.appendChild(el);
        });
    });
}