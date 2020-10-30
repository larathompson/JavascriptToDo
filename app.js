//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//event listeneres

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

//functions

function addTodo(event) {
  event.preventDefault()
  // make the to do div
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')
  //create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  //check button
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild(completedButton)
  //delete button
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn')
  todoDiv.appendChild(trashButton)

  //append to list
  todoList.appendChild(todoDiv)

  //clear the input value
  todoInput.value = ""
}

function deleteCheck(e) {
  const item = e.target
  //delte to do 
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement
    todo.classList.add('fall')
    //this will only execute when transition is completed
    todo.addEventListener('transitionend', function () {
      todo.remove()

    })
    // todo.remove()
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }

}

// function filterTodo(e) {
//   console.log('hello')
//   const todos = todoList.childNodes
//   // todos.forEach((todo) => {


//   //   //check for undefined values and skips then and only apply the switch statement on nodes with properties 
//   //   if (todo.classList !== undefined) {
//   //     switch (e.target.value) {
//   //       case "all":
//   //         todo.style.display = "flex"
//   //         break
//   //       case "completed":
//   //         if (todo.classList.contains("completed")) {
//   //           todo.style.display = "flex"
//   //         } else {
//   //           todo.style.display = "none"
//   //         }
//   //         break
//   //       default:
//   //         break
//   //     }
//   //   }
//   //   return
//   // })

//   console.log('this is to do' + todos)
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case 'all':
//         todo.style.display = 'flex'
//         break
//       case 'completed':
//         if (todo.classList.contains('completed')) {
//           todo.style.display = 'flex'
//         } else {
//           todo.style.display = 'none'
//         }
//         break
//       case 'uncompleted':
//         if (!todo.classList.contains('completed')) {
//           todo.style.display = 'flex'

//         } else {
//           todo.style.display = 'none'
//         }
//         break
//     }
//   })


// }


function filterTodo(e) {
  const todos = document.querySelectorAll('.todo');  // i finr childrens with selector alll
  todos.forEach((todo) => {
    switch(e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if(!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  })
}