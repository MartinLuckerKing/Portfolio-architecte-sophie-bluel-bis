const deleteElement = () => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    };

const createElementGallery =  (data, id = null) => {
    const modal = document.querySelector('.gridModal');
        data.forEach(item =>{
        if ( id === null) {        
            const galleryFigure = document.createElement('figure');
            const galleryImg = document.createElement('img');
            const galleryFigureCaption = document.createElement('figcaption');
            const deleteWork = document.createElement('a');
            
            galleryImg.classList.add('imgPreview')
            galleryImg.src = item.imageUrl;
            galleryFigureCaption.innerHTML = 'éditer';
            galleryFigureCaption.classList.add('edit')
            galleryFigureCaption.dataset.idEdit = item.id;
            galleryFigureCaption.dataset.nameEdit = item.title;
            galleryFigureCaption.dataset.categoriesEdit = item.categoryId;
            galleryFigureCaption.dataset.imgEdit = item.imageUrl;
            deleteWork.textContent = 'supprimer';
            deleteWork.dataset.idButton = item.id;
            deleteWork.classList.add('deleteWork')
            
            modal.appendChild(galleryFigure);
            galleryFigure.appendChild(galleryImg);
            galleryFigure.appendChild(galleryFigureCaption);
            galleryFigure.appendChild(deleteWork);
        }
    });
};

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


