// //You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
//   console.log(allEpisodes);
// }


// // All episodes
// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   //  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
//   const parentDiv=document.createElement('div');

//   const parentUl=document.createElement('ul');
//   rootElem.appendChild(parentUl);
//   rootElem.appendChild(parentDiv);
//   episodeList.forEach((episode) => {
//   const episodeLi = document.createElement('li');
//   parentUl.appendChild(episodeLi);
//   const episodeh = document.createElement('h3');
//   episodeh.innerText = episode.name+''+'-S'+episode.season.toString().padStart(2,0)+'E'+episode.number.toString().padStart(2,0);
//   episodeLi.appendChild(episodeh);

// const image = document.createElement('img');

// function myFunction() {
//   var y = document.getElementById("myImg").src;
//   document.getElementById("demo").innerHTML = y;
// }
// // document.getElementById("placehere").appendChild(image);
// image.src = `${episode.image.medium}`
// parentUl.appendChild(image);

// let episodep = document.createElement('p');
// episodep.textContent = `${episode.summary}`.replace(/(<([^>]+)>)/gi,"");
// parentUl.appendChild(episodep);


//   }
// )}
// SEARCH BOX
// function onSearch() {
//   let x = document.getElementById("myInput");
//   document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
// }
// -------------------------------------------------------------------------------
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
//---------------------------------------------------------------
const containerAll = document.querySelector(".contanair");
const liveSerch = document.querySelector("#live_search");
const buttonN = document.querySelector("#search_name");
const bEpisode = document.querySelector("#episode-button");
const h3 = document.querySelector(".h3");
const form = document.querySelector("#form-select");
const reset = document.querySelector("#reset");
const url = "https://api.tvmaze.com/shows/82/episodes";

//--------------------------------------------------------------------

window.addEventListener("load", function () {
  async function fetchEpisodes() {
    let response = await fetch(url);
    let deta = await response.json();
    /** ForEch ------------------------------------------------------      */
    let AllEpisode = deta;
    AllEpisode.forEach(item => {
      intro(item);
    });
  }
  fetchEpisodes();
});

//----------------------------------------------------------
buttonN.addEventListener("click", function (e) {
  e.preventDefault();
  async function fetchEpisodee() {
    let response = await fetch(url);
    let data = await response.json();
    /** ForEch       */
    let AllEpisode = data;
    let search = liveSerch.value;
    let searchResult = AllEpisode.filter(item => {
      let textName = item.name.toLowerCase();
      let textSummary = item.summary.toLowerCase();
      let allText = textName + textSummary;
      
      return allText.includes(search.toLowerCase());
    });
    console.log(searchResult);
    makePageForEpisodes(searchResult);
    searchResult.forEach(item => {
      h3.textContent = `Displaying ${searchResult.length}/${AllEpisode.length} episodes`;
      console.log('item',item);
      //clear();
      intro(item);
    });
  }
  
  fetchEpisodee();
});


async function fetchEpisode() {
  let response = await fetch(url);
  let details = await response.json();
  /*-------- ForEch --------------------------------- */
  let AllEpisode = details;
  AllEpisode.forEach(item => {
    let options = document.createElement("option");
    options.setAttribute("value", `${item.url}`);
    options.textContent = `S0${item.season}E0${item.number}- ${item.name}`;
    form.appendChild(options);
  });
}
fetchEpisode();

reset.addEventListener("click", function () {
  location.reload();
});

function intro(item) {
  let html = `<section class="episode_all">
  <div class="overall_ditail">
    <div class="episode_name text">${item.name}-S0${item.season}E0${item.number}</div>
    <div class="img">
      <img
        src="${item.image.medium}"
        alt=""
        width="150px"
        height="150px"
      />
    </div>
    <div class="text">
      ${item.summary}
    </div>
  </div>
</section>`;
  containerAll.insertAdjacentHTML("beforebegin", html);
  containerAll.getElementsByClassName.opacity = 1;
}

// function onSearch() {
// const form=document.getElementById("form");
// const searchInput = document.getElementById("search").value.toLowerCase();
//  let episodeList= getAllEpisodes();
//  console.log(episodeList);
//  searchInput.addEventListener('input', () => {
// if(searchInput){
// //   const searchInput = document.querySelector('input[type="search"]');

// //   searchInput.addEventListener('change', () => {
// //    console.log(`The term searched for was ${searchInput.value}`);

// // // onsearch version
// // const input = document.querySelector('input[type="search"]');

// //   input.onsearch = () => {
// //  console.log(`The term searched for was ${input.value}`);
// // };
// searchInput.addEventListener("search",(e)=>{
//   let value= e.target.value;
//   console.log(`This is value =  ${searchInput.value}`);
//   if((episodeList.name).includes(value)||(episodeList.summary).includes(value)||episodeList.length>0){
//     let html="";
//     for(let episode of episodeList){
//       html += `<div>
//       <H3>${episode.name}</H3>
//       <img src=${episode.image.medium}>
//       <p>${episode.summary}</p>
//       </div>`
//     }
//     rootElem.innerHTML=html;
//   }else{
//     rootElem.innerHTML="";

//   }

// });
// }
// }

// h.appendChild(praghragh.innerHTML );
// document.body.appendChild(h);
//summary.textContent = `${episode.summary}`.replace(/(<([>]+)/gi,""); 
//  img.setAttribute("src",episode.image.medium);
//  praghragh.innerHTML = episode.summery;
  
// let bodyDiv = document.createElement('div');
// let image = document.createElement('img')
// image.setAttribute("src",episodeList.image.medium);
// bodyDiv.appendChild(image);
// bodyDiv.idList.add("bottom");
//   });
document.getElementById("root").style.color = "black";



window.onload = setup;
// window.onload = () => {
//   const divEl1= document.getElementById("root");
//   const sectionEl1= document.getElementById("main-page");
//   const episodes = getAllEpisodes();
//   divEl1.appendChild(sectionEl1);
// }


// jadid..........................................................................
// function setup() {
//   const episodes = getAllEpisodes();
//   makePageForEpisodes(episodes);
// }


// function makePageForEpisodes(episodeList) {
//   const container = document.getElementById("episodes");

//   episodeList.forEach((episode) => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       const h1 = document.createElement("h1");
//       h1.textContent = `${episode.name} - ${makeEpisodeCode(episode)}`;

//       const img = document.createElement("img");
//       img.setAttribute("src", episode.image.medium);

//       const p = document.createElement("p");
//       p.textContent = episode.summary;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(img);
//       card.appendChild(p);
//   });
// }


// function makeEpisodeCode(episode) {
//   return `S${pad(episode.season)}E${pad(episode.number)}`;
// }


// function pad(num) {
//   return num.toString().padStart(2, "0");
// }


// window.onload = setup;