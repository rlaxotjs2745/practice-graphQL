import {getPeople, getById, deletePerson, addPerson} from "./db"

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, {id}) => getById(id),
  },
  Mutation: {
    deletePerson : (_, {id}) => deletePerson(id),
    addPerson: (_, {name, age, sex}) => addPerson(name, age, sex)
  }
}

export default resolvers;