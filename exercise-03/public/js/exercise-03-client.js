window.addEventListener("load", function () {

    fetchPerson();

    // This function asynchronously fetches our person from our /gimmeJSON endpoint.
    async function fetchPerson() {
        const response = await fetch("./gimmeJSON");
        const json = await response.json();
        displayPerson(json);
    }

    // This function displays the given person in our HTML.
    function displayPerson(person) {
        document.querySelector("#person-name").innerHTML = person.name;
        document.querySelector("#person-address").innerHTML = person.address;
        document.querySelector("#person-phone_number").innerHTML = person.phone_number;
    }

    document.querySelector("#generate-random").addEventListener("click", async function() {
        
        fetchRandomNumber();
        
        async function fetchRandomNumber() {
            const response = await fetch("./randomNumber");
            const json = await response.json();
            document.querySelector("#random-number").innerHTML = json.number;
        }
    })
});
