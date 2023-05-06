import { login } from "../login/login.js";
import { logout } from "../login/logout.js";


document.addEventListener("DOMContentLoaded", function() {
    loadHeaderFooter();
  });
  

  export async function loadHeaderFooter() {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
  
    const headerFetch = await fetch("./../FrontEnd/assets/page/layout/header.html");
    const footerFetch = await fetch("./../FrontEnd/assets/page/layout/footer.html");
  
  
    if (headerFetch.status === 200 && footerFetch.status === 200) {
      const headerContent = await headerFetch.text();
      const footerContent = await footerFetch.text();

      header.innerHTML = headerContent;
      footer.innerHTML = footerContent;

    }
    login()
    logout()
  }