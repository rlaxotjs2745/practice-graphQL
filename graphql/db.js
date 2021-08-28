import axios from "axios"

let people = [
  {
    id: 1,
    name: 'tess',
    age: 25,
    sex: 'male'
  },
  {
    id: 2,
    name: 'lack',
    age: 30,
    sex: 'male'
  },
  {
    id: 3,
    name: 'I2Sign',
    age: 30,
    sex: 'female'
  },
  {
    id: 4,
    name: 'suck',
    age: 30,
    sex: 'male'
  },
  {
    id: 5,
    name: 'link',
    age: 34,
    sex: 'male'
  },
  {
    id: 6,
    name: 'min',
    age: 28,
    sex: 'female'
  },
]
export const getPeople = () => people;

export const getById = id => people.filter(person => id === person.id)[0];

export const deletePerson = id => {
  const newPeople = people.filter(person => id !== person.id);
  if(people.length > newPeople.length){
    people = newPeople.map(person => {return {...person, id: person.id > id ? person.id - 1 : person.id}});
    return true;
  } else {
    return false;
  }
}

export const addPerson = (name, age, sex) => {
  const newPerson = {
    id: people.length + 1,
    name,
    age,
    sex,
  };
  people.push(newPerson);
  if(people.map(el => el.id).includes(newPerson.id)){
    return true;
  };
  return false;
}

const MOVIE_URL = 'https://yts.mx/api/v2/list_movies.json'

export const getMovie = (limit, rating) => {
  return axios.get(MOVIE_URL)
  .then(res => {
    const movList = res.data.movies;
  })
}