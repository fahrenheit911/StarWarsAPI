import { EntitySchema } from 'typeorm';

const People = new EntitySchema({
  name: 'People',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    height: {
      type: 'int',
    },
    mass: {
      type: 'int',
    },
  },
});

export default People;



