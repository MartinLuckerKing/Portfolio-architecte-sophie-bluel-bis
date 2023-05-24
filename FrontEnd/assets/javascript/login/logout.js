/**
 * Déconnecte l'utilisateur en supprimant le token du localStorage.
 */

export const logout = () => {
    document.querySelector("#logout").addEventListener('click', function() { 
    localStorage.removeItem('token');
    window.location.href = './../../../../FrontEnd/assets/page/login.html';
})
}
  