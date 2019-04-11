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

  describe('add(planet)', () => {
    it('should have length 2', async () => {
      await Planets.add({ name: 'Mars', distance_from_sun: 141 });
      await Planets.add({ name: 'Earth2', distance_from_sun: 1 });

      const planet = await db('planets');
      expect(planet).toHaveLength(2);
    });
  });

  describe('del(id)', () => {
    it('should return 1', async () => {
      const count = await Planets.del(1);
      expect(count);
    });
  });
});
