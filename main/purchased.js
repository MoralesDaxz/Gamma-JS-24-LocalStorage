const body = document.querySelector("body");
const contentPokemons = document.createElement("div");
const iconBack = document.getElementById("iconBack");
const mainTitle = document.createElement("h1");
const emptyText = document.createElement("a");
const buttonDelete = document.getElementsByTagName("button");
let pokemonStack = JSON.parse(localStorage.getItem("Pokemons")) || [];
body.appendChild(mainTitle);

body.style =
  "display:flex; flex-direction:column;align-items:center;min-width:320px;background-color:#07010c;font-family:Roboto, Geneva, Tahoma, sans-serif";
iconBack.style = "display:block;position:absolute;top:15px;left:7%;";
emptyText.style = "display:none";
mainTitle.style =
  "font-weight:800px;font-size:1.9rem;color:white;text-align:center";
mainTitle.innerHTML =
  "<h2>Pokemons - Comprados <span id='quantity' > </span></h1>";
emptyText.setAttribute("href", "./index.html");

const alertEmptyCar = () => {
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

const pokemonsPurchased = () => {
  body.appendChild(contentPokemons);
  pokemonStack.forEach((pokemon) => {
    const divCard = document.createElement("div");
    const titlePokemon = document.createElement("h5");
    const imagen = document.createElement("img");
    const contentBottons = document.createElement("div");
    const btnSubtract = document.createElement("button");
    const showUnit = document.createElement("p");
    const btnAdd = document.createElement("button");
    titlePokemon.innerText = pokemon.name;
    imagen.src = pokemon.img;
    btnSubtract.id = pokemon.id;
    btnAdd.id = pokemon.id;
    contentPokemons.appendChild(divCard);
    divCard.appendChild(titlePokemon);
    divCard.appendChild(imagen);
    divCard.appendChild(contentBottons);
    contentBottons.appendChild(btnSubtract);
    contentBottons.appendChild(showUnit);
    contentBottons.appendChild(btnAdd);
    contentPokemons.style =
      "display:flex;flex-wrap: wrap;justify-content:center;height:auto;width:90%;flex-wrap: wrap;gap:1%";
    divCard.style = `width:180px;height:240px; display:flex; flex-direction:column; align-items:center; border-radius:2px;background-image: url('./styles/pokebola.png'); background-position:center;background-size:cover`;
    titlePokemon.style =
      "width:fit-content;height:1%;margin-top:21%;margin-left:7%;color:black;text-transform:capitalize;font-size:14px;letter-spacing:1px;font-weight: 800";
    imagen.style = "margin-left:7%;margin-top:8%";
    contentBottons.style =
      "display:flex;justify-content:center;align-items:baseline";
    btnSubtract.style =
      "width:25px;height:25px;font-size:15px;font-weight:700;padding:2px;border-radius:4px; cursor:pointer";
    showUnit.style =
      "width:100%;height:25px;margin:0px;text-align:center; font-weight:700";
    btnSubtract.innerText = "-";
    btnAdd.style =
      "width:25px;height:25px;font-size:15px;font-weight:700;padding:2px;border-radius:4px; cursor:pointer";
    btnAdd.innerText = "+";
    showUnit.innerText = pokemon.cantidad;
    btnAdd.setAttribute("onclick", "addQuantity()");
    btnSubtract.setAttribute("onclick", "substractQuantity()");
  });
};
const checkZero = () => {
  pokemonStack.forEach((pokemon) => {
    if (pokemon.cantidad === 0) {
      let filtro = pokemonStack.filter((item) => item.cantidad >= 1);
      localStorage.setItem("Pokemons", JSON.stringify(filtro));
      pokemonStack = JSON.parse(localStorage.getItem("Pokemons"));
    
      return location.reload();
    }
  });
};
const quantityTitle = () => {
  let totalPokemons = pokemonStack.reduce(
    (acc, curr) => acc + curr.cantidad,
    0
  );
return  totalPokemons > 0
    ? (document.querySelector("#quantity").innerText = `(${totalPokemons})`)
    : "";
};
const addQuantity = () => {
  const unitElementText = event.target.previousElementSibling;
  let elementFound = pokemonStack.find(
    (pokemon) => pokemon.id === event.target.id * 1
  );
  
  if (elementFound) {
    elementFound.cantidad += 1;
    let filtro = pokemonStack.filter((item) => item.cantidad >= 1);
    localStorage.setItem("Pokemons", JSON.stringify(filtro));
    pokemonStack = JSON.parse(localStorage.getItem("Pokemons"));
    unitElementText.innerText = elementFound.cantidad;
  }
  quantityTitle()
};

const substractQuantity = () => {
  const unitElementText = event.target.nextElementSibling;
  let elementFound = pokemonStack.find(
    (pokemon) => pokemon.id === event.target.id * 1
  );
  elementFound.cantidad -= 1;

  localStorage.setItem("Pokemons", JSON.stringify(pokemonStack));
  pokemonStack = JSON.parse(localStorage.getItem("Pokemons"));
  unitElementText.innerText = elementFound.cantidad;
  quantityTitle()
  checkZero();
  return;
};
pokemonsPurchased();
quantityTitle()
alertEmptyCar();
/* console.log(buttonDelete);
buttonDelete.forEach((item,index) => {
  item.addEventListener("click", (e) => {
    let elementFound = pokemonStack.find((i) => i.name == pokemon.name); //i.id != idEvent elementos diferentes a id Event
    let filtro = pokemonStack.filter((item) => item.cantidad >=1);
 
    if (elementFound.cantidad >0) {
      elementFound.cantidad -= 1;
      localStorage.setItem("Pokemons", JSON.stringify(pokemonStack));
      pokemonStack = JSON.parse(localStorage.getItem("Pokemons"));
return showPokemons()
     
    } else {
      localStorage.setItem("Pokemons", JSON.stringify(filtro));
      pokemonStack = JSON.parse(localStorage.getItem("Pokemons"));
      return showPokemons()
    }
  });
}) */
