const body = document.querySelector("body");
const contentPokemons = document.createElement("div");
const iconBack = document.getElementById("iconBack");
const mainTitle = document.createElement("h1");
const emptyText = document.createElement("a");
let pokemonStack = JSON.parse(localStorage.getItem("Pokemons")) || [];

body.appendChild(mainTitle);
body.appendChild(contentPokemons);
body.style =
  "display:flex; flex-direction:column;align-items:center;min-width:320px;background-color:#07010c;font-family:Roboto, Geneva, Tahoma, sans-serif";
iconBack.style = "display:block;position:absolute;top:15px;left:7%;";
emptyText.style = "display:none";
mainTitle.style = "font-weight:800px;font-size:1.9rem;color:white;text-align:center";
mainTitle.innerText = "Pokemons - Comprados";
emptyText.setAttribute("href", "./index.html");
const emptyCar = () => {


  if (pokemonStack.length < 1) {
    body.appendChild(emptyText);
    emptyText.innerHTML = `<p>Carro de compras vacio, <span style="text-decoration:underline">volver a tienda!</span></p>`;
    emptyText.style =
      "display:flex;font-size:1.5rem; font-weight:900;text-align:center;color:white;cursor:pointer;text-decoration:none";
    return;
  }
  emptyText.style = "display:none";
  return;
};
pokemonStack.forEach((pokemon) => {
  const divCard = document.createElement("div");
  const titlePokemon = document.createElement("h5");
  const imagen = document.createElement("img");
  const btn = document.createElement("button");
  titlePokemon.innerText = pokemon.name;
  imagen.src = pokemon.img;
  btn.id = pokemon.id;
  contentPokemons.appendChild(divCard);
  divCard.appendChild(titlePokemon);
  divCard.appendChild(imagen);
  divCard.appendChild(btn);
  contentPokemons.style =
    "display:flex;flex-wrap: wrap;justify-content:center;height:auto;width:90%;flex-wrap: wrap;gap:1%";
  divCard.style = `width:180px;height:240px; display:flex; flex-direction:column; align-items:center; border-radius:2px;background-image: url('./styles/pokebola.png'); background-position:center;background-size:cover`;
  titlePokemon.style =
    "width:fit-content;height:1%;margin-top:21%;margin-left:7%;color:black;text-transform:capitalize;font-size:14px;letter-spacing:1px;font-weight: 800";
  imagen.style = "margin-left:7%;margin-top:8%";
  btn.style =
    "width:fit-content;margin-top:3%;margin-left:8%;font-size:12px;font-weight:700;padding:2px;border-radius:4px; cursor:pointer";
  btn.innerText = "Eliminar";

  btn.addEventListener("click", (e) => {
    const idEvent = e.target.id;
    let result = pokemonStack.filter((i) => i.id !== idEvent); //i.id != idEvent elementos diferentes a id Event
    localStorage.setItem("Pokemons", JSON.stringify(result));
    pokemonStack = JSON.parse(localStorage.getItem("Pokemons"));
    e.target.parentElement.remove();
    emptyCar();
  });
});
emptyCar();
