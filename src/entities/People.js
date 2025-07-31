import {EntitySchema} from 'typeorm';

const People = new EntitySchema({
  name: 'People',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {type: 'varchar'},
    height: {type: 'int', nullable: true},
    mass: {type: 'int', nullable: true},
    hair_color: {type: 'varchar'},
    skin_color: {type: 'varchar'},
    eye_color: {type: 'varchar'},
    birth_year: {type: 'varchar'},
    gender: {type: 'varchar'},
    homeworld: {type: 'varchar'},
    films: {type: 'simple-array'},
    species: {type: 'simple-array'},
    vehicles: {type: 'simple-array'},
    starships: {type: 'simple-array'},
    created: {type: 'timestamp'},
    edited: {type: 'timestamp'},
    url: {type: 'varchar'},
  },
});

export default People;
