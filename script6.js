const addButton = document.getElementById('add-button');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');  
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function createTask(taskContent) {
  if (!taskContent.trim()) {
    console.log('Task content is empty. Task not added.');
    return; 
  }

  const li = document.createElement('li');

  const taskText = document.createElement('span');
  taskText.classList.add('task-content');
  taskText.textContent = taskContent;

  const timestampSpan = document.createElement('span');
  timestampSpan.classList.add('timestamp');
  timestampSpan.textContent = '';  

  li.appendChild(taskText);
  li.appendChild(timestampSpan);

  li.setAttribute('data-completed-time', ''); 

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-btn');
  li.appendChild(completeButton);

  completeButton.addEventListener('click', () => {
    li.classList.toggle('completed');

    if (li.classList.contains('completed')) {
      const timestamp = getCurrentTime();
      li.setAttribute('data-completed-time', timestamp);
    } else {
      li.setAttribute('data-completed-time', '');
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  li.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  console.log('Task added:', taskContent);
}

addButton.addEventListener('click', () => {
  const taskContent = taskInput.value.trim();

  if (taskContent) {
    createTask(taskContent); 
    taskInput.value = ''; 
  } else {
    console.log('Task input is empty. Please enter a task.');
  }
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addButton.click();
  }
});

submitButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('li');
  
  tasks.forEach((task) => {
    const timestampSpan = task.querySelector('.timestamp');
    const completionTime = task.getAttribute('data-completed-time'); 
    
    if (completionTime && completionTime !== '') {
      timestampSpan.textContent = `(Completed: ${completionTime})`;
    } else {
      timestampSpan.textContent = '';
    }
  });
});

restartButton.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    taskList.innerHTML = ''; 
  }
});





