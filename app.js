const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

const btnGenerate = document.getElementById('btnGenerate');
const container = document.getElementById('container');

const getCharacter = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const card = document.createElement('div');
        card.setAttribute('class', 'cards');

        const nameCharacter = document.createElement('h2');
        nameCharacter.textContent = data[0].character;
        card.appendChild(nameCharacter);

        const img = document.createElement('img');
        img.setAttribute('src', data[0].image);
        img.setAttribute('alt', data[0].character);
        card.appendChild(img);

        const quoteCharacter = document.createElement('p');
        quoteCharacter.textContent = data[0].quote;
        card.appendChild(quoteCharacter);
        
        container.appendChild(card);

    });
};
btnGenerate.addEventListener('click', getCharacter);