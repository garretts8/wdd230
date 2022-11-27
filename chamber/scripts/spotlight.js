const nested = document.querySelector('.nested');

fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.log(jsonObject);
    // assign variable to JSON array
    const spotlightDirectory = jsonObject['directory'];
    // Filter for Gold and Silver memberships from spotlightDirectory
    let result = spotlightDirectory.filter(obj=> obj.membershipLevel == "Gold" || obj.membershipLevel == "Silver");
    // Get 3 random memberships from result
    randSpotLight = getmultRandom(result, 3);
    // Call function to display all businesses info for Directory Page
    randSpotLight.forEach(displayspotlights);
  });

  function getmultRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
 // create tag and arrange them in order of parentage for index page (spotlight section)
 function displayspotlights(spotlightDirectory) {
  let randSpotLight = [];
  let spotlightDiv = document.createElement('div');
  let h3 = document.createElement('h3');
  let imgs = document.createElement('img');
  let altIMG = document.createElement('alt');
  let paraQuote = document.createElement('p');
  let paraAddress = document.createElement('p');
  let paraPhone = document.createElement('p');
  let spotA = document.createElement('a');

  h3.textContent = `${spotlightDirectory.businessName}`;
  spotA.setAttribute('href', spotlightDirectory.websiteURL);
  imgs.setAttribute('src', spotlightDirectory.logo);
  imgs.setAttribute('alt', altIMG);
  imgs.setAttribute('loading', 'lazy');
  imgs.setAttribute('class', 'spotlightImg');
  altIMG.innerHTML = `${spotlightDirectory.businessName} logo`;
  paraQuote.textContent = `${spotlightDirectory.quote}`;
  paraQuote.setAttribute('class', 'spotlightquote');
  paraAddress.textContent = `${spotlightDirectory.address}`;
  paraPhone.textContent = `${spotlightDirectory.phone}`;

  h3.appendChild(spotA);
  spotlightDiv.appendChild(h3);
  spotlightDiv.appendChild(imgs);
  spotlightDiv.appendChild(paraQuote);
  spotlightDiv.appendChild(paraAddress);
  spotlightDiv.appendChild(paraPhone);

  document.querySelector('div.nested').appendChild(spotlightDiv);

}