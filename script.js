const newToDoInput = document.querySelector('#newToDoInput');
const newToDoButton = document.querySelector('#newToDoButton');
const list = document.querySelector('#list');

newToDoButton.addEventListener('click', function() {
	if (newToDoInput.value.length == 0) {
		alert('Please enter new to do.');
	} else {
		toDoList();
	}
});

newToDoInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13 && newToDoInput.value.length === 0) {
		alert('Please enter new to do.');
	} else if (event.keyCode === 13) {
		toDoList();
	}
})

function toDoList() {
  const toDoItem = document.createElement('li');
  list.appendChild(toDoItem);
  toDoItem.classList = 'toDoItem list-group-item';
  toDoItem.innerText = newToDoInput.value;
  const deleteButton = document.createElement('i');
  deleteButton.classList = 'far fa-trash-alt';
  toDoItem.appendChild(deleteButton);
  newToDoInput.value = '';
  deleteButton.addEventListener('click', function() {
    toDoItem.remove();
  })
  toDoItem.addEventListener('dblclick', function() {
    toDoItem.style.textDecoration = 'line-through';
    if (toDoItem.style.textDecoration == 'line-through') {
      toDoItem.addEventListener('click', function () {
        toDoItem.style.textDecoration = 'none';
      })
    }
  }) 
}

/* How do I create a scrollable list if the ul hits a certain length?
if (document.querySelectorAll('li') === 3) {
  alert("working!");
}
*/
