let card = document.querySelector(".card");
let ul = document.createElement("ul");
let button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn");
button.innerText = "Generate Quote";
button.addEventListener("click", () => window.location.reload());

fetch("https://animechan.vercel.app/api/random")
  .then((response) => response.json())
  .then((data) => {
    let liAnimeName = document.createElement("li");
    liAnimeName.innerText = `Anime: ${data.anime}`;
    let liAnimeCharacter = document.createElement("li");
    liAnimeCharacter.innerText = `Character: ${data.character}`;
    let liAnimeQuote = document.createElement("li");
    liAnimeQuote.innerText = `Quote: "${data.quote}"`;
    ul.append(liAnimeName, liAnimeCharacter, liAnimeQuote, button);
    card.appendChild(ul);
  });
