import { deleteElement } from "../gallery/gallery.js";
import { galleryFetchUrl } from "../gallery/gallery.js";
import { deleteElementModal } from "./galleryModal.js"
import { galleryModalFetchUrl } from "./galleryModal.js";
import { deleteDom } from "./deleteWork.js";


/**
 * Sélectionne une image en local et affiche une preview de celle-ci
 * pour ensuite upload l'image et la convertir en une URL de donnée
 * qui peut être utilisé comme source.
 */

export const imageUploader = () => {
  
document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.querySelector('#fileUpload');
    const preview = document.querySelector('#preview');
    const rulesUpload = document.querySelector('.rulesUpload')
    const customFileUpload = document.querySelector('.customFileUpload')

    fileUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
                rulesUpload.style.display = 'none';
                customFileUpload.style.display = 'none';
            };

            
        } else {
            preview.style.display = 'none';
        }
    });
});
}

/**
 * 
 * si l'input contient une chaine de caractère identique a un "case" alors elle retournera
 * l'id lié à ce nom de catégorie sinon elle retourna toujours -1
 * 
 * @param {string} categoryName - catégorie récupéré dans l'input
 */


export const getCategoryNumber = (categoryName) => {
    switch (categoryName) {
        case 'Objets':
            return 1;
        case 'Appartements':
            return 2;
        case 'Hotels & restaurants':
            return 3;
        default:
            return -1;
    }
}

/**
 * 
 * Regarde tous les 100ms si la longueur des querySelector augmente
 * et si oui la couleur de ces bouton changera.
 * 
 */

export const lookForInput = () => {
  
  const fileUpload = document.querySelector("#fileUpload");
  const title = document.querySelector("#titleUpload");

  const checkInputs = () => {
    const btnValidate = document.querySelector('#postPhotoButton')
    if (title.value.length > 0 && fileUpload.value.length > 0) {
      btnValidate.style.backgroundColor = '#1D6154'
    }
    else {
      btnValidate.style.backgroundColor = '#A7A7A7'
    }
  };
  setInterval(checkInputs, 100);
};

/**
 * 
 * Affiche une erreur en modifiant le DOM si la longueur des input et inférieur
 * ou égale au moment de l'envoie des données.
 * 
 */

const errorCheckingPostPhoto = () => {
  const titleUploadError = document.querySelector("#titleUpload");
  const fileUploadError = document.querySelector("#fileUpload");
  const imgUploaderFailed = document.querySelector('#imgUploader');
  

  if (fileUploadError.value.length <= 0 && titleUploadError.value.length <= 0) {
    imgUploaderFailed.style.visibility = 'visible';
    imgUploaderFailed.style.color = 'red';
    imgUploaderFailed.textContent = 'Erreur fichier et titre manquant';
  }
  

  else if (titleUploadError.value.length <= 0) {
    imgUploaderFailed.style.visibility = 'visible';
    imgUploaderFailed.style.color = 'red';
    imgUploaderFailed.textContent = 'Erreur titre manquant';
    
  }

  else if (fileUploadError.value.length <= 0) {
    imgUploaderFailed.style.visibility = 'visible';
    imgUploaderFailed.style.color = 'red';
    imgUploaderFailed.textContent = 'Erreur fichier manquant';
    
  }
}

/**
 * 
 * Cache les messages d'erreur.
 * 
 */

const resetErrorMessage = () => {
  const errorTitle = document.querySelector("#errorTitle");
  const errorImgMiss = document.querySelector("#errorImgMiss");

  errorTitle.style.display = 'none'
  errorImgMiss.style.display = 'none'

}


/**
 * 
 * Récupère la data des inputs pour l'envoyer vers le backend avec un formData()
 * en vérifiant si le token est disponible et affiche un message
 * si l'image est bien envoyé.
 * 
 */
const postPhoto = async () => {
    const fileUpload = document.querySelector("#fileUpload").files[0];
    const title = document.querySelector("#titleUpload").value;
    const categoriesDrop = document.querySelector("#dropDown").value;
    

    if (!fileUpload) {
      console.error("Aucun fichier sélectionné");
      return;
    }

    if (!title) {
        console.error("Le titre ne peut pas être vide");
        return;
      }

    {
      const formData = new FormData();
      formData.append("image", fileUpload);
      formData.append("title", title);
      formData.append("category", getCategoryNumber(categoriesDrop));
  
      const authToken = localStorage.getItem("token");
      
    const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          'accept': 'application/json',
          
        },
        body: formData,
      })
      if (response.ok) {
        const imgUploaderSuccess = document.querySelector('#imgUploader');
        imgUploaderSuccess.style.visibility = 'visible';
        imgUploaderSuccess.textContent = 'Image uploadé !';
        imgUploaderSuccess.style.color = 'green';
      }
      else {
        const imgUploaderFailed = document.querySelector('#imgUploader');
        imgUploaderFailed.textContent = 'Erreur Image non uploadé';
        imgUploaderFailed.style.visibility = 'visible';
        imgUploaderFailed.style.color = 'red';
      }
    }
  };


/**
 * Remet à 0 la fenêtre d'upload après celui-ci.
 */

const styleChangeOnPostPhoto = () => {

  const fileUpload = document.querySelector("#fileUpload");
  const titleUpload = document.querySelector('#titleUpload')
  const preview = document.querySelector('#preview')
  const rulesUpload = document.querySelector('.rulesUpload')
  const customFileUpload = document.querySelector('.customFileUpload')
  
  titleUpload.value = '';
  fileUpload.value = null;
  preview.removeAttribute('src')
  preview.style.display = 'none'
  rulesUpload.style.display = 'block'
  customFileUpload.style.display = 'block'
}

/**
 * Sur le clique du bouton active toute les fonction ci-dessous:
 * 
 * 
 * @function postPhoto();
 * @function deleteElement();
 * @function galleryFetchUrl();
 * @function deleteElementModal();
 * @function galleryModalFetchUrl();
 * @function resetErrorMessage();
 * @function errorCheckingPostPhoto();
 * @function styleChangeOnPostPhoto();
 * @function deleteDom()
 *     
 *  qui permette de poster une photo et de rafraichir le DOM.
 */

export const buttonPostPhoto = async () => {
  const postPhotoButton = document.querySelector("#postPhotoButton");

  postPhotoButton.addEventListener("click", async (event) => {
    event.preventDefault();

      await postPhoto();
      deleteElement();
      galleryFetchUrl("http://localhost:5678/api/works");
      await deleteElementModal();
      await galleryModalFetchUrl("http://localhost:5678/api/works");
      resetErrorMessage();
      errorCheckingPostPhoto();
      styleChangeOnPostPhoto();
      deleteDom()

  })
}
    
    
          
