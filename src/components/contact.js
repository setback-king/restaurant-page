function contactPage() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactHeader = document.createElement('h2');
    contactHeader.classList.add('contactHeader');
    contactHeader.textContent = "Contact Information";
    
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contactDiv');
    
    const address = document.createElement('div');
    address.classList.add('info');
    address.textContent = "Location:";
    const fullAddress = document.createElement('span');
    fullAddress.textContent = "80 Wood Ave";
    fullAddress.classList.add('fullInfo');
    const fullState = document.createElement('span');
    fullState.classList.add('fullInfo');
    fullState.textContent = "Bridgeport, CT 06605";

    const hours = document.createElement('div');
    hours.classList.add('info');
    hours.textContent = "Hours:"
    const weekday = document.createElement('span');
    weekday.classList.add('fullInfo')
    const weekend = document.createElement('span');
    weekend.classList.add('fullInfo');
    weekday.textContent = "M-F: 12:00pm - 8:00pm";
    weekend.textContent = "SS: 2:00pm - 9:00pm";

    const call = document.createElement('div');
    call.classList.add('info');
    call.textContent = "Reach us at:"
    const number = document.createElement('span');
    number.classList.add('fullInfo')
    number.textContent = "(203) 239 XXXX";
    const email = document.createElement('span');
    email.classList.add('fullInfo')
    email.textContent = "phosaigon@gmail.com"


    call.appendChild(number);
    call.appendChild(email);

    hours.appendChild(weekday);
    hours.appendChild(weekend);
   
    address.appendChild(fullAddress);
    address.appendChild(fullState);
    contactDiv.appendChild(address);
    contactDiv.appendChild(hours);
    contactDiv.appendChild(call);


    contact.appendChild(contactHeader);
    contact.appendChild(contactDiv);
    


    


    return contact;
}


function loadContact() {
    const homeMain = document.getElementById('main');
    homeMain.textContent = "";
    homeMain.appendChild(contactPage());

}

export default loadContact