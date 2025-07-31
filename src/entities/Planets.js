import { EntitySchema } from 'typeorm';

const Planets = new EntitySchema({
  name: 'Planets',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: { type: 'varchar' },
    rotation_period: { type: 'int', nullable: true },
    orbital_period: { type: 'int', nullable: true },
    diameter: { type: 'int', nullable: true },
    climate: { type: 'varchar' },
    gravity: { type: 'varchar' },
    terrain: { type: 'varchar' },
    surface_water: { type: 'int', nullable: true },
    population: { type: 'varchar', nullable: true },
    residents: { type: 'simple-array' },
    films: { type: 'simple-array' },
    created: { type: 'timestamp' },
    edited: { type: 'timestamp' },
    url: { type: 'varchar' },
  },
});

export default Planets;
