const populateModal = (index) => {
  document.querySelector('body').classList.add('end-scroll');
  document.querySelector('.project-modal-background').style.display = 'block';

  const projects = [
    {
      projectName: 'Book-An-Appointment',
      role: 'Front End Dev',
      year: '2023',
      image: {
        URL: './assets/images/boooookkk.png',
        alt: 'Book-An-Appointment project snapshot',
      },
      description:
        'Book-an-Appointment is an application for cars. Create an account, and find and book your dream car today.',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://book-an-appointment-frontend.onrender.com/',
      githubLink: 'https://github.com/mbdesigns1989/Book-An-Appointment-Frontend',
    },
    {
      projectName: 'Metrics Web App',
      role: 'Front End Dev',
      year: '2023',
      image: {
        URL: './assets/images/metrics-wepapp.jpg',
        alt: 'Metrics Web App project snapshot',
      },
      description:
        'This React Redux project involves working with data from a diseases API. The app allows users to view COVID-19 cases in European countries.',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://65ffca1d159c7fa0e2cec388--stately-basbousa-d7484e.netlify.app/',
      githubLink: 'https://github.com/mbdesigns1989/React-capstone-webapp/tree/dev',
    },
    {
      projectName: 'Space Travel Hub',
      role: 'Front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/Space Travellers Hub.png',
        alt: 'Space-Travel-Hub project snapshot',
      },
      description:
        'This is a web application for a company that provides commercial and scientific space travel services. Using real live data from the SpaceX API, the application allows users to book rockets and join selected space missions.',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://phelian23.github.io/react-redux-group-project/',
      githubLink: 'https://github.com/mbdesigns1989/react-redux-group-project',
    },
    {
      projectName: 'JS-Capstone-Project',
      role: 'front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/Chicken Breast Meals.png',
        alt: 'JS-Capstone-project snapshot',
      },
      description:
        'An API based web app that displays Meals from the MealsDB API and the Involvement API from Microverse. The features of this webapp include an option to like a meal by clicking on the like button A comment button that opens up a modal and allows users to leave comments.',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://effulgent-dodol-e273cf.netlify.app/',
      githubLink: 'https://github.com/mbdesigns1989/JS-Capstone-Project-',
    },
    {
      projectName: 'To-do-List',
      role: 'Front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/To Do List.png',
        alt: 'To-do-List project snapshot',
      },
      description:
        'ToDo list is an app that helps you organize your daily tasks. It simply lists the things that you need to do and allows you to add them and mark them as complete.. ',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://rawcdn.githack.com/mbdesigns1989/To-do-List/9e8da4b2e5a7b285766b4515aa3047c1f753e190/dist/index.html',
      githubLink: 'https://github.com/mbdesigns1989/To-do-List',
    },
    {
      projectName: 'Awesome Books',
      role: 'Front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/Awesome Books.png',
        alt: 'Awesome Books project snapshot',
      },
      description:
        'Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://mbdesigns1989.github.io/awesome-books/',
      githubLink: 'https://github.com/mbdesigns1989/awesome-books',
    },
    {
      projectName: 'Conference Capstone Project',
      role: 'Front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/My conference capstone project.png',
        alt: 'Conference Capstone project snapshot',
      },
      description:
        'The project is based on an online website for a conference.',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://mbdesigns1989.github.io/my-capstone-project/',
      githubLink: 'https://github.com/mbdesigns1989/my-capstone-project',
    },
    {
      projectName: 'My Portfolio website',
      role: 'Front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/Mohamed Badr Portfolio.png',
        alt: 'My Portfolio project snapshot',
      },
      description:
        'This is a Portfolio setup and mobile version project by Microverse to test the use of Flexbox for Positioning and also images and Background,',
      technologies: ['html', 'css', 'javascipt'],
      liveLink: 'https://mbdesigns1989.github.io/my-portfolio-website/',
      githubLink: 'https://github.com/mbdesigns1989/my-portfolio-website',
    },
  ];

  const modalName = document.querySelector('.modal-project-name');
  const modalCanopy = document.querySelector('.project-modal-main .canopy');
  const modalRole = document.querySelector('.project-modal-main .role');
  const modalYear = document.querySelector('.project-modal-main .year');
  const modalImage = document.querySelector('.modal-image');
  const modalDescription = document.querySelector('.modal-project-description');
  const modalTechs = document.querySelector('.modal-techs');
  const modalLiveButtonAnchor = document.querySelector('.live-link a');
  const modalGithubButtonAnchor = document.querySelector('.github-link a');
  const activeProject = projects[index];

  modalName.textContent = activeProject.projectName;
  modalCanopy.textContent = activeProject.canopy;
  modalRole.textContent = activeProject.role;
  modalYear.textContent = activeProject.year;
  modalImage.setAttribute('src', activeProject.image.URL);
  modalImage.setAttribute('alt', activeProject.image.alt);
  modalDescription.textContent = activeProject.description;
  modalTechs.innerHTML = '';

  activeProject.technologies.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    modalTechs.appendChild(li);
    return true;
  });

  modalLiveButtonAnchor.setAttribute('href', activeProject.liveLink);
  modalGithubButtonAnchor.setAttribute('href', activeProject.githubLink);
};

const closeModal = () => {
  document.querySelector('body').classList.remove('end-scroll');
  document.querySelector('.project-modal-background').style.display = 'none';
};

document.querySelector('.project-modal-main').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelector('.close').addEventListener('click', closeModal);
document
  .querySelector('.project-modal-background')
  .addEventListener('click', closeModal);

const allProjectButtons = Array.from(document.querySelectorAll('.pr-btn'));

allProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => populateModal(index));
  return true;
});
