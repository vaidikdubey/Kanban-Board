const addTaskBtn = document.getElementById('add-task-btn')
const todoBoard = document.getElementById('todo-board')

function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('dragging');
    })
    target.addEventListener('dragend', () => {
        target.classList.remove('dragging');
    })
}

addTaskBtn.addEventListener('click', () => {
    const input = prompt("Enter your task");

    if (!input) return
    
    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.setAttribute('draggable', true);
    taskCard.textContent = input
    attachDragEvents(taskCard)

    todoBoard.appendChild(taskCard);
})

const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach(attachDragEvents) //If signature matches we can directly pass the function name instead of using arrow functions and callback

allBoards.forEach(board => {
    board.addEventListener('dragover', () => {
        const draggedElement = document.querySelector('.dragging')

        board.appendChild(draggedElement);
    })
})
