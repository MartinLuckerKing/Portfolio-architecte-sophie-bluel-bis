const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const xmark = document.querySelector(".fa-xmark");
const xmarkuploadPicture = document.querySelector("#uploadPicture");
const modalPicture = document.querySelector('#addPicture')
export const modalContent =  document.querySelector('.modalContent')
export const modalContent2 =  document.querySelector('.modalContent2')
const modalArrow = document.querySelector('#arrowLeftModal')
const preview = document.querySelector('#preview');
const rulesUpload = document.querySelector('.rulesUpload')
const customFileUpload = document.querySelector('.customFileUpload')



const previewComp = () => {
    rulesUpload.style.display = 'block';
    customFileUpload.style.display = 'block';
    preview.style.display = 'none';
    preview.removeAttribute('src');
}


export let displayModal = () => {
    btn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.style.display = 'block';
    previewComp()
    });


    xmarkuploadPicture.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContent2.style.display = 'none';

    });

    xmark.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContent.style.display = 'none';
        modalContent2.style.display = 'none';
        previewComp()
    });

    window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalContent.style.display = 'none';
        modalContent2.style.display = 'none';
        previewComp()
    }
    });

    modalPicture.addEventListener('click', function() {
        modalContent.style.display = 'none';
        modalContent2.style.display = 'block';
        
    })

    modalArrow.addEventListener('click', function() {
        modalContent2.style.display = 'none';
        modalContent.style.display = 'block';
        previewComp()
    
});


}