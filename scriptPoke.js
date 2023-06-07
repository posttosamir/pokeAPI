// async function weedTalk() {
//   try {
//     for (let i = 0; i < 50; i++) {
//       let url = `https://pokeapi.co/api/v2/berry/${i}`;

//       let response = await fetch(url);
//       let pokemon = await response.json();

//       console.log(`Weights:${pokemon.weight}`);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// weedTalk();
document.body.innerHTML = "";
function pokemonrunFor() {
  for (let i = 0; i < 50; i++) {
    showPoke(i);
  }
}

async function showPoke(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  let data = await fetch(url);
  let response = await data.json();
  console.log(response.id);
  console.log(response);
  console.log(response.sprites.back_default);
  showPokemonDom(response);
}

function showPokemonDom(pokemon) {
  document.body.innerHTML += `

  <div class="stylesonly">
  <h4 class="idDisplay">${pokemon.id}</h4>
  <h3>${pokemon.name}</h3>
  <img class="imgClass" src="${pokemon.sprites.back_default}" alt="">
  <h4>Name:-${pokemon.name}</h4>
  <h4>Weight: ${pokemon.weight}</h4>
  </div>
  `;
}

pokemonrunFor();
