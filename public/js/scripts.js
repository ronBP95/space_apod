const togglebutton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

togglebutton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

// ex. query = https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

function getData () {
    fetch("https://api.nasa.gov/planetary/apod?api_key=O9l7R1IoU75M1t8b9FzwE0IvmwMAagiwiB3Ing0H", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(res => {
            console.log(res.json()) 
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
        console.log('works')
    }
}

getData();
// console.log(stuff + "loaded correctly!")