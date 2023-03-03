
// all cards data fetch
const allcardsData= async(max)=>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const datum =await res.json(res);
    displayAllcardsData(datum.data.tools,max)

}

// all card data display
const displayAllcardsData= (datum,max)=>{
 
 
    const getCardsDiv = document.getElementById("cards");
    getCardsDiv.innerHTML ="";
    if(max===6){
datum = datum;

    }
   else if(datum.length>6){
      datum = datum.slice(0,6)
      document.getElementById("show-all-button").classList.remove('d-none')
    }
    // console.log(datum)

    datum.forEach(element => {
        // console.log(element.id)
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
    // console.log(url)
    const res = await fetch(url);
    const datum =await res.json(res);
    displaysingleDetailsdata(datum.data)
}

// deatils icon single data display
const displaysingleDetailsdata=(data)=>{
  const modalSection = document.getElementById('modal-body');
modalSection.innerHTML+=`
<div class="modal-header">
<h5 class="modal-title" id="detailsModalLabel">${data.tool_name}</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

<div id="modal-body" class="modal-body row row-cols-1 row-cols-md-2 g-4">

<div class="col-6">
<h6 id="modal-intro" ></h6>

<div class="d-flex  align-items-center gap-2 fw-semibold text-center p-2">
<div class="bg-light rounded-2 text-success p-4"><span>$10/<br>month<br>Basic</span></div>
<div  class="bg-light rounded-2 text-warning p-4"><span>$10/<br>month<br>Basic</span></div>
<div class="bg-light rounded-2 text-danger p-4"><span>$10/<br>month<br>Basic</span></div>
</div>


<div class="d-flex gap-2">
<div>
<h4>Features</h4>
<ul>
<li id="features1" ></li>
<li id="features2" >Multilingual support</li>
<li id="features3" >Seamless integration</li>
</ul>
</div>

<div>
<h4>Integrations</h4>
<ul>
<li>FB Messenger</li>
<li>Slack</li>
<li>Telegram</li>
</ul>
</div>
</div>



</div>
<div class="col-6">
<img src="" alt="" srcset="">
<p id="accuracy" class="p-2 text-white bg-danger w-50 border border-3">94% accuracy</p>
<h3>Hi, how are you doing today?</h3>
<p>I'm doing well, thank you for asking. How can I assist you today?</p>
</div>

</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>

`




// const modalTitle = document.getElementById('detailsModalLabel') ;
// modalTitle.innerText= `${data.tool_name}`;
// const modalIntro = document.getElementById('modal-intro');
// modalIntro.innerText=`${data.description}`;
// const features1 = document.getElementById('features1');
// features1.innerText=`${data.features.feature_name}`



  
// console.log(data.tool_name)
}

function showAll(max){
document.getElementById("show-all-button").classList.add('d-none');
const showAllbutton = document.getElementById('show-all-button');
allcardsData(max)
}