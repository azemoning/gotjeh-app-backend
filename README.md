# Synrgy Mini Project TEAM E

## Gotjeh Project

A website where the user can find the desired freelance job, if the user feels his skills are lacking, he can follow the course that we have provided by our website.

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

## GIT Workflow

- Each code repository has 3 main branches that must be protected and can only be pushed directly by the maintainer, the 3 branches are master, develop, production
- Change default branch from code repository to develop
- Each feature created must use a special branch. branch name for a feature has format `feature/{feature-name}`
- Each feature has a flow : `feature/{feature-name}` MR → develop MR → production MR → master
- Team Role:
  - Maintainer: for students who as tech leads (can be appointed tutor or student voting)
  - Developer: for other students"

## Dependencies

- bcrypt
- dotenv
- express
- jsonwebtoken
- nanoid
- passport
- passport-jwt
- pg
- sequelize
- nodemailer

## Member Team

1. Aditya Desta Pranata
2. Agis Tri Wahyuji
3. Ahmad Saufi Maulana
4. Muhammad Mahdi Dewantoro
5. Prayogo Dewantoro
6. Sammy Sena Chow
7. Winda Kurnia
8. Zhafran Ammar

## API Specification

See [API Specification](api-spec/README.md) for further details.
