import {EntitySchema} from 'typeorm';

const Starships = new EntitySchema({
  name: 'Starships',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {type: 'varchar'},
    model: {type: 'varchar'},
    manufacturer: {type: 'varchar'},
    cost_in_credits: {type: 'int'},
    length: {type: 'int'},
    max_atmosphering_speed: {type: 'int'},
    crew: {type: 'int'},
    passengers: {type: 'varchar'},
    cargo_capacity: {type: 'int'},
    consumables: {type: 'varchar'},
    hyperdrive_rating: {type: 'int'},
    MGLT: {type: 'int'},
    starship_class: {type: 'varchar'},
    pilots: {type: 'simple-array'},
    films: {type: 'simple-array'},
    created: {type: 'timestamp'},
    edited: {type: 'timestamp'},
    url: {type: 'varchar'},
  },
});

export default Starships;
