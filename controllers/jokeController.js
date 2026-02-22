const Joke = require("../models/Joke");


exports.createJoke = async (req, res) => {
    try {
        const joke = await Joke.create(req.body);
        res.status(201).json(joke);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};


exports.getJokeById = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) {
        return res.status(404).json({ message: "Blague non trouvée" });
    }
    res.json(joke);
};

// PUT /blagues/:id
exports.updateJoke = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);

    if (!joke) {
        return res.status(404).json({ message: "Blague non trouvée" });
    }

    await joke.update(req.body);
    res.json(joke);
};

// DELETE /blagues/:id
exports.deleteJoke = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);

    if (!joke) {
        return res.status(404).json({ message: "Blague non trouvée" });
    }

    await joke.destroy();
    res.json({ message: "Blague supprimée avec succès" });
};

// GET /blagues/random
exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(random);
};