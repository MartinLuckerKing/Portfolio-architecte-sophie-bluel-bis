const deleteWork = (event, id) => {
  
  const authToken = localStorage.getItem('token');
  
  fetch(`http://localhost:5678/api/works/${id}`, {
    
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Accept': '*/*',
    },  
    
  });
  event.preventDefault()
}

export const buttonDeleteWork = () => {
  
  const deleteButtonArray = document.querySelectorAll('.deleteWork');
  for (const element of deleteButtonArray) {
    element.addEventListener('click', (event) => {
      
      deleteWork(event, element.dataset.idButton);
      event.preventDefault()
      
    })
    
  }
};



