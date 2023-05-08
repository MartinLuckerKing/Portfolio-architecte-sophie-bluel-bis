import { deleteElement } from "../gallery/gallery.js";
import { galleryFetchUrl } from "../gallery/gallery.js";
import { deleteElementModal } from "./galleryModal.js"
import { galleryModalFetchUrl } from "./galleryModal.js";

export const imageUploader = () => {
  
document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('fileUpload');
    const preview = document.getElementById('preview');
    const rulesUpload = document.querySelector('.rulesUpload')
    const customFileUpload = document.querySelector('.customFileUpload')

    fileUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
                rulesUpload.style.display = 'none';
                customFileUpload.style.display = 'none';
            };

            reader.readAsDataURL(file);
        } else {
            preview.style.display = 'block';
        }
    });
});
}

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



export const lookForInput = () => {
  
  const fileUpload = document.querySelector("#fileUpload");
  const title = document.querySelector("#titleUpload");

  const checkInputs = () => {
    let btnValidate = document.querySelector('#postPhotoButton')
    if (title.value.length > 0 && fileUpload.value.length > 0) {
      btnValidate.style.backgroundColor = '#1D6154'
    }
    else {
      btnValidate.style.backgroundColor = '#A7A7A7'
  
    }

  };

  setInterval(checkInputs, 100);
};


const errorCheckingPostPhoto = () => {
  const titleUploadError = document.querySelector("#titleUpload");
  const fileUploadError = document.querySelector("#fileUpload");
  const errorTitle = document.querySelector("#errorTitle");
  const errorImgMiss = document.querySelector("#errorImgMiss");

  if (titleUploadError.value.length <= 0) {
    errorTitle.style.display = 'block'
  }

  if (fileUploadError.value.length <= 0) {
    errorImgMiss.style.display = 'block'
  }

}

const resetErrorMessage = () => {
  const errorTitle = document.querySelector("#errorTitle");
  const errorImgMiss = document.querySelector("#errorImgMiss");
  const imgUploaderSuccess = document.querySelector("#imgUploader");

  errorTitle.style.display = 'none'
  errorImgMiss.style.display = 'none'
  imgUploaderSuccess.style.visibility = 'hidden'
}


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
        console.log(formData)
      }
    }
  };

const styleChangeOnPostPhoto = () => {
  const fileUpload = document.querySelector("#fileUpload");
  const titleUpload = document.querySelector('#titleUpload')
  const preview = document.querySelector('#preview')
  
  const rulesUpload = document.querySelector('.rulesUpload')
  const customFileUpload = document.querySelector('.customFileUpload')
  
  titleUpload.value = '';
  console.log(fileUpload)
  fileUpload.value = null;
  console.log(fileUpload)
  preview.removeAttribute('src')
  preview.style.display = 'none'
  rulesUpload.style.display = 'block'
  customFileUpload.style.display = 'block'
}

export const buttonPostPhoto = async () => {
  const postPhotoButton = document.querySelector("#postPhotoButton");

  postPhotoButton.addEventListener("click", async (event) => {
    event.preventDefault();

      await postPhoto();
      resetErrorMessage();
      errorCheckingPostPhoto();
      styleChangeOnPostPhoto();
      deleteElement();
      deleteElementModal();
      galleryModalFetchUrl("http://localhost:5678/api/works");
      galleryFetchUrl("http://localhost:5678/api/works");
      

  })
}
    
    
          
