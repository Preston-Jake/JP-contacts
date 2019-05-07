import "./domBuilderContacts"
import domBuilderContacts from "./domBuilderContacts";
import "./search"
import searchContactList from "./search"
const db = "http://localhost:8088/contacts"

const API = {
    saveContact: (contact) => {
        return fetch(db, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact)
        })
    },
    getContactList: function () {
        return fetch(db)
            .then(result => result.json())
            .then(contacts => {
                contacts.map(domBuilderContacts)
            })
    },
    getContact: function (search) {
        return fetch(db)
            .then(result => result.json())
            .then(contacts => {
                // console.log(contacts)
                contacts.map(c => {
                    // console.log(c)
                    searchContactList(c, search)
                })
            })
    }
}

export default API