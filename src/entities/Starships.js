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
    cost_in_credits: {type: 'bigint', nullable: true},
    length: {type: 'int', nullable: true},
    max_atmosphering_speed: {type: 'int', nullable: true},
    crew: {type: 'int', nullable: true},
    passengers: {type: 'int', nullable: true},
    cargo_capacity: {type: 'bigint', nullable: true},
    consumables: {type: 'varchar'},
    hyperdrive_rating: {type: 'float', nullable: true},
    MGLT: {type: 'int', nullable: true},
    starship_class: {type: 'varchar'},
    pilots: {type: 'simple-array'},
    films: {type: 'simple-array'},
    created: {type: 'timestamp'},
    edited: {type: 'timestamp'},
    url: {type: 'varchar'},
  },
});

export default Starships;
