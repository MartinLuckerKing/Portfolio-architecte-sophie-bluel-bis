
/**
 * Supprime les espaces et les "&".
 *
 * @param {string} chaine - la chaine de caractère que vous souhaitez modifier.
 *
 */

function deleteSpecialCharacter(chaine) {
    return chaine.replace(/ |&/g, '');
  }
  

/**
 * affiche les catégories récupérés dans la base de donnée.
 *
 * @param {Array} data - Donnée que vous souhaitez afficher.
 *
 */

export const categoriesFetch = (data => {

    const categories = document.querySelector("#categories ul");
    
    data.forEach(item => {
        const listCategories = document.createElement("li");
        listCategories.classList.add('category')
        listCategories.textContent = item.name;
        listCategories.dataset.idCategories = item.id;
        listCategories.id = deleteSpecialCharacter(item.name);
        categories.appendChild(listCategories);
    });
});

/**
 * Récupère les information du backend et transforme le JSON en un objet javascript
 * pour ensuite envoyer cette data dans la fonction "categoriesFetch" pour afficher
 * et manipuler cette data.
 *
 * @param {string} url - URL du chemin vers les catégories du backend
 *
 */

export const categoriesFetchUrl = (url => {
    fetch(url)
    
        .then(response => {
            return response.json();
        })
      
        .then(data => {
            categoriesFetch(data);
            });
        });

