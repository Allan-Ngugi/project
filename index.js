function generateQuote(){
fetch('https://animechan.vercel.app/api/random')
.then((response) => response.json())
.then((data) => {
    const quote = data.quote;
    const character = data.character;
    const anime = data.anime;
    document.getElementById(
    "quote"
).innerHTML =`"${quote} - ${character}  (${anime})"`;
});
}
