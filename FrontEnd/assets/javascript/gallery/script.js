import { categoriesFetchUrl } from "/FrontEnd/assets/javascript/gallery/categories.js";
import { galleryFetchUrl } from "/FrontEnd/assets/javascript/gallery/gallery.js";
import { isLoggedIn } from "./../login/isLoggedIn.js";

const root = ('http://localhost:5678/api/')

console.log(localStorage);

categoriesFetchUrl(root + 'categories')
galleryFetchUrl(root + 'works')
isLoggedIn()


