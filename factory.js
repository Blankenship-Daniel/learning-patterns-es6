class DogClass {
  constructor(name) {
    this.sound = 'woof'
    this.name  = name
  }
  talk() {
    console.log('Hi, my name is ' + this.name + '. ' + this.sound + '!')
  }
}

const DogFactory = name => {
  const sound = 'woof'
  return {
    talk: () => console.log('Hi, my name is ' + name + '. ' + sound + '!')
  }
}

const sniffles = new DogClass('Sniffles')
sniffles.talk() 

const rover = DogFactory('Rover')
rover.talk()