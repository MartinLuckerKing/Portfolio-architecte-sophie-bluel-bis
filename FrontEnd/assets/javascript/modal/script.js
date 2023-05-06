import { galleryModalFetchUrl } from "./galleryModal.js";
import { imageUploader } from "./uploader.js"
import { postPhoto } from "./uploader.js"
import { buttonDeleteWork } from "./deleteWork.js";
import { displayModal } from "./buttonDisplayModal.js";
import { logout } from "../login/logout.js";
import { dropDownFetchUrl } from "./dropDown.js";

const postPhotoButton = document.querySelector('#uploader')

const root = ('http://localhost:5678/api/')

async function init() {
    await galleryModalFetchUrl(root + 'works')
    buttonDeleteWork()
    displayModal()
    dropDownFetchUrl(root + 'categories')
    postPhotoButton.addEventListener("submit", () => {
        postPhoto();

      });
}

imageUploader()
init()
logout()