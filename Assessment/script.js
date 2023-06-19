 // Get references to HTML elements
 const todoInput = document.getElementById('todoInput');
 const addButton = document.getElementById('addButton');
 const todoList = document.getElementById('todoList');

 // Function to add a new todo item
 function addTodo() {
   // Get the value from the input field
   const newTodo = todoInput.value;

   // Create a new list item element
   const newTodoItem = document.createElement('li');
   newTodoItem.textContent = newTodo;

   // Append the new item to the todo list
   todoList.appendChild(newTodoItem);

   // Clear the input field
   todoInput.value = '';
 }

 // Add event listener to the button
 addButton.addEventListener('click', addTodo);