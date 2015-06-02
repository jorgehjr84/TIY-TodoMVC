(function(window) { //IIFE: Immediately Invoked Function Expression
  'use strict';


  //I can add a task to my list...
  // Questions
  //1. What event should I be listening for?keydn,keyup,keypress
  //2. What element makes sense to listen for that event? input.new-todo
  //3. What do I need to do when that event fires?
  //Given an HTML element  <input class = "new-todo">
  var newTodoInput = document.querySelector('input.new-todo')
	var todoCountElement = document.querySelector('span.todo-count')
  //When the user types a task
  newTodoInput.addEventListener('keyup', function addTodoController(event) {
    if (event.keyCode !== 13 || newTodoInput.value == "") return; // didn't press the "Enter" key!


    var task = newTodoInput.value;//could use newTodoInput.reset()

    todos.addTaskToList(task, todos.taskList);

    newTodoInput.value = "";

    // Footer Counter
     // FIXME Refactor into function...

			todos.footerCounter(todoCountElement);

		  // var todoCountText = todos.taskList.length + ' Item';
      // if (todos.taskList.length === 1) {
      //   // todoCountText = todoCountText + ' Left';
      //   todoCountText += ' Left';
      // } else {
      //   // todoCountText = todoCountText + 's Left';
      //   todoCountText += 's Left';
      // };
     // END BLOCK

    todoCountElement.text = todoCountElement;

    // TODO Add a <li> representation of `task`...
    document.querySelector('ul.todo-list').innerHTML += (
			"<li><div><input class='toggle' type='checkbox'><label>" + task + "</label><button class='destroy'</input class='toggle' type='checkbox'></div></li>")


  }); // END addTodoController



//I can delete Task From My list
  //1. What event should I be listening for?'mouseOver', 'click'
  //2. What element makes sense to listen for that event? class destroy?
  //3. What do I need to do when that event fires?
  //Task needs to be removed from list
  //Task needs to be removed from array
  //Footer needs to update with new task list count


  // var deleteInput = document.querySelector('.destroy');
  //
  //   deleteInput.addEventListener('click', function() {
  //     return console.log('Deleted');
  //
  //   });
  //
    var list = document.querySelector('ul.todo-list');
    var deleteTaskButton = document.querySelectorAll('button.destroy');

  _.forEach(list, function(element){
    element.addEventListener('click', function(event){
      if (event.target.tagName === "BUTTON" && event.target.className === "destroy");
      console.log('delete works', event.target );
    })
  });


  // var deleteTask = document.querySelector('ul.todo-list')
  // deleteTask.addEventListener('mouseover', function() {
  //
  //   console.log("Hello");
  // });


  // var deleteButtons = document.querySelectorAll('button.destroy');
  //
  // _.forEach(deleteButtons, function(element, index, deleteButtons) {
  //   element.addEventListener('click', function() {
  //     console.log("This works for all of the buttons!!");

    //});




    // CONTROLLER FOR: I can DELETE a task from my list...
    // 1. What event should I be listening for? Click on the 'X'
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires? Item needs to be removed from
    // Delete Task from Where it is saved
    // Needs to delete the field/li that the todo-list lives on
    // Updating Footer Number(should be auto), but if 0 should remove footer all together.






  //
  //
  //
  // });
  //
  // var editTask = document.querySelectorAll('li');
  //
  // _.forEach(editTask, function(element, index, editTask) {
  //   element.addEventListener('dblclick', function() {
  //     console.log("Sup");
  //
  //   });
  //
  // });
  //








  //todos.addTaskToList = document.querySelector('ul.todo-list > li').textContent = todos.taskList;



  // THEN:
  // TODO Save the thing to remember (task) to the list of things to remember (taskList)
  // TODO Remove the thing to remember (task) from the "What needs to be done?" box (input.new-todo)
  // TODO Update the number of tasks in the footer...
  // TODO Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)

  // CONTROLLER FOR: I can delete a task from my list...
  // 1. What event should I be listening for?    MouseOver,Click
  // 2. What element makes sense to listen for that event?
  // 3. What do I need to do when that event fires?

  // CONTROLLER FOR: I can edit a task on my list...
  // 1. What event should I be listening for?
  // 2. What element makes sense to listen for that event?
  // 3. What do I need to do when that event fires?


  // CONTROLLER FOR: I can complete a task on my list...
  // 1. What event should I be listening for?
  // 2. What element makes sense to listen for that event?
  // 3. What do I need to do when that event fires?

  // CONTROLLER FOR: I can view the list...
  // 1. What event should I be listening for?
  // 2. What element makes sense to listen for that event?
  // 3. What do I need to do when that event fires?




})(window);









/*
document.head.parentElement.className = "js";

var addTodo = document.querySelector('header');



addTodo.addEventListener('click', function(){
	console.log("Sup");
	addTodo.parentElement.class.view;

})


}




document.head.parentElement.className = "js";

var elements =document.querySelectorAll('.cbp-nttrigger');


//
_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
});
});
*/
