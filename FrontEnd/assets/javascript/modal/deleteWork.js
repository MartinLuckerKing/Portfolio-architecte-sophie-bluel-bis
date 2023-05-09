const deleteWork = (id) => {
  
  const authToken = localStorage.getItem('token');
  
  fetch(`http://localhost:5678/api/works/${id}`, {
    
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Accept': '*/*',
    },  
    
  });
}

export const deleteDom = () => {
  const gallery = document.querySelector('.gallery');
  const gridModal = document.querySelector('.gridModal');

  const trashCanIcon = document.querySelectorAll('.fa-trash-can');
  const figureTargets = document.querySelectorAll('.figureTarget');
  const figureTargetGallery = document.querySelectorAll('.figureTargetGallery');

  trashCanIcon.forEach((fig, index) => {
    fig.addEventListener('click', function () {
      if (figureTargets[index] && figureTargetGallery[index]) {
        gridModal.removeChild(figureTargets[index]);
        gallery.removeChild(figureTargetGallery[index]);

        
        deleteWork(fig.dataset.idButton);
      }
    });
  });
};




