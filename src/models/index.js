// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Home, Work } = initSchema(schema);

export {
  Home,
  Work
};