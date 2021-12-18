import flag from '../images/vietnam.jpeg';
import loadHome from "./home";
import loadContact from './contact';
import loadMenu from './menu';




function createHeader() {

const header = document.createElement('header');
header.classList.add('header');

const restaurantName = document.createElement('h1');
restaurantName.classList.add('restaurantName');
restaurantName.textContent = 'Phở Saigon';

const divFlag = document.createElement('div');
divFlag.classList.add('flag');
const flagg = new Image();
flagg.src = flag

divFlag.append(flagg);

header.appendChild(restaurantName);
header.appendChild(divFlag);
header.appendChild(createNav());

return header 

}

function createNav(){
    const nav = document.createElement('nav')

    const homeButton = document.createElement('button');
    homeButton.classList.add('navLink');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', (e) => {
      console.log(e.target.textContent);
      if (e.target.classList.contains("active")) return;
      
      setActiveButton(homeButton);
      loadHome();
    });
      
  

    const menuButton = document.createElement('button');
    menuButton.classList.add('navLink');
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        if (e.target.classList.contains("active")) return;
        
        setActiveButton(menuButton);
        loadMenu();
    });

    


    const contactButton = document.createElement('button');
    contactButton.classList.add('navLink')
    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', (e) => {
        console.log(e.target.textContent)
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
     });
    


    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
  }


function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerText = document.createElement('div');
    footerText.textContent = "Created by Setback King ♕ 2021";

    footer.appendChild(footerText);

    return footer;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".navLink");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function initializeWebsite() {
    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".navLink"));
    loadHome();
    
    

    return content
    
    

   

}


export default initializeWebsite