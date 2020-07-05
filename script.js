
/* ---------- CREER LES CARDS ET LES AFFICHER ---------- */

// Sélectionne la div dans laquelle on veut injecter les cards
cardsContainer = document.querySelector('#cardsContainer');

/* Crée une fonction qui crée et affiche le nombre de cards demandé */
function displayCards(cardsNumber) {
    // Fait une boucle jusqu'au nombre de cards demandé
    for (let i = 0; i < cardsNumber; i++) {
        // A chaque itération, crée un titre avec le numéro de la carte
        // (n° en cours de l'itérateur + 1, car l'itérateur démarre à 0)
        cardTitle = 'Titre n°' + (i + 1);
    
        // Crée une string qui contient tout le code html de création de card 
        // (injecte la variable contenant le titre en cours dans 'card-title')
        cardToDisplay =
        `<div class="col-3">
            <div class="card mt-5 mx-3">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" alt="Card image">
                <div class="card-body">
                    <h5 class="card-title">${cardTitle}</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae ornare purus. 
                        Duis ut nisl at ligula elementum tristique. Cras ut turpis in dui vulputate sollicitudin ut sed diam. 
                        Mauris tempus sapien eget dui sodales porta. Proin consequat orci non imperdiet condimentum.
                    </p>
                </div>
            </div>
        </div>`;
    
        // Injecte la card dans la div ciblée 
        // ('+=' ajoute un nouvel élément au innerHTML sans écraser ceux déjà présents)
        cardsContainer.innerHTML += cardToDisplay;
    }
}

// Appelle la fonction 
displayCards(4);


/* ---------- AJOUTER UN EVENT LISTENER SUR LES TITRES ---------- */

// Sélectionne tous les titres de cards
titles = document.querySelectorAll('.card-title');

/* Fait une boucle sur le tableau des titres pour leur attribuer la classe souhaitée */
titles.forEach(title => {
    // Ajoute un écouteur de clic sur chaque titre
    title.addEventListener('click', function(event) {
        // Si le contenu de la cible de l'évènement est 'Titre n°1'
        if (event.target.innerHTML === 'Titre n°1') {
            // Ajoute à l'élément la classe 'title1'
            title.classList.add('title1');
        } else {
            // Sinon ce n'est pas le 1er titre, donc ajoute la classe 'otherTitle'
            title.classList.add('otherTitle');
        }
    })
})
