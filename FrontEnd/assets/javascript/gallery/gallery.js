/**
 * Supprime tout le HTML que possède la classe gallery.
 */

export const deleteElement = () => {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = '';
};

/**
 * Crée les images dans la gallerie.
 * 
 * @param {Array} data - Donnée que vous souhaitez afficher.
 */

const createElementInGallery = (data) => {
    const gallery = document.querySelector(".gallery");
        data.forEach(item =>{
            const galleryFigure = document.createElement("figure");
            const galleryImg = document.createElement("img");
            const galleryFigureCaption = document.createElement("figcaption");

            galleryImg.src = item.imageUrl;
            galleryFigure.dataset.idCategory = item.categoryId;
            galleryFigureCaption.innerHTML = item.title;
            galleryFigure.classList.add('figureTargetGallery')

            gallery.appendChild(galleryFigure);
            galleryFigure.appendChild(galleryImg);
            galleryFigure.appendChild(galleryFigureCaption);
    });
};

/**
 * Affiche ou non selon la catégorie cliqué les images de la gallerie.
 * 
 * @param {Integer} id - Chiffre de l'id de la catégorie.
 * @param {string} selector - querySelector.
 */

const displayGallery = (id, selector) => {
    const figureTargetGallery = document.querySelectorAll('.figureTargetGallery');
    const objets = document.querySelector(selector);
    objets.addEventListener('click', function() {
        for (const figure of figureTargetGallery) {
            if (figure.dataset.idCategory == id || id == 0) {
                figure.style.display = 'block';
            } else {
                figure.style.display = 'none';
            }
        }
    });
};

/**
 * Récupère les information du backend et transforme le JSON en un objet javascript
 * pour ensuite envoyer cette data dans la fonction "createElementInGallery" pour afficher
 * et manipuler cette data.
 *
 * @param {string} url - URL du chemin vers les images du backend
 *
 */

export function galleryFetchUrl(url) {
     fetch(url)
        .then(response => {
            return response.json();
        })

        .then(data => {
            createElementInGallery(data)
            displayGallery( 0, '#All')
            displayGallery( 1, '#Objets')
            displayGallery( 2, '#Appartements')
            displayGallery( 3, '#Hotelsrestaurants')
        });
};
