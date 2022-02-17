const togglebutton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

togglebutton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

// ex. query = https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(res => {
            return res.json()
    })
    .then (function (data) {
        appendData(data)
    })
    .catch(error => console.log("ERROR"))

    function appendData(data) {
        var apodContainer = document.getElementById("#rightCont")
        for (let i = 0; i < data.length; i++) {
            // append each person to our page
            let div = document.createElement("div");
            div.innerHTML = 'Date: ' + data[i].date;
            apodContainer.appendChild(div + "Hello Content!");
            console.log(data.date)
        }
    }




