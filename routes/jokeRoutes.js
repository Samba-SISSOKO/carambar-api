const express = require("express");
const router = express.Router();
const controller = require("../controllers/jokeController");

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 */
router.post("/blagues", controller.createJoke);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
router.get("/blagues", controller.getAllJokes);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 */
router.get("/blagues/random", controller.getRandomJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Une blague spécifique
 *       404:
 *         description: Blague non trouvée
 */
router.get("/blagues/:id", controller.getJokeById);

/**
 * @swagger
 * /blagues/{id}:
 *   put:
 *     summary: Modifier une blague
 *     tags: [Blagues]
 */
router.put("/blagues/:id", controller.updateJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   delete:
 *     summary: Supprimer une blague
 *     tags: [Blagues]
 */
router.delete("/blagues/:id", controller.deleteJoke);

module.exports = router;