const db = require('../database/dbConfig.js');
const Planets = require('./planets-model.js');

describe('planets-model', () => {
  beforeEach(async () => {
    await db('planets').truncate();
  });

  describe('get()', () => {
    it('should return JSON', async () => {
      const planets = await db('planets');
      expect(planets).toHaveLength(0);
    });
  });

  describe('add()', () => {
    it('should return JSON', async () => {
      await Planets.add({ name: 'Mars', distance_from_sun: 141 });

      const planets = await db('planets');
      expect(planets).toHaveLength(1);
    });
  });
});
