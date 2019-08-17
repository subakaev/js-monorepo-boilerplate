import request from 'supertest';

import getApp from '../src/index';

test('testing', async () => {
  const server = getApp();

  // server.listen();

  const res = await request.agent(server).post('/test');
  expect(res.status).toBe(200);
  expect(res.body.success).toBe(true);
});
