// Get the 'random' btn in top row
const button = document.querySelector('.comicNav').querySelectorAll('a')[2];

const permalink = document.getElementById('middleContainer').querySelectorAll('a')[10];

const comicNumber = permalink.textContent.match(/\d+/)[0];


button.href = 'https://www.explainxkcd.com/wiki/index.php/' + comicNumber;
button.textContent = 'Explain';