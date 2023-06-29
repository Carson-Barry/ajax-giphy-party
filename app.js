console.log("Let's get this party started!");

async function getResultsByTerm(searchTerm) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(res.data.data)
    return res.data.data;
}

async function getResultURL(searchTerm) {
    const searchResults = await getResultsByTerm(searchTerm);
    return searchResults[Math.floor(Math.random()*50)].images.original.url;
}

async function clickHandler() {
    const searchTerm = document.getElementById("search_term").value;
    document.getElementById("search_term").value = "";
    const imgURL = await getResultURL(searchTerm);
    addImg(imgURL);
}

function addImg(URL) {
    const newImg = document.createElement("img");
    newImg.src = URL;
    document.getElementById("imgs").append(newImg);
}

document.getElementById("search").addEventListener("click", async function(e) {
    e.preventDefault()
    await clickHandler()
})

document.getElementById("destroy").addEventListener("click", function(e) {
    e.preventDefault()
    imageDiv = document.getElementById("imgs")
    while (imageDiv.firstChild) {
        imageDiv.removeChild(imageDiv.firstChild);
    }
})
