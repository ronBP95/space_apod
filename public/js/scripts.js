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
    .then ( res => {
        appendData(data);
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))