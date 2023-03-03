
// all cards data fetch
const allcardsData= async()=>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const datum =await res.json(res);
    displayAllcardsData(datum.data.tools)

}

// all card data display
const displayAllcardsData= (datum)=>{
    const getCardsDiv = document.getElementById("cards");
    datum.forEach(element => {
        console.log(element.id)
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
    <button type="" class="" data-bs-toggle="modal" data-bs-target="#detailsModal">
    <img onclick="singleDetailsdata('${element.id}')"  src="./deatils-icon.png" alt="" srcset="" class="">
  </button>
    
    </div>
</section>  
      </div>
        
        `
        getCardsDiv.appendChild(createDiv)
    });
    
}

// deatils icon single data fetch
const singleDetailsdata =async(id)=>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url);
    const datum =await res.json(res);
    displaysingleDetailsdata(datum.data)
}

// deatils icon single data display
const displaysingleDetailsdata=(data)=>{
console.log(data)
}
