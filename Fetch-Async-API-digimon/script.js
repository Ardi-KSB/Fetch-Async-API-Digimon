const url = "https://digimon-api.vercel.app/api/digimon"

const getData = async() => {
    const response = await fetch(url); //Paket simpan dalam "response"
    let json = await response.json() //Unboxing simpan di json
    console.log(json) //[{}, {}] (Untuk mengetahui isi Paket)

    json = json.filter((item, index) => {
        if (index < 20) return item
    })


    const digimonList = document.querySelector(".list-digimon") // mengambil element class list-digimon

    //console.log(digimonlist);
    json.forEach((item) => {
        console.log(item);
        digimonList.innerHTML += `
        <div class = "col">
        <div class="card border border-primary">
            <img src=${item.img} class="card-img-top" alt="...">
            <div class = "card-body">
                 <h5 class="card-title">${item.name} </h5>
                 <p class = "card-text">${item.level}</p>
            </div>
           </div>
           </div>
       
    `
    })
}
getData()