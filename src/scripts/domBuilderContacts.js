// this function take the contact info from the fetch request and prints it to the dom


function domBuilderContacts(contact) {

    const frag = document.createDocumentFragment();
    const contactItem = document.createElement("div")
    contactItem.setAttribute("class", "contact")


    const contactName = document.createElement("h2")
    contactName.textContent = contact.name

    const contactNumber = document.createElement("p")
    contactNumber.textContent = contact.number;

    const contactAddress = document.createElement("p");
    contactAddress.textContent = contact.address;

    contactItem.appendChild(contactName);
    contactItem.appendChild(contactNumber);
    contactItem.appendChild(contactAddress);

    frag.appendChild(contactItem);

    document.getElementById("container_contactList").appendChild(frag);
}

export default domBuilderContacts