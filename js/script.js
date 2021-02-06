fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
  .then(data => {
    processData(data);
  })


function processData(allCountry){
    allCountry.map((country) => {
        addCardCol("allCountryContainer",country.name,country.flag)
    })
}


function addCardCol(containerId,title,imageSource) {
    const container = document.getElementById(containerId);
    const picCol = createElementFunc(container,"div","col");

    const picCard = createElementFunc(picCol,"div","card h-100");

    const picThumb = createElementFunc(picCard,"img","card-img-top");
    picThumb.src = imageSource;

    const cardBody = createElementFunc(picCard,"div","card-body");
    const cardTitle = createElementFunc(cardBody,"h5","card-title align-text-bottom");
    cardTitle.innerText = title;
}

function createElementFunc(parentElement,type,classList,id = ' '){
    const newElement = document.createElement(type);
    newElement.className = classList;
    newElement.id = id;
    parentElement.appendChild(newElement);
    return newElement;
}
