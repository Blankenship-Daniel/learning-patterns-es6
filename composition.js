/**
 * INHERITANCE is when you design your types around what they are.
 * COMPOSITION is when you design your types around what they do.
 */

/**
 * Dog             = pooper() + barker()
 * Cat             = pooper() + meower()
 * CleaningRobot   = driver() + cleaner()
 * MurderRobot     = driver() + killer()
 * MurderRobotDog  = driver() + killer() + barker()
 */

const pooper = state => ({
  poop: () => {
    console.log(state.name + ' pooped')
    state.poopCount++
  },
  numPooped: () => {
    console.log(state.name + ' has pooped ' + state.poopCount + ' times. Gross!!')
  }
})

const meower = state => ({
  meow: () => console.log('Meow, I am ' + state.name)
})

const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const driver = state => ({
  drive: () => state.position = state.position + state.speed
})

const cleaner = state => ({
  clean: () => {
    console.log(state.name + ' cleaned')
    state.cleanCount++
  },
  numCleaned: () => {
    console.log(state.name + ' has cleaned ' + state.cleanCount + ' messes')
  }
})

const killer = state => ({
  kill: () => {
    console.log(state.name + ' killed')
    state.killCount++
  },
  numKilled: () => {
    console.log(state.name + ' has killed ' + state.killCount + ' times')
  }
})

const Dog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    poopCount: 0
  }
  return Object.assign(
    {},
    pooper(state),
    barker(state)
  )
}

const Cat = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    poopCount: 0
  }
  return Object.assign(
    {},
    pooper(state),
    meower(state)
  )
}

const CleaningRobot = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    cleanCount: 0
  }
  return Object.assign(
    {},
    driver(state),
    cleaner(state)
  )
}

const MurderRobot = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    killCount: 0
  }
  return Object.assign(
    {},
    driver(state),
    killer(state)
  )
}

const MurderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0,
    killCount: 0
  }
  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  )
}

let rover = Dog('Rover')
let garfield = Cat('Garfield')
let cleanly = CleaningRobot('Cleanly')
let alfred = MurderRobot('Alfred')
let sniffles = MurderRobotDog('Sniffles')

rover.bark()
rover.poop()
rover.poop()
rover.numPooped()
garfield.meow()
garfield.poop()
garfield.poop()
garfield.poop()
garfield.numPooped()
cleanly.drive()
cleanly.clean()
cleanly.clean()
cleanly.numCleaned()
alfred.drive()
alfred.kill()
alfred.kill()
alfred.numKilled()
sniffles.bark()
sniffles.drive()
sniffles.kill()
sniffles.kill()
sniffles.kill()
sniffles.numKilled()