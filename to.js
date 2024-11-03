let inputt = document.getElementById('inputter');
let butter = document.getElementById('but');
let list = document.getElementById('listItems');

butter.addEventListener("click", addToList);

function addToList() {
    if (inputt.value.trim() == "") {
        return; 
    }

    
    let newItem = document.createElement('li');
    newItem.textContent = inputt.value;

  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        list.removeChild(newItem); 
    };

    
    newItem.appendChild(deleteButton);

    
    list.appendChild(newItem);

    
    inputt.value = '';
}
