function toggleDropdown(block) {
    const isOpen = block.classList.contains('open');
    document.querySelectorAll('.dropdown-block').forEach(b => b.classList.remove('open'));

    if (!isOpen) {
        block.classList.add('open');
    }
}

function initDropdowns() {
    document.querySelectorAll('.dropdown-block h2').forEach(h2 => {
        h2.addEventListener('click', () => {
            const block = h2.closest('.dropdown-block');
            toggleDropdown(block);
        });
    });

    // Fermer quand on clique ailleurs
    document.addEventListener('click', e => {
        if (!e.target.closest('.dropdown-block')) {
            document.querySelectorAll('.dropdown-block').forEach(b => b.classList.remove('open'));
        }
    });

    // Recherche dans les dropdowns (filtre local)
    document.querySelectorAll('.search-in-dropdown').forEach(input => {
        input.addEventListener('input', e => {
            const block = input.closest('.dropdown-block');
            const list = block.querySelector('.list');
            const query = normalize(e.target.value);

            Array.from(list.children).forEach(item => {
                const text = normalize(item.textContent);
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });
    });
}

function refreshDropdown(type, items) {
    const container = document.querySelector(`.dropdown-block.${type} .list`);
    //container.innerHTML = '';
    container.textContent = '';

    items.forEach(item => {
        const el = document.createElement('div');
        el.textContent = item;
        el.addEventListener('click', () => {
            addTag(type, item);
            // Optionnel : refermer le dropdown après ajout
            document.querySelector(`.dropdown-block.${type}`).classList.remove('open');
        });
        container.appendChild(el);
    });
}