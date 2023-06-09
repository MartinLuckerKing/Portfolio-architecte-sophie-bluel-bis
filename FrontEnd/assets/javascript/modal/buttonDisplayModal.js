const modal = document.querySelector("#myModal");
const btn = document.querySelectorAll(".myBtn");
const xmark = document.querySelector(".fa-xmark");
const xmarkuploadPicture = document.querySelector("#uploadPicture");
const modalPicture = document.querySelector('#addPicture')
export const modalContent =  document.querySelector('.modalContent')
export const modalContent2 =  document.querySelector('.modalContent2')
const modalArrow = document.querySelector('#arrowLeftModal')
const preview = document.querySelector('#preview');
const rulesUpload = document.querySelector('.rulesUpload')
const customFileUpload = document.querySelector('.customFileUpload')
const titleUpload = document.querySelector('#titleUpload')
const imgUploaderSuccess = document.querySelector('#imgUploader');
const errorTitle = document.querySelector("#errorTitle");
const errorImgMiss = document.querySelector("#errorImgMiss");

/**
 * Redémarre l'interface pour upload une image.
 */

const previewComp = () => {
    rulesUpload.style.display = 'block';
    customFileUpload.style.display = 'block';
    preview.style.display = 'none';
    imgUploaderSuccess.style.visibility = 'hidden';
    preview.removeAttribute('src');
    errorTitle.style.display = 'none'
    errorImgMiss.style.display = 'none'
}

/**
 * Cache la premiere fenêtre modale
 */


const modalContentNone = () => {
    modal.style.display = 'none';
    modalContent2.style.display = 'none';
}


/**
 * Cache la seconde fenêtre modale
 */

const modalContentBlock = () => {
    modal.style.display = 'block';
    modalContent.style.display = 'block';
}

/**
 * Permet le fonctionnement des trois bouton modifier sur le site web
 */

export let displayModal = () => {
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            modalContentBlock()
            previewComp()
        }
    )});
}

    xmarkuploadPicture.addEventListener('click', () => {
        modalContentNone()
        previewComp();

    });

    xmark.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContentNone()
        previewComp()
    });

    window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalContentNone()
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
        titleUpload.value = '';
        previewComp()
    });



