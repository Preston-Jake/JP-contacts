import "./dbCalls";
import API from "./dbCalls";
import "./saveContact"
import saveContactItem from "./saveContact";
import "./search"
API.getContactList();

document.getElementById("btn_saveContact").addEventListener("click", event => {
    console.log(event);
    event.preventDefault();
    saveContactItem()
})


//filter over the data hide the data that isn't included in the search
document.querySelector("#input_contactSearch").addEventListener("keyup", event => {
    const userSearch = document.querySelector("#input_contactSearch").value;
    // document.querySelector("#container_contactList").innerHTML = ""
    API.getContact(userSearch)
})

