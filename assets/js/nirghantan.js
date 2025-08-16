document.addEventListener('DOMContentLoaded', function() {
    const glossary = [
        { term: 'Aarti', definition: 'A ritual of worship, part of puja, in which light from wicks soaked in ghee is offered.' },
        { term: 'Ashtami', definition: 'The eighth day of the lunar fortnight.' },
        { term: 'Pandal', definition: 'A temporary structure, either simple or elaborate, in which a deity is worshipped.' },
        { term: 'Prasad', definition: 'A devotional offering made to a god, typically consisting of food that is later shared among devotees.' }
    ];

    const glossaryContainer = document.getElementById('glossaryContainer');
    const searchInput = document.getElementById('searchInput');

    function renderGlossary(items) {
        glossaryContainer.innerHTML = '';
        items.forEach(item => {
            const entry = document.createElement('div');
            entry.className = 'bg-white p-4 rounded-lg shadow';
            entry.innerHTML = `<h3 class="text-xl font-bold">${item.term}</h3><p>${item.definition}</p>`;
            glossaryContainer.appendChild(entry);
        });
    }

    function filterGlossary() {
        const query = searchInput.value.toLowerCase();
        const filtered = glossary.filter(item => 
            item.term.toLowerCase().includes(query) || 
            item.definition.toLowerCase().includes(query)
        );
        renderGlossary(filtered);
    }

    searchInput.addEventListener('input', filterGlossary);

    renderGlossary(glossary);
});
