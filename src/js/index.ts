import listar from "./listar"
import { Cachorro, Gato, Cavalo, Porco } from "./classes"

// Mundo dos objetos
const animais = [
  new Cachorro("Totó"),
  new Gato("Fred"),
  new Cavalo("Pangaré"),
  new Gato("Yon"),
  new Porco("Pig"),
]


// listar animais
listar(animais)

