function menuPage () {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.textContent = "Menu";
    const appetizers = document.createElement('span');
    appetizers.classList.add('menuType');
    appetizers.textContent = 'Appetizers'
    const noodles = document.createElement('span');
    noodles.classList.add('menuType');
    noodles.textContent = "Noodle Soups";
    const fried = document.createElement('span');
    fried.textContent = 'Fried Dishes'
    fried.classList.add('menuType');

    menu.appendChild(appetizers);
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(noodles);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);
    menu.appendChild(item7);
    menu.appendChild(fried);
    menu.appendChild(item8);
    menu.appendChild(item9);
    menu.appendChild(item10);

    return menu
}


function loadMenu() {
    const homeMain = document.getElementById('main');
    homeMain.textContent = "";
    homeMain.appendChild(menuPage());

}


class menuItem {
    constructor(item, description, price){
        const fullItemDiv = document.createElement('div');
        fullItemDiv.classList.add('fullItem');
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('itemDiv');
        const itemName = document.createElement('div');
        itemName.classList.add('itemName');
        itemName.textContent = item;
        const itemPrice = document.createElement('span');
        itemPrice.classList.add('itemInfo');
        itemPrice.textContent = "$" + price;
        const itemDescription = document.createElement('p');
        itemDescription.classList.add('itemInfo');
        itemDescription.textContent = description;
        

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice)
        fullItemDiv.appendChild(itemDiv);
        fullItemDiv.appendChild(itemDescription);
        
        

        return fullItemDiv;
    }

}



const item1 = new menuItem('Chả Giò', 'crispy fried spring rolls', '7');
const item2 = new menuItem('Bánh Xèo', 'fried pancake with pork and shrimp', '7');
const item3 = new menuItem('Bánh Cuốn Chá Lua', "rice crepes with pork", '8' )
const item4 = new menuItem('Phở Saigon', 'combination beef noodle soup', '8');
const item5 = new menuItem('Phở Gá', 'shredded chicken in beef noodle soup', '8');
const item6 = new menuItem('Hủ Tiếu Nam Vang', 'shrimp and pork with clear noodle soup', '7');
const item7 = new menuItem('Phở Bở Tái', 'rare beef noodle soup', '9');
const item8 = new menuItem('Mi Xao Don Gá', 'sauteed chicken w. crispy fried noodles', '10');
const item9 = new menuItem('Bún Bò Xào', 'sauteed beef on vermicelli noodles', '8');
const item10 = new menuItem('Hủ Tiếu Thàp Cam', 'special combination w. fried flat noodles', '10');

export default loadMenu

