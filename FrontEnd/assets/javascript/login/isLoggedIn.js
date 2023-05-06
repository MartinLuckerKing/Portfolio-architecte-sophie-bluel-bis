export const isLoggedIn = () => {
    console.log('test')
        const token = localStorage.getItem('token');
        const login = document.querySelector("#login");
        const logout = document.querySelector("#logout");
        
        if (token) {
            logout.style.display = 'block';
        }
        else {
            login.style.display = 'block';
        }
  }
