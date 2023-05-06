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

export const postPhoto = () => {
    
    const fileUpload = document.querySelector("#fileUpload").files[0];
    const title = document.querySelector("#titleUpload").value;
    const categoriesDrop = document.querySelector("#dropDown").value;
  
    if (!fileUpload) {
      console.error("Aucun fichier sélectionné");
      const errorImgMiss = document.querySelector('#errorImgMiss');
      errorImgMiss.textContent = "L'image ne peut pas être vide";
      return;
    }

    if (!title) {
        console.error("Le titre ne peut pas être vide");
        const errorElement = document.querySelector('#errorTitle');
        errorElement.textContent = "Le titre ne peut pas être vide";
        return;
      }


    try {
        
      const formData = new FormData();
      formData.append("image", fileUpload);
      formData.append("title", title);
      formData.append("category", getCategoryNumber(categoriesDrop));
  
      const authToken = localStorage.getItem("token");
      
      fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) =>  console.log(data) )
        .catch((error) => {
          console.error("Erreur lors de l'envoi des données:", error.message);
        });
    } catch (error) {
      console.error("Erreur lors de la préparation des données:", error.message);
    }
    

  };

    
    
    
          
