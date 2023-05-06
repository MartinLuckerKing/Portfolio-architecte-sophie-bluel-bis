function deleteSpecialCharacter(chaine) {
    return chaine.replace(/ |&/g, '');
  }
  
export const categoriesFetch = (data => {
    console.log('Data:', data)
            
    const categories = document.querySelector("#categories ul");
    
    data.forEach(item => {
        const listCategories = document.createElement("li");
        listCategories.textContent = item.name;
        listCategories.dataset.idCategories = item.id;
        listCategories.id = deleteSpecialCharacter(item.name);
        categories.appendChild(listCategories);
    });
});

export const categoriesFetchUrl = (url => {
    fetch(url)
    
        .then(response => {
            console.log('response:', response);
            return response.json();
        })
      
        .then(data => {
            categoriesFetch(data);
            });
        });

