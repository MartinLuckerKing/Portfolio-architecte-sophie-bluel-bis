export const deleteElementModal = () => {
    const figure = document.querySelector('.gridModal');
    figure.innerHTML = '';
    };

const createElementGallery =  (data, id = null) => {
    
    const modal = document.querySelector('.gridModal');
        data.forEach(item =>{
        if ( id === null) {        
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
              }
        })
    }

export async function galleryModalFetchUrl(url) {
    await fetch(url)
        .then(response => {
            console.log('response:', response);
            return response.json();
        })

        .then(data => {
            createElementGallery(data)
        });
};


