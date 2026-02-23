# carambar-api
Projet CDA – Backend Carambar & co

Backend Node.js/Express pour l’application Carambar & co.
Il fournit une API versionnée pour gérer les blagues et sert de source pour le frontend et les futures applications mobiles.

🚀 Lien vers l'API en ligne

https://carambar-api-c1vh.onrender.com

🔗 Endpoints disponibles

Toutes les routes sont versionnées /api/v1 :

Méthode	Endpoint	

GET	/api/v1/blagues	Récupère toutes les blagues

GET	/api/v1/blagues/:id	Récupère une blague par ID

GET	/api/v1/blagues/random	Récupère une blague aléatoire

POST	/api/v1/blagues	Ajoute une nouvelle blague (body JSON { "contenu": "..." })

PUT	/api/v1/blagues/:id	Met à jour une blague existante (body JSON { "contenu": "..." })

DELETE	/api/v1/blagues/:id	Supprime une blague par ID

🛠️ Installation en local

Cloner le projet :

git clone https://github.com/Samba-SISSOKO/carambar-api.git

cd carambar-api

npm install

Lancer le serveur en développement :

npm run dev

Le backend sera accessible sur : http://localhost:3000

⚙️ Déploiement Render

Backend déployé sur Render : https://carambar-api-c1vh.onrender.com

Base de données : SQLite (Sequelize ORM)

Node.js version : 22.x

Pour éviter les erreurs liées à SQLite sur Linux, le script suivant est ajouté dans package.json :

"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "heroku-postbuild": "npm rebuild sqlite3 --build-from-source"
}

Render exécute ce script automatiquement pour compiler SQLite correctement.

📄 Documentation API



https://carambar-api-c1vh.onrender.com/api-docs

🔧 Remarques

Tous les endpoints peuvent être testés avec Postman ou directement via le frontend Angular.

