const getButton = document.getElementById('get-data-btn');
const listOfEntities = document.getElementById('list');
var count = 0

const getData = () => {
    console.log("GET DATA");

    if (count >=15) {
        alert("You arrived end of the list")
        return
    }
    axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=yxyWf5TGIa2Z8ToTgnLwmlUzrnKvpGp6`)
        .then(result => {
            console.log(result.data.results[0])
            const list = result.data.results
            
            const flexItem = document.createElement("div");
            flexItem.className = "flex-dir"
            for (i = count; i < count + 5; i++) {
                const listItem = document.createElement("div");
                listItem.className = "container"
                
                const pItem = document.createElement("p");
                pItem.className = "title"
                pItem.textContent = list[i].book_details[0].title

                const pItem2 = document.createElement("p");
                pItem2.className = "author"
                pItem2.textContent = "by " + list[i].book_details[0].author

                const pItem3 = document.createElement("p");
                pItem3.className = "description"
                pItem3.textContent = list[i].book_details[0].description

                
                listItem.appendChild(pItem);
                listItem.appendChild(pItem2);
                listItem.appendChild(pItem3);
                flexItem.appendChild(listItem);
                
            }
            
            listOfEntities.appendChild(flexItem);
            count = count + 5
        }).catch(error => {
            console.log('error', error);
        })


}
getData()
getButton.addEventListener('click', getData);


