document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  // Función para agregar una nueva tarea
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Por favor, ingresa una tarea.');
      return;
    }

    // Crear el elemento de la lista (li)
    const li = document.createElement('li');
    
    // Texto de la tarea
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Marcar como completada al hacer clic en el texto
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Botón para eliminar la tarea
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // Unir elementos
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
  }

  // Evento al hacer clic en el botón "Agregar"
  addBtn.addEventListener('click', addTask);

  // Permitir agregar la tarea al presionar la tecla "Enter"
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});