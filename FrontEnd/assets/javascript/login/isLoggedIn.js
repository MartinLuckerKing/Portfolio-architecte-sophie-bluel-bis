/**
 * Vérifie la connection  au compte utilisateur
 * et si oui afficher le bouton login ou logout et les boutons modifier.
 *
 */

export const isLoggedIn = () => {
        const token = localStorage.getItem('token');
        const login = document.querySelector("#login");
        const logout = document.querySelector("#logout");
        const btn = document.querySelectorAll('.myBtn');
        const headerIsAdmin = document.querySelector('#headerIsAdmin');
        
        if (token) {
            logout.style.display = 'block';
            
            btn.forEach((button => {
                button.style.display = 'block';
            } ));
            headerIsAdmin.style.display = 'block';

        }
        else {
            
            login.style.display = 'block';
            
            btn.forEach((button => {
                button.style.display = 'none';
            } ));
            headerIsAdmin.style.display = 'none';
        }
  }
