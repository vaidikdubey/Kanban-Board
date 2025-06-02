const addTaskBtn = document.getElementById('add-task-btn')
const todoBoard = document.getElementById('todo-board')
const taskInput = document.getElementById('taskInput');

function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('dragging');
    })
    target.addEventListener('dragend', () => {
        target.classList.remove('dragging');
    })
}

function editTaskEvent(target) {
    target.addEventListener('dblclick', () => {
        const prevInput = target.textContent;
        const input = prompt(`Update task "${target.textContent}"`);

        if (input === "" || input === null) {
            target.textContent = prevInput;
        }
        else {
            target.textContent = input;
        }
    })
}

function deleteTaskEvent(target) {
    target.addEventListener('click', () => {
        target.parentElement.remove();
    })   
}

addTaskBtn.addEventListener('click', () => {
    const input = taskInput.value;

    if (!input) return

    taskInput.value = '';
    
    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.setAttribute('draggable', true);
    taskCard.textContent = input
    attachDragEvents(taskCard)
    editTaskEvent(taskCard)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = '❌'
    deleteBtn.classList.add('delete-btn')
    taskCard.appendChild(deleteBtn)
    deleteTaskEvent(deleteBtn)

    todoBoard.appendChild(taskCard);
})

const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => {
    attachDragEvents(item)
    editTaskEvent(item)
})

const deleteButton = document.querySelectorAll('.delete-btn')

deleteButton.forEach(deleteTaskEvent)

allBoards.forEach(board => {
    board.addEventListener('dragover', () => {
        const draggedElement = document.querySelector('.dragging')

        board.appendChild(draggedElement);
    })
})
