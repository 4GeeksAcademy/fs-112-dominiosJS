import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


/* let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let pronouns of pronoun){
  for (let adjs of adj){
    for (let nouns of noun){
      console.log (`www.${pronouns}${adjs}${nouns}.com`)

    }
  }
}
 */

function generarDominios() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let pronouns of pronoun) {
    for (let adjs of adj) {
      for (let nouns of noun) {
        console.log(`www.${pronouns}${adjs}${nouns}.com`);
      }
    }
  }
}

window.generarDominios = generarDominios;
