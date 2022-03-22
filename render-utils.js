export function renderCandies(candy){
    const candyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const genreEl = document.createElement('p');

    candyEl.classList.add('candy');

    nameEl.innerHTML = `<b>Candy Name:</b> ${candy.name}`;
    typeEl.innerHTML = `<b>Type:</b> ${candy.type}`;
    priceEl.innerHTML = `<b>Price:</b> ${candy.price}`;
    genreEl.innerHTML = `<b>Genre:</b> ${candy.genre}`;

    candyEl.append(nameEl, typeEl, priceEl, genreEl);

    return candyEl;

}

export function renderDogs(dog){

    const dogEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const lifeExEl = document.createElement('p');

    dogEl.classList.add('dog');

    nameEl.innerHTML = `<b>Name:</b> ${dog.name}`;
    breedEl.innerHTML = `<b>Breed:</b> ${dog.breed}`;
    priceEl.innerHTML = `<b>Price:</b> ${dog.price}`;
    lifeExEl.innerHTML = `<b>Life Expectancy:</b> ${dog.life_expectancy}`;

    dogEl.append(nameEl, breedEl, priceEl, lifeExEl);

    return dogEl;


}

export function renderPresidents(president){

    const presidentEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const partyEl = document.createElement('p');
    const yearBornEl = document.createElement('p');
    const yearElectedEl = document.createElement('p');

    presidentEl.classList.add('president');

    nameEl.innerHTML = `<b>President Name:</b> ${president.name}`;
    partyEl.innerHTML = `<b>Party:</b> ${president.party}`;
    yearBornEl.innerHTML = `<b>Year Born:</b> ${president.year_born}`;
    yearElectedEl.innerHTML = `<b>Year Elected:</b> ${president.year_elected}`;

    presidentEl.append(nameEl, partyEl, yearBornEl, yearElectedEl);

    return presidentEl;


}

export function renderBasketballPlayers(player){

    const playerEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const yearDraftedEl = document.createElement('p');
    const teamFirstPlayedEl = document.createElement('p');
    const yearRetiredEl = document.createElement('p');

    playerEl.classList.add('player');

    nameEl.innerHTML = `<b>Player Name:</b> ${player.name}`;
    yearDraftedEl.innerHTML = `<b>Year Drafted:</b> ${player.year_drafted}`;
    teamFirstPlayedEl.innerHTML = `<b>Team First Played for:</b> ${player.team_first_played_for}`;
    yearRetiredEl.innerHTML = `<b>Year Retired:</b> ${player.year_retired}`;

    playerEl.append(nameEl, yearDraftedEl, teamFirstPlayedEl, yearRetiredEl);

    return playerEl;


}