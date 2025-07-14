// Select key DOM elements
const addProfileBtn = document.getElementById('addProfileBtn');
const addInfoBtn = document.getElementById('addInfoBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearBtn = document.getElementById('clearBtn');
const componentsContainer = document.getElementById('componentsContainer');
const taskTitleInput = document.getElementById('taskTitleInput');
const taskDescInput = document.getElementById('taskDescInput');
console.log('Script loaded. Ready to build components!');

//function to create a reusable profile card
function createProfileCard (name, imageURL) {
    console.log(`Create Profile Card for: ${name}`);

    const card = document.createElement('div');
    card.className = 'profile-card';

    const img = document.createElement('img')
    img.src = imageURL
    img.alt = `${name}'s Profile Picture`

    const h3 = document.createElement('h3');
    h3.textContent = name;

    const p = document.createElement('p');
    p.textContent = 'This is a reusable profile card component'

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);

    console.log('Profile Card Created', card);

    return card;
}

addProfileBtn.addEventListener('click', () => {
    console.log('Add Profile Card Button Clicked')
    const card = createProfileCard('Sponge Bob','/sprint5module3day1/Profile_-_SpongeBob_SquarePants.webp')
    componentsContainer.appendChild(card);
    console.log('Profile Card added to the DOM')
})

function createInfoBox (title, content) {
    console.log(`Create Info Box with Title: "${title}"`)

    const box = document.createElement('div')
    box.className = 'info-box'

    const h4 = document.createElement('h4');
    h4.textContent = title;

    const p = document.createElement('p');
    p.textContent = content;

    box.appendChild(h4)
    box.appendChild(p)

    console.log('Info Box Created: ', box);
    return box
}

function createTaskItem(taskTitle, taskDescription) {
    const task = document.createElement('div')
    task.className = 'task-item'

    const h4 = document.createElement('h4')
    h4.textContent = taskTitle
    
    const p = document.createElement('p')
    p.textContent = taskDescription

    const completeBtn = document.createElement('button')
    completeBtn.className = 'task-complete-btn'
    completeBtn.textContent = 'Mark as Complete'

    //Add some interactive pieces to this function
    completeBtn.addEventListener('click', () => {
        task.style.backgroundColor = 'green'
        completeBtn.disabled = true;
        completeBtn.textContent = 'Completed'

    })

    task.appendChild(h4)
    task.appendChild(p)
    task.appendChild(completeBtn)


    return task
}

addTaskBtn.addEventListener('click', () => {
    const title = taskTitleInput.value.trim();
    const description = taskDescInput.value.trim()

    if (title === '' || description === '') {
        alert('Please fill out both a task title and description.') 
        return;
    }

    const task = createTaskItem(title, description)
    componentsContainer.appendChild(task)

    //Clear inputs
    taskTitleInput.value = ''
    taskDescInput.value = ''
})


addInfoBtn.addEventListener('click', () => {
    console.log('Add Info Box Clicked')
    const box = createInfoBox('Reusable Info Box', 'This content was created by JavaScript')
    componentsContainer.appendChild(box);
    console.log('Profile Card Added to the DOM')
})

clearBtn.addEventListener('click', () => {
    console.log('Clear All Button')
    componentsContainer.innerHTML = ''
})