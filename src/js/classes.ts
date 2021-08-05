export class Animal {
  
  public nome: string

  constructor(n:string) {
    this.nome = n
  }

  public fazSom() {
    return "..."
  }

}

export class Cachorro extends Animal {

  public fazSom() {
    return "Auau!"
  }

}

export class Gato extends Animal {

  public fazSom() {
    return "Miau!"
  }

}

export class Cavalo extends Animal {

  public fazSom() {
    return "Pocotó!"
  }

}

export class Porco extends Animal {

  public fazSom() {
    return "Óinck!"
  }

}
