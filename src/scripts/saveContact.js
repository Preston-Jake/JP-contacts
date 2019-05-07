import "./dbcalls"
import API from "./dbcalls";

function saveContactItem() {
    const objContact = {
        name: "",
        number: "",
        address: "",
    }

    const name = document.querySelector("#input_contactName").value;
    const number = document.querySelector("#input_contactNumber").value;
    const address = document.querySelector("#input_contactAddress").value;

    objContact.name = name;
    objContact.number = number;
    objContact.address = address;

    API.saveContact(objContact)
}

export default saveContactItem

