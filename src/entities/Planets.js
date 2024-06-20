import {EntitySchema} from 'typeorm';

const Planets = new EntitySchema({
  name: 'Planets',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {type: 'varchar'},
    rotation_period: {type: 'int'},
    orbital_period: {type: 'int'},
    diameter: {type: 'int'},
    climate: {type: 'varchar'},
    gravity: {type: 'varchar'},
    terrain: {type: 'varchar'},
    surface_water: {type: 'int'},
    population: {type: 'int'},
    residents: {type: 'simple-array'},
    films: {type: 'simple-array'},
    created: {type: 'timestamp'},
    edited: {type: 'timestamp'},
    url: {type: 'varchar'},
  },
});

export default Planets;
