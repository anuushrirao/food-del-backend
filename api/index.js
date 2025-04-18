// api/index.js (CommonJS version)
import serverless from 'serverless-http';
import { default as app } from '../server.js';

export const handler = serverless(app);