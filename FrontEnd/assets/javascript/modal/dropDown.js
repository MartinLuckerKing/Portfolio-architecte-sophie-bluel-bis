const dropDown = (data => {
    const dropDown = document.querySelector('#dropDown');



    data.forEach(item => {
        
        const listDropDown = document.createElement('option')
        listDropDown.textContent = item.name;
        dropDown.appendChild(listDropDown)

    });

});


export const dropDownFetchUrl = (url => {
    fetch(url)
    
        .then(response => {
            console.log('response:', response);
            return response.json();
        })
      
        .then(data => {
            dropDown(data);
            });
        });



