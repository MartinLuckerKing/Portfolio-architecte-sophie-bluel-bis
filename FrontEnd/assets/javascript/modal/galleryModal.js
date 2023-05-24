/**
 * Supprime tout le HTML que possède la classe gridModal.
 */

export const deleteElementModal = async () => {
    const figure = document.querySelector('.gridModal');
    figure.innerHTML = '';
    };


/**
 * Crée les images dans la modale.
 * 
 */


const createElementGalleryModal =  (data) => {
    const modal = document.querySelector('.gridModal');
        data.forEach(item =>{      

            const galleryFigure = document.createElement('figure');
            const galleryImg = document.createElement('img');
            const galleryFigureCaption = document.createElement('figcaption');
            const galleryTrashCan = document.createElement('i');
            

            galleryImg.classList.add('imgPreview')
            galleryImg.src = item.imageUrl;
            galleryFigureCaption.innerHTML = 'éditer';
            galleryFigureCaption.classList.add('edit')
            galleryFigure.classList.add('figureTarget')
            galleryTrashCan.classList.add('fa-solid', 'fa-trash-can')
            galleryFigure.dataset.idFigure = item.id;
            
            galleryTrashCan.dataset.idButton = item.id;
            
            modal.appendChild(galleryFigure);
            galleryFigure.appendChild(galleryImg);
            galleryFigure.appendChild(galleryFigureCaption);
            galleryFigure.appendChild(galleryTrashCan);
  

            const firstGalleryFigure = document.querySelector('.figureTarget');
                const trashCanIcon = firstGalleryFigure.querySelector('.fa-arrows-up-down-left-right');
                if (!trashCanIcon) {
                  firstGalleryFigure.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-arrows-up-down-left-right"></i>');
        
              }
        })
    }

/**
 * Récupère les information du backend et transforme le JSON en un objet javascript
 * pour ensuite envoyer cette data dans la fonction "createElementGalleryModal()"
 * pour afficher et manipuler cette data.
 * 
 *
 * @param {string} url - URL du chemin vers les images du backend
 *
 */

export async function galleryModalFetchUrl(url) {
    await fetch(url)
        .then(response => {
            return response.json();
        })

        .then(data => {
            createElementGalleryModal(data)
        });
};


