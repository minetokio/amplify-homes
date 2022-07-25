// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Worker, Home, Work } = initSchema(schema);

export {
  Worker,
  Home,
  Work
};