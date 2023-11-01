document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

//identifiy submit button and add event listener to it 
const listTask = document.getElementById('create-task-form')
listTask.addEventListener('submit', makeTask)


function makeTask(e) {
  e.preventDefault();
  const taskText = e.target['new-task-description']['value']; //make task text whatever i type in the field
  const newTask = document.getElementById('tasks'); //selects ul to put task in
  const listItem = document.createElement('li'); //creates new list item
  listItem.textContent = taskText; //makes text content of new list item the task text (line 12)
  newTask.append(listItem); //puts new list item in ul
  e.target.reset(); //resets text input field 
}