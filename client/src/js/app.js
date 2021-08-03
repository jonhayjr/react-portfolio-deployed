//Header Background Image/Text Effect
const headerBackground = document.querySelector('.header-background');
const headerText1 = document.getElementById('header-text-1');
const headerText2 = document.getElementById('header-text-2');

headerBackground.addEventListener('mouseover', () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
        headerBackground.classList.remove('background-image-orange');
        headerBackground.classList.add('background-image-purple');
        headerText1.classList.add('hidden');
        headerText2.classList.remove('hidden');
    }
});

headerBackground.addEventListener('mouseout', () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
        headerBackground.classList.remove('background-image-purple');
        headerBackground.classList.add('background-image-orange');
        headerText2.classList.add('hidden');
        headerText1.classList.remove('hidden');
    }
})


//Invert Skills List Colors on mouse hover
const listItems = document.querySelectorAll('.skills .list-group-item');

function invertColors(element) {
    const listItem = element.target;
    const listText = listItem.innerText.toLowerCase();
    const normalClass = "list-item-" + listText;
    const invertedClass = normalClass + "-inverted";
    const currentClassList = listItem.className;
    listItem.style.transition = "all 0.3s ease-in-out";

    if (currentClassList.indexOf(invertedClass) >= 0) {
        listItem.classList.remove(invertedClass);
        listItem.classList.add(normalClass);
    } else {
        listItem.classList.remove(normalClass);
        listItem.classList.add(invertedClass);
    }
}

listItems.forEach(listItem => {
    listItem.addEventListener('mouseover', (event) => {
        invertColors(event);
    });
});

listItems.forEach(listItem => {
    listItem.addEventListener('mouseout', (event) => {
        invertColors(event);
    });
});

/*Project Skill Filter - Allows projects to be filtered by skills used*/
const skillSelect = document.querySelector('select');

function filterSkills() {
   const selectValue = skillSelect.value;
    const skillsUsed= document.querySelectorAll('.skills-used');
    skillsUsed.forEach(skill => {
        const parent = skill.parentElement.parentElement;
        const skillUsedText = skill.innerText.replace('Skills Used:', '').toLowerCase();
      
    
        if (skillUsedText.indexOf(selectValue) >= 0 || selectValue === 'all') {
            parent.classList.remove('hidden');
        } else {
            parent.classList.add('hidden');
        }
    });
}


skillSelect.addEventListener('change', filterSkills);

/*Card Modal JS*/
let projects = [];
const modalContent= document.querySelector('.modal-content');
const modal = document.querySelector('.modalElement');
const overlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

fetch('json/project.json') 
    .then(res => res.json())
    .then (data => projects = data.projects)
    .catch(err => displayError(err))

function displayError(err) {
    let errorHTML = '<div class="error"><p>Sorry, something went wrong.  Please refresh the page and try again.</p><img src="img/error.png"></div>';
     body.innerHTML = errorHTML;
     console.log(err);
    }

function displayProject(index) {
   
    let project = projects[index];
    // let name = project.name;
    // let number = project.number;
    // let description = project.description;
    // let skills = project.skills;
   
    let {name, number, description, skills} = project;

    let modalHTML = '';
    
    modalHTML += 
    `
    <div class="container p-4" data-index=${index}>
        <img src="img/Project${number}NewResize.png" class="card-img-top img-fluid mt-4" alt="Project ${number}">
        <div class="card-body d-flex flex-column">
            <h5 class="mt-4 card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="skills-used mt-auto card-text"><span class="font-weight-bold">Skills Used:</span> ${skills}</p>
            <a href="https://github.com/jonhayjr/Treehouse-FEWD-Project${number}" class="btn btn-secondary mb-4" target="_blank">View Code</a>
            <a href="https://jonhayjr.com/Treehouse-FEWD-Project${number}/" class="btn btn-dark" target="_blank">Go to Website</a>
        </div>
    </div>
    `;


    overlay.classList.remove('hidden');
    modalContent.innerHTML = modalHTML;

}

cards.forEach(card => {
    card.addEventListener('click', () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
        let index = card.dataset.index;
        displayProject(index);
        }
    })
})


/* Overlay Navigation */
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

previous.addEventListener('click', () => {
    const overlayElement = document.querySelector('.modal-content .container');
    const currentIndex = parseInt(overlayElement.getAttribute('data-index'));
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
        displayProject(previousIndex);
    }
})

next.addEventListener('click', () => {
    const overlayElement = document.querySelector('.modal-content .container');
    const maxIndex = projects.length - 1;
    const currentIndex = parseInt(overlayElement.getAttribute('data-index'));
    const nextIndex = currentIndex + 1;
    if (nextIndex <= maxIndex) {
        displayProject(nextIndex);
    }
})


modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
    });
