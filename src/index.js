import './style.css';
import initializeWebsite from './components/website';


document.addEventListener("click", (e) => {
    const target = e.target.textContent;
    if (target === "Menu") {
      setActiveButton(menuButton);
      loadMenu();
    }
  })

initializeWebsite();
