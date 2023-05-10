export const isLoggedIn = () => {
    console.log('test')
        const token = localStorage.getItem('token');
        const login = document.querySelector("#login");
        const logout = document.querySelector("#logout");
        const btn = document.querySelectorAll('.myBtn')
        
        if (token) {
            logout.style.display = 'block';
            btn.forEach((button => {
                button.style.display = 'block'
            } ))
            

        }
        else {
            login.style.display = 'block';
            btn.forEach((button => {
                button.style.display = 'none'
            } ))
        }
  }
