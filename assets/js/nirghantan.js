document.addEventListener('DOMContentLoaded', function() {
    const glossary = [
        { term: 'Aarti', definition: 'A ritual of worship, part of puja, in which light from wicks soaked in ghee is offered.' },
        { term: 'Ashtami', definition: 'The eighth day of the lunar fortnight.' },
        { term: 'Pandal', definition: 'A temporary structure, either simple or elaborate, in which a deity is worshipped.' },
        { term: 'Prasad', definition: 'A devotional offering made to a god, typically consisting of food that is later shared among devotees.' }
    ];

    const glossaryContainer = document.getElementById('glossaryContainer1');
    const searchInput = document.getElementById('searchInput');

    function renderGlossary(items) {
        glossaryContainer.innerHTML = '';
        items.forEach((item, idx) => {
            const accordion = document.createElement('div');
            accordion.className = 'accordion-item mb-2 border rounded-lg overflow-hidden';

            const header = document.createElement('button');
            header.className = 'accordion-header w-full text-left px-4 py-3 bg-gray-100 font-bold focus:outline-none';
            header.innerText = item.term;
            header.setAttribute('aria-expanded', 'false');
            header.setAttribute('aria-controls', `accordion-content-${idx}`);

            const content = document.createElement('div');
            content.className = 'accordion-content px-4 py-2 bg-white hidden';
            content.id = `accordion-content-${idx}`;
            content.innerHTML = `<p>${item.definition}</p>`;

            header.addEventListener('click', function() {
                const expanded = header.getAttribute('aria-expanded') === 'true';
                header.setAttribute('aria-expanded', !expanded);
                content.classList.toggle('hidden');
            });

            accordion.appendChild(header);
            accordion.appendChild(content);
            glossaryContainer.appendChild(accordion);
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
