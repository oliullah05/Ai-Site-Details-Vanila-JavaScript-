
// all cards data fetch
const allcardsData= async()=>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const datam =await res.json(res);
    displayAllcardsData(datam.data.tools)

}

// all card data display
const displayAllcardsData= (datam)=>{
    const getCardsDiv = document.getElementById("cards");
    datam.forEach(element => {
        console.log(element)
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML=`
        
        <div class="card h-100">
        <img src="${element.image}" class="card-img-top h-50 img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <ol class="list-group list-group-numbered pb-3">
            <li class="">${element.features[0]?element.features[0]:"no data found"}</li>
            <li class="">${element.features[1]?element.features[1]:"no data found"}</li>
            <li class="">${element.features[2]?element.features[2]:"no data found"}</li>
          </ol>
          <hr>
           

          
          <h2>${element.name}</h2>
<section class="d-flex justify-content-between">
        <div class="d-flex justify-content-start align-item-center gap-2">
        <img src="./Vector.png" alt="" srcset="" class="p-0 m-0 h-50 ">
        <p>${element.published_in}</p>
    </div>


    <div>
    <img src="./deatils-icon.png" alt="" srcset="" class="">
    </div>
</section>  
      </div>
        
        `
        getCardsDiv.appendChild(createDiv)
    });
    
}


