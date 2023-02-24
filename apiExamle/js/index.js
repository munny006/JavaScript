const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => dislayQuote(data))
}
const dislayQuote = quote =>{
const blockQuote = document.getElementById('quote');
blockQuote.innerText = quote.quote;
}

loadQuote();