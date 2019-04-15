const router = require('express').Router();
const Planets = require('./planets-model.js');

router.get('/', async (req, res) => {
  try {
    const planets = await Planets.get();
    res.status(200).json(planets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving planets.' });
  }
});

router.post('/', async (req, res) => {
  const planet = req.body;
  try {
    const addedPlanet = await Planets.add(planet);
    res.status(201).json(addedPlanet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding planet.' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const count = await Planets.del(id);
    res.status(204).json(count);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting planet.' });
  }
});

module.exports = router;
