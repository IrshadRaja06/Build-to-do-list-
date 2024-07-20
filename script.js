function addTask() {
    var task = document.getElementById("newTask").value;
    if (task) {
      var list = document.getElementById("taskList");
      var item = document.createElement("li");

      var taskInput = document.createElement("input");
      taskInput.type ="text";
      taskInput.placeholder= task;
      taskInput.val = task;

      var delButton = document.createElement("button");
      delButton.textContent = "DELETE";
      delButton.addEventListener("click", function() {
        list.removeChild(item);
      });
      item.appendChild(taskInput);
      item.appendChild(delButton);
      list.appendChild(item);
      document.getElementById("newTask").value = "";
    }
  }