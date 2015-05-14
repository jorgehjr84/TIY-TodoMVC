(function (window) {//IIFE: Immediately Invoked Function Expression
	'use strict';
//I can add a task to my list...
// Questions
//1. What event should I be listening for?keydn,keyup,keypress
//2. What element makes sense to listen for that event? input.new-todo
//3. What do I need to do when that event fires?

//Given an HTML element  <input class = "new-todo">
	var newTodoInput = document.querySelector('input.new-todo')

		//When the user types a task
		newTodoInput.addEventListener('keyup', function addTodoController(event){
			if ( event.keyCode === 13 ){ //AND presses the "Enter" key

				var task = document.querySelector('input.new-todo').value;
				//todos.taskList.push(task);
				console.log(task);


			}



			// THEN:
			// TODO Save the thing to remember (task) to the list of things to remember (taskList)
			// TODO Remove the thing to remember (task) from the "What needs to be done?" box (input.new-todo)
			// TODO Update the number of tasks in the footer...
			// TODO Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)

	});

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



_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
});
});
*/
