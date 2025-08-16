document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Subscription form
    const subscriptionForm = document.getElementById('subscriptionForm');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.remove('hidden');
            subscriptionForm.reset();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successMessage = document.getElementById('contactSuccessMessage');
            successMessage.classList.remove('hidden');
            contactForm.reset();
        });
    }

    // vCard download
    document.querySelectorAll('.download-vcard').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.dataset.name;
            const email = this.dataset.email;
            const role = this.dataset.role;
            const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:Siddha Durga Puja
TITLE:${role}
EMAIL:${email}
END:VCARD`;
            const blob = new Blob([vCard], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${name.replace(' ', '_')}.vcf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

    // News feed on homepage
    if (document.querySelector('.home-news-feed')) {
        fetch('assets/news.json')
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.querySelector('.home-news-feed');
                data.slice(0, 3).forEach(article => {
                    const articleEl = document.createElement('div');
                    articleEl.className = 'bg-white p-6 rounded-lg shadow-lg';
                    articleEl.innerHTML = `
                        <h3 class="text-xl font-bold mb-2">${article.title}</h3>
                        <p class="text-gray-600">${article.summary}</p>
                    `;
                    newsContainer.appendChild(articleEl);
                });
            });
    }

    // News feed on news page
    if (document.getElementById('newsFeed')) {
        fetch('assets/news.json')
            .then(response => response.json())
            .then(data => {
                const newsFeed = document.getElementById('newsFeed');
                data.forEach(article => {
                    const articleEl = document.createElement('div');
                    articleEl.className = 'bg-white p-6 rounded-lg shadow-lg';
                    articleEl.innerHTML = `
                        <h2 class="text-2xl font-bold mb-2">${article.title}</h2>
                        <p class="text-gray-600 mb-4">${article.summary}</p>
                        <a href="#" class="text-red-500 hover:underline">Read more</a>
                    `;
                    newsFeed.appendChild(articleEl);
                });
            });
    }
});
