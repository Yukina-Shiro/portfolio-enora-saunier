document.addEventListener('DOMContentLoaded', () => {
    
    // Sélection des éléments
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');

    // Gestion du clic
    burger.addEventListener('click', () => {
        // Ajoute ou enlève la classe 'nav-active' qui affiche le menu
        nav.classList.toggle('nav-active');
    });

    // Optionnel : Fermer le menu si on clique sur un lien (pratique sur mobile)
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });

    /* --- FILTRAGE DES PROJETS --- */
    
    // On sélectionne tous les boutons filtres et toutes les cartes
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // On ajoute un écouteur de clic sur chaque bouton
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Gestion de la classe 'active' sur les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Récupération de la catégorie cliquée
            const filterValue = button.getAttribute('data-filter');

            // 3. Filtrage des cartes
            projectCards.forEach(card => {
                // On récupère les catégories de la carte (ex: "java c data")
                const cardCategories = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                    // Si 'Tous' ou si la catégorie correspond, on affiche
                    card.style.display = 'flex'; // On remet en display flex
                    // Petite animation optionnelle
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    // Sinon on cache
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                }
            });
        });
    });

});
