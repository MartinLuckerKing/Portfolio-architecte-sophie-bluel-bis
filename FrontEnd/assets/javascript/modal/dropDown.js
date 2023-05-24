/**
 * Affiche la data récupéré par la fonction dropDownFetchUrl() et les mets en forme
 * dans un dropdown menu.
 * 
 * @param {Array} data - Tableau des catégorie de la base de donnée.
 */

const dropDown = (data => {
    const dropDown = document.querySelector('#dropDown');

    data.forEach(item => {
        const listDropDown = document.createElement('option')
        listDropDown.textContent = item.name;
        dropDown.appendChild(listDropDown)
    });
});

/**
 * Récupère les information du backend et transforme le JSON en un objet javascript
 * pour ensuite envoyer cette data dans la fonction "dropDown()" pour afficher
 * et manipuler cette data.
 *
 * @param {string} url - URL du chemin vers les catégories du backend
 *
 */

export async function dropDownFetchUrl(url) {
    await fetch(url)
        .then(response => {
            return response.json();
        })

        .then(data => {
            dropDown(data);
        });
};