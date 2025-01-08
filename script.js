fetch("https://random-data-api.com/api/v2/users?size=10")
.then(function(reponse) {
    return reponse.json();
}).then(function(lien) {
    const contact = document.querySelector("#contact");
    for(const contacts of lien) {
        const person = document.createElement("article")
        const h2 = document.createElement("h2");
        h2.textContent = contacts.first_name + " " + contacts.last_name;
        const p = document.createElement("p");
        p.textContent = contacts.phone_number;
        person.appendChild(h2);
        person.appendChild(p);
        contact.appendChild(person);
    }
});