fetch("https://dev.io-academy.uk/resources/bond.php")
.then((response) => {
return response.json()
}).then((data) => {
console.log(data)
})

fetch("https://dev.io-academy.uk/resources/bond.php")
    .then((response) => {
        return response.json()
    }).then((data) => {
        data.data.forEach((film) => {
            document.querySelector(".output").innerHTML += `
            <div>
            <ul>
                <li>${film.name} ${film.release_date}</li>
            </ul>
            </div>
            `
})
})