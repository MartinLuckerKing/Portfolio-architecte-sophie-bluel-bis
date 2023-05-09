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
            galleryFigure.dataset.idCategory = item.categoryId;
            galleryFigureCaption.innerHTML = item.title;
            galleryFigure.classList.add('figureTargetGallery')

            gallery.appendChild(galleryFigure);
            galleryFigure.appendChild(galleryImg);
            galleryFigure.appendChild(galleryFigureCaption);
        }
    });
};


const displayGallery = (id, selector) => {
    const figureTargetGallery = document.querySelectorAll('.figureTargetGallery');
    const objets = document.querySelector(selector);
    objets.addEventListener('click', function() {
        for (const figure of figureTargetGallery) {
            if (figure.dataset.idCategory == id || id == 0) {
                figure.style.display = 'block';
            } else {
                console.log(figure.dataset.idCategory)
                figure.style.display = 'none';
            }
        }
    });
};


export async function galleryFetchUrl(url) {
    await fetch(url)
        .then(response => {
            console.log('response:', response);
            return response.json();
        })

        .then(data => {
            createElementInGallery(data)
            displayGallery(0 , '#All')
            displayGallery( 1, '#Objets')
            displayGallery( 2, '#Appartements')
            displayGallery( 3, '#Hotelsrestaurants')
        });
};
