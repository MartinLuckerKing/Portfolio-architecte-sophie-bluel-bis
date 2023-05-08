export const deleteElement = () => {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = '';
    };

const createElementInGallery = (data, id = null) => {
    const gallery = document.querySelector(".gallery");
        data.forEach(item =>{
        if ( id === null || id === 0 || item.categoryId === id) {        
            const galleryFigure = document.createElement("figure");
            const galleryImg = document.createElement("img");
            const galleryFigureCaption = document.createElement("figcaption");

            galleryImg.src = item.imageUrl;
            galleryFigureCaption.innerHTML = item.title;
            galleryFigure.classList.add('figureTargetGallery')

            gallery.appendChild(galleryFigure);
            galleryFigure.appendChild(galleryImg);
            galleryFigure.appendChild(galleryFigureCaption);
        }
    });
};

const createElementOnClick = (data, id, selector) => {
    const objets = document.querySelector(selector);
    objets.addEventListener('click', function() {
        deleteElement(selector);
        createElementInGallery(data, id);
    });
};


export const galleryFetchUrl = (url => {
    fetch(url)
        .then(response => {
            console.log('response:', response);
            return response.json();
        })

        .then(data => {
            createElementInGallery(data)
            createElementOnClick(data, 0, '#All')
            createElementOnClick(data, 1, '#Objets')
            createElementOnClick(data, 2, '#Appartements')
            createElementOnClick(data, 3, '#Hotelsrestaurants')
        });
    });