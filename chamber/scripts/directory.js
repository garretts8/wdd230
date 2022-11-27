// GET json file
const businesses = document.querySelector('.businesses');
fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    // assign variable to JSON array
    const busDirectory = jsonObject['directory'];
    // Call function to display all businesses info for Directory Page
    busDirectory.forEach(displayBusinesses);
  });

  // creat tag and arrange them in order of parentage for Directory Page.

  function displayBusinesses(busDirectory) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let pAddress = document.createElement('p');
    let pPhone = document.createElement('p');
    let image = document.createElement('img');
    let altImg = document.createElement('alt');
    // let pUrl = document.createElement('p');
    let url = document.createElement('a');
    let pQuote = document.createElement('p');

    // h2.textContent = `${busDirectory.businessName}`;
    pAddress.textContent = `${busDirectory.address}`;
    pPhone.textContent = `${busDirectory.phone}`;
    pQuote.textContent = `${busDirectory.quote}`;
    url.textContent = `${busDirectory.businessName}`;
    altImg.innerHTML = `${busDirectory.businessName} logo`;

    url.setAttribute('href', busDirectory.websiteURL);
    image.setAttribute('src', busDirectory.logo);
    image.setAttribute('loading', 'lazy');

    h2.appendChild(url);
    card.appendChild(h2);
    card.appendChild(pAddress);
    card.appendChild(pPhone);
    card.appendChild(image);
    // card.appendChild(pUrl);
    card.appendChild(pQuote);
    image.appendChild(altImg);

    // add classes to tags for CSS

    pAddress.setAttribute('class', 'dirpara');
    pPhone.setAttribute('class', 'dirpara, dirPhone');
    pQuote.setAttribute('class', 'dirpara, dirquote');
    h2.setAttribute('class', 'directoryh2');
    card.setAttribute('class', 'dirSection');
    image.setAttribute('class', 'dirImg');
    url.setAttribute('class', 'dirurl')

    // place tags in HTML
    document.querySelector('div.businesses').appendChild(card);
  }
  

