// js/dropdown.js

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-block').forEach(block => {
        block.classList.remove('open');
    });
}

function toggleDropdown(block) {
    const isCurrentlyOpen = block.classList.contains('open');
    
    // On ferme tout d'abord
    closeAllDropdowns();
    
    // Puis on ouvre celui qu'on vient de cliquer (si il n'était pas déjà ouvert)
    if (!isCurrentlyOpen) {
        block.classList.add('open');
    }
}

function initDropdownEvents() {
    // Clic sur le titre (h2) → toggle
    document.querySelectorAll('.dropdown-block h2').forEach(h2 => {
        h2.addEventListener('click', (e) => {
            e.stopPropagation(); // important : empêche la propagation vers document
            const block = h2.closest('.dropdown-block');
            if (block) {
                toggleDropdown(block);
            }
        });
    });

    // Clic n'importe où ailleurs → tout fermer
    document.addEventListener('click', (e) => {
        // Si le clic est à l'intérieur d'un dropdown → on ne ferme pas
        if (e.target.closest('.dropdown-block')) {
            return;
        }
        closeAllDropdowns();
    });

    // Recherche dans les dropdowns (filtre local des items)
    document.querySelectorAll('.search-in-dropdown').forEach(input => {
        input.addEventListener('input', (e) => {
            const block = input.closest('.dropdown-block');
            if (!block) return;

            const list = block.querySelector('.list');
            if (!list) return;

            const query = normalize(e.target.value);
            
            Array.from(list.children).forEach(item => {
                const text = normalize(item.textContent || '');
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });

        // Empêche que le clic dans l'input ferme le dropdown
        input.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// Appel unique au chargement
// (appelé depuis main.js)