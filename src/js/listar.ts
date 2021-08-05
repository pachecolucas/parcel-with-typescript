import {Animal} from "./classes"

export default function listar(animais: Animal[]) {

  // pega a lista (ul)
  const ul = document.querySelector("ul")
  
  animais.forEach(animal => {
    // criar um item de lista novo
    const li = document.createElement("li")
  
    // coloca o animal dentro da lista
    li.innerHTML = animal.nome + " faz... " + animal.fazSom()
  
    // adiciona novo item (li) na lista (ul)
    ul.appendChild(li)
  })

}