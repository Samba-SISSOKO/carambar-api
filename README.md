# 🍬 Carambar API – Backend

Projet CDA – Backend de l’application **Carambar & co**

API REST développée avec **Node.js**, **Express** et **Sequelize (SQLite)**.
Elle fournit des endpoints versionnés permettant de gérer les blagues.

---

## 🚀 API en ligne

https://carambar-api-c1vh.onrender.com

---

## 📚 Documentation Swagger

https://carambar-api-c1vh.onrender.com/api-docs

---

## 🔗 Endpoints disponibles

Toutes les routes sont préfixées par : `/api/v1`

| Méthode | Endpoint | Description |
|----------|----------|-------------|
| GET | `/api/v1/blagues` | Récupère toutes les blagues |
| GET | `/api/v1/blagues/:id` | Récupère une blague par ID |
| GET | `/api/v1/blagues/random` | Récupère une blague aléatoire |
| POST | `/api/v1/blagues` | Ajoute une nouvelle blague |
| PUT | `/api/v1/blagues/:id` | Met à jour une blague |
| DELETE | `/api/v1/blagues/:id` | Supprime une blague |

### Exemple Body (POST / PUT)

```json
{
  "question": "Pourquoi les développeurs aiment le café ?",
  "answer": "Parce qu’il corrige leurs bugs"
}

---

## Accessible sur :

http://localhost:3000

---

## ⚙️ Stack technique

Node.js 22.x

Express

Sequelize

SQLite

Swagger (documentation API)

Déploiement : Render

---

## 🧩 Déploiement

Backend hébergé sur Render :

https://carambar-api-c1vh.onrender.com

Script spécifique ajouté pour SQLite sous Linux :

"heroku-postbuild": "npm rebuild sqlite3 --build-from-source"

---

## 🧪 Tests

Les endpoints peuvent être testés :

via Swagger

via Postman

via le frontend Angular

---

## 🛠 Installation en local

git clone https://github.com/Samba-SISSOKO/carambar-api.git
cd carambar-api
npm install
npm run dev