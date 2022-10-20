// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { STime, Worker, Home, Work } = initSchema(schema);

export {
  STime,
  Worker,
  Home,
  Work
};