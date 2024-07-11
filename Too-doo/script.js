// Variável global para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Cria um objeto de tarefa
    const task = {
      id: Date.now(), // ID único baseado no timestamp atual
      text: taskText,
      completed: false
    };

    // Adiciona a tarefa ao array
    tasks.push(task);

    // Atualiza a lista de tarefas no HTML
    renderTasks();

    // Limpa o input
    taskInput.value = "";
  }
}

// Função para marcar todas as tarefas como concluídas
function marcarConcluidas() {
  tasks.forEach(task => {
    task.completed = true;
  });

  renderTasks();
}

// Função para renderizar a lista de tarefas no HTML
function renderTasks() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // Limpa a lista atual

  tasks.forEach(task => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
      task.completed = this.checked;
      renderTasks(); // Atualiza a lista ao marcar/desmarcar a checkbox
    });

    const taskLabel = document.createElement("span");
    taskLabel.textContent = task.text;
    taskLabel.style.textDecoration = task.completed ? "line-through" : "none";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function() {
      tasks = tasks.filter(t => t.id !== task.id); // Remove a tarefa do array
      renderTasks(); // Atualiza a lista após a exclusão
    };

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);

    todoList.appendChild(taskItem);
  });
}

// Inicializa a lista de tarefas vazia ao carregar a página
renderTasks();
