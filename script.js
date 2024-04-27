// Task 1
function filterPlacesByType(typePreference) {

  const filteredPlaces = [];
  for(var x=0; x<PLACES.length; x++){
    if(PLACES[x].type === typePreference){
      filteredPlaces.push(PLACES[x]);
    }
  }
  return filteredPlaces;
}

// Task 2 
function createCard(place) {
  var x = document.createElement('div');

  x.classList.add("col");

  x.innerHTML = `
      <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
        <img src="${place.img}" class="card-img-top h-100" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">${place.location}</p>
        </div>
      </div>
  `;

  return x;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {

  var rec = document.getElementById("recommendations");

  rec.innerHTML = "";

  for(var y = 0; y<filteredPlaces.length; y++){
    var card = createCard(filteredPlaces[y]);
    rec.appendChild(card);
  }
}

// Task 4
function findPlaceByName(placeName) {

  for(var n =0; n<PLACES.length; n++){
    if(PLACES[n].name == placeName){
      return PLACES[n];
    }
  }
}
