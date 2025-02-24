// where to do 
const placesList = document.getElementById('places-list');


// what will be added 
const li = document.createElement('li');
li.innerText = 'phartoli';


// add the child 
placesList.appendChild(li);

// where to add 
const mainContainer = document.getElementById('main-container');


// what to be added 
const section =document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
mainContainer.appendChild(section)