// const userSearch = document.getElementById("input")
// need the function to search an array that includes a value and return that objects value
import domBuilderContacts from "./domBuilderContacts"

function searchContactList(contact, search) {
    if (Object.values(contact).includes(`${search}`)) {

        return domBuilderContacts(contact)
    }

}

export default searchContactList