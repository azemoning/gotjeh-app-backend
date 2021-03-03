# Synrgy Mini Project TEAM E

## Gotjeh Project

Where jobs find you!

Bored? Need Money? Need Some New Set of Skills?
Don’t Worry We at Gotjeh, Got You!

## Prerequisite

### Sequelize CLI

This project is using sequelize-cli, if you don't have it (check by running `npm list -g --depth=0`) then install it by:

```bash
npm install -g sequelize-cli
```

### Environment variable

Please edit the [example.env](example.env) and insert your database credential & desired port to run this app

After that, copy the file & rename it to `.env`

## Initialization

Please run these command after cloning this repo
Install dependencies

```bash
npm install
```

Create database

```bash
sequelize db:create
```

Migrate schema

```bash
sequelize db:migrate
```

Seed data

```bash
sequelize db:seed:all
```

### Dependencies

- bcrypt
- dotenv
- express
- jsonwebtoken
- nanoid
- passport
- passport-jwt
- pg
- sequelize
