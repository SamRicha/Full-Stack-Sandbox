interface Task {
    id: number;
    name: string;
  }
  
  class TodoApp {
    private tasks: Task[] = [];
    private taskId: number = 0;
  
    constructor() {
      this.bindEvents();
    }
  
    bindEvents() {
      const addButton = document.getElementById('add-task')!;
      addButton.addEventListener('click', () => this.addTask());
  
      const inputField = document.getElementById('new-task') as HTMLInputElement;
      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.addTask();
      });
    }
  
    addTask() {
      const inputField = document.getElementById('new-task') as HTMLInputElement;
      const taskName = inputField.value.trim();
  
      if (taskName) {
        this.tasks.push({ id: this.taskId++, name: taskName });
        inputField.value = '';
        this.render();
      }
    }
  
    removeTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.render();
    }
  
    render() {
      const taskList = document.getElementById('task-list')!;
      taskList.innerHTML = '';
      
      this.tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.name;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', () => this.removeTask(task.id));
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
      });
    }
  }
  
  new TodoApp();
  