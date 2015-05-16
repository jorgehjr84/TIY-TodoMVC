(function(window) {
  var taskList = [];

  // I can list my tasks...
  function listTasks(list) {
    // TODO: make this do something...
  }

  //I can add a task to my list...
  function addTaskToList(task, list) {
    //What is the task?
    //Where is the task going?
    //What order / priority?
    return list.push(task);
  }

  //I can check a task off my list...
  function completeTask(task, list) {
    return list[task - 1] += ' COMPLETE';
  }

  //I can delete a task off my list...
  function deleteTask(task, list) {
    return list.splice(task - 1, 1);
  }

  function footerCounter(element){
    if (taskList.length === 1){
      element.textContent = taskList.length + ' Item Left';
      }
    else{
      element.textContent = taskList.length + ' Items Left';
    }

  }

  window.todos = {
    "taskList": taskList,
    "addTaskToList": addTaskToList,
    "completeTask": completeTask,
    "deleteTask": deleteTask,
    "footerCounter": footerCounter
  };

})(window);
