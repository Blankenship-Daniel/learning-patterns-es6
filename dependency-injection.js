let getAnimals = (fetch, id) => {
  return fetch('http://api.animalfarmgame.com/animals/' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}

getAnimals(window.fetch, 123)
  .then(animal => document.querySelector('.animal').innerHTML = animal.name)
