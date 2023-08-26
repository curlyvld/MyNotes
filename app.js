const inputElement = document.getElementById('inp')
const createButton = document.getElementById('btn')
const listElement = document.getElementById('list')

const notes = []

createButton.addEventListener('click', () =>{
  const noteText = inputElement.value
  notes.push({
    title: noteText,
    completed: false
  })
  inputElement.value=''
  render()
})


function render(){
  listElement.innerHTML = ''
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNote(notes[i], i))
  }
}

listElement.addEventListener('click', (event)=>{

  const type = event.target.dataset.type
  const index = Number(event.target.dataset.index)

  if (type == 'compl'){
    notes[index].completed = !notes[index].completed
    render()
  }
  
  if(type == 'del'){
    notes.splice(index,1)
    render()
  }
  
})

function getNote(note,index){
  return `
    <li class="tasks__item ${note.completed ? 'btnn':''}">
              <p class="${note.completed ? 'line':''}">${note.title}</p>
              <div class="task__item__buttons ">
                <button class="task__button__good" data-index=${index} data-type="compl">
                  ✔️
                </button>
                <button class="task__button__bad" data-index=${index} data-type="del">
                  ✘
                </button>
              </div>
            </li>
            `
}