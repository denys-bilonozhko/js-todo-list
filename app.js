const tasks = [
  {
    id: 1,
    completed: false,
    title: 'Task 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus.'
  },
  {
    id: 2,
    completed: false,
    title: 'Task 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus.'
  },
  {
    id: 3,
    completed: false,
    title: 'Task 3',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus.'
  },
  {
    id: 4,
    completed: true,
    title: 'Task 4',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus.'
  }
];

(function (tasksArr) {
  const tasksObj = tasksArr.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});
  
  const listContainer = document.querySelector(
    '.tasks-list-section .list-group'
  );

  renderAllTasks(tasksObj);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.log('No tasks');
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });

    listContainer.appendChild(fragment);
  }

  function listItemTemplate({ id, title, text } = {}) {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2'
    );

    const span = document.createElement('span');
    span.textContent = title;
    span.classList.add('fw-bold');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'ms-auto', 'delete-btn');

    const article = document.createElement('p');
    article.textContent = text;
    article.classList.add('mt-200', 'w-100');

    li.append(span);
    li.append(article);
    li.append(deleteButton);

    return li;
  }

})(tasks);
