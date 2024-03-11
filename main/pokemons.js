const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 4,
    name: "charmander",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 6,
    name: "charizard",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 7,
    name: "squirtle",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 8,
    name: "wartortle",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: 9,
    name: "blastoise",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: 10,
    name: "caterpie",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    id: 11,
    name: "metapod",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    id: 12,
    name: "butterfree",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 13,
    name: "weedle",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    id: 14,
    name: "kakuna",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    id: 15,
    name: "beedrill",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    id: 16,
    name: "pidgey",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    id: 17,
    name: "pidgeotto",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    id: 18,
    name: "pidgeot",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    id: 19,
    name: "rattata",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 20,
    name: "raticate",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
];

const body = document.querySelector("body");
const divContent = document.createElement("div");
const titlePokemon = document.createElement("div");
const mainCar = document.createElement("div");
const titleCar = document.createElement("p");
const shopContent = document.createElement("div");
const iconShop = document.createElement("div");
const unitsPurchased = document.createElement("div");
const toPurchased = document.createElement("a");
const iconBag = document.createElement("div");
const closeMainCar = document.createElement("div");
let carShop = JSON.parse(localStorage.getItem("Pokemons")) || [];
let showBag = true;
let showUnits = false;
let unitsBuys = 0;
body.appendChild(titlePokemon);
body.appendChild(divContent);
body.appendChild(iconBag);
body.appendChild(mainCar);
mainCar.append(closeMainCar);
mainCar.append(titleCar);
mainCar.append(shopContent);
mainCar.append(toPurchased);
shopContent.append(iconShop);
shopContent.append(unitsPurchased);
toPurchased.setAttribute("href", "./storage.html");
toPurchased.setAttribute("target", "_self");
closeMainCar.setAttribute("title", "close");

body.style =
  "display:flex; flex-direction:column;align-items:center;min-width:320px;background-color:#07010c;font-family:Roboto, Geneva, Tahoma, sans-serif";
titlePokemon.style = `width:40%; height:8rem;background-image: url('./styles/titulo.png');background-repeat:no-repeat;background-position:center;background-size:60%;margin-top:2%;margin-bottom:1%`;
divContent.style =
  "display:flex;flex-wrap: wrap;justify-content:center;height:auto;width:90%;flex-wrap: wrap;gap:1%";
titleCar.innerText = "COMPRADOS";
titleCar.style =
  "font-size:1.4rem; text-align:center;font-weight:800;letter-spacing: 2px;";
iconBag.classList.add("bag");
mainCar.style = "display:none;text-decoration:none";
closeMainCar.style =
  "display:flex;position:absolute;top:0px;right:5px;color:white; font-weight:400;font-size:1rem;cursor:pointer";
closeMainCar.innerText = "x";
shopContent.style = `border: white solid 2px;width:100%;height:80px; color:white; text-align:center; border-radius:6px;display:flex; justify-content:center;align-items:center;`;
iconShop.style = `background: url(./styles/iconPokebola.png);background-repeat:no-repeat;background-position:center;background-size:50%; width: 50%; height:100%`;
unitsPurchased.style =
  "width:50%;display:flex; justify-content:center; align-items:center;font-size:40px; font-weight:700; border-left:white solid 2px; height:inherit ";
unitsPurchased.innerText = "0";
toPurchased.style =
  "text-decoration:none; font-size:1.1rem;font-weight:800;color:white;padding:4px";
toPurchased.innerText = "Ver compra >";

closeMainCar.addEventListener("click", () => {
  showBag = true;
  displayCar();
  return;
});

iconBag.addEventListener("click", () => {
  showBag = false;
  showUnits = true;
  if (carShop.length > 0) {
    displayCar();
    return;
  }
});

const displayCar = () => {
  let test = 0;
  carShop.forEach((i) => {
    test += i.cantidad;
    return (unitsBuys = test);
  });

  if (carShop.length < 1) {
    iconBag.classList.remove("bag");
    iconBag.classList.add("hidden");
    return;
  }
  if (showBag === false && showUnits) {
    mainCar.style =
      "color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:10px;right:10px; background-color:#07010ccb; border-radius:6px";
    unitsPurchased.innerText = unitsBuys;
    iconBag.classList.remove("bag");
    iconBag.classList.add("hidden");
    return;
  } else {
    mainCar.style = "display:none;";
    iconBag.classList.remove("hidden");
    iconBag.classList.add("bag");
  }
};

const createCard = () => {
  pokemons.forEach((pokemon) => {
    const divCard = document.createElement("div");
    const name = document.createElement("h5");
    const imagen = document.createElement("img");
    const btn = document.createElement("button");

    name.innerText = pokemon.name;
    pokemon.cantidad = 1;
    imagen.src = pokemon.img;

    btn.id = uuid();
    divContent.appendChild(divCard);
    divCard.appendChild(name);
    divCard.appendChild(imagen);
    divCard.appendChild(btn);
    divCard.style = `width:180px;height:240px; display:flex; flex-direction:column; align-items:center; border-radius:2px;background-image: Url('./styles/pokebola.png'); background-position:center;background-size:cover`; //background:linear-gradient(rgb(255, 0, 0) 50%, rgb(255, 253, 253) 50%);
    name.style =
      "width:fit-content;height:1%;margin-top:21%;margin-left:7%;color:black;text-transform:capitalize;font-size:14px;font-weight: 800;letter-spacing:1px";
    imagen.style = "margin-left:7%;margin-top:8%";
    btn.style =
      "width:fit-content;margin-top:3%;margin-left:8%;font-size:12px;font-weight:700;padding:2px;border-radius:4px;cursor:pointer";
    btn.innerText = "Comprar";

    btn.addEventListener("click", () => {
      mainCar.classList.add("shake-left");
      setTimeout(() => {
        mainCar.classList.remove("shake-left");
      }, 500);

      let elementFound = carShop.find((item) => item.name === pokemon.name);
      if (elementFound) {
        elementFound.cantidad += 1;
      } else {
        carShop.unshift(pokemon);
      }

      localStorage.setItem("Pokemons", JSON.stringify(carShop));
      displayCar();
    });
  }); //end forEach
}; //end createCard

createCard();
displayCar();
