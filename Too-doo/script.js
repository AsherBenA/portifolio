class TodoApp {
  constructor() {
    this.tasks = [];
    this.todoList = document.getElementById("todo-list");
    this.newTaskInput = document.getElementById("new-task");
    this.addTaskButton = document.getElementById("add-task");
    this.markCompletedButton = document.getElementById("mark-completed");

    this.addTaskButton.addEventListener("click", this.addTask.bind(this));
    this.markCompletedButton.addEventListener("click", this.markAllCompleted.bind(this));

    this.renderTasks();
  }

  addTask() {
    const taskText = this.newTaskInput.value.trim();
    if (taskText !== "") {
      const task = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
      this.tasks.push(task);
      this.renderTasks();
      this.newTaskInput.value = "";
    }
  }

  markAllCompleted() {
    this.tasks.forEach(task => task.completed = true);
    this.renderTasks();
  }

  renderTasks() {
    this.todoList.innerHTML = "";
    this.tasks.forEach(task => {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
      taskItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <span>${task.text}</span>
        <button class="btn-delete-task">Excluir</button>
      `;
      taskItem.querySelector("input").addEventListener("change", () => {
        task.completed = !task.completed;
        this.renderTasks();
      });
      taskItem.querySelector(".btn-delete-task").addEventListener("click", () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.renderTasks();
      });
      this.todoList.appendChild(taskItem);
    });
  }
}

const app = new TodoApp();
