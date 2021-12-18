import pho from '../images/pho.jpg';





function homePage () {
    const home = document.createElement('div');
    home.classList.add('home');
    
    const homeText = document.createElement('div');
    homeText.classList.add('homeText')
    const homeWriteUp = document.createElement('h1');
     homeWriteUp.textContent = "★ Phở Saigon ★";
     const homeParagraph = document.createElement('p');
     homeParagraph.textContent = "Bridgeport's best kept secret since 1994";
    
     

     homeText.appendChild(homeWriteUp);
     homeText.appendChild(homeParagraph);
    
 
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeDiv');

    const homeImage = new Image();
    homeImage.src = pho;
    homeImage.classList.add('phoPic');

    homeDiv.appendChild(homeImage);
    
    
    home.appendChild(homeText);
    home.appendChild(homeDiv);
  

    return home

}

function loadHome() {
    const homeMain = document.getElementById('main');
    homeMain.textContent = "";
    homeMain.appendChild(homePage());

}

export default loadHome

