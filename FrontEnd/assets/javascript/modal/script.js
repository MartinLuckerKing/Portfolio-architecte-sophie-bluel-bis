import { galleryModalFetchUrl } from "./galleryModal.js";
import { imageUploader } from "./uploader.js"
import { buttonPostPhoto } from "./uploader.js"
import { lookForInput } from "./uploader.js"
import { displayModal } from "./buttonDisplayModal.js";
import { logout } from "../login/logout.js";
import { dropDownFetchUrl } from "./dropDown.js";
import { deleteDom } from "./deleteWork.js";

const root = ('http://localhost:5678/api/')

export async function init() {
    await galleryModalFetchUrl(root + 'works')
    displayModal()
    await dropDownFetchUrl(root + 'categories')
    lookForInput()
    deleteDom()
    await buttonPostPhoto()
    
}

init()
imageUploader()
logout()