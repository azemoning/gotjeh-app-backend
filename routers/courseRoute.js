const app = require('express').Router()
const CourseController = require('../controllers/courseController')
const course = new CourseController()

app.route('/courses')
    .get(async (req, res, next) => {
        const result = await course.get().catch(next)
        res.status(200).send(result)
    })
    .post(async (req, res, next) => {
        const result = await course.add(req.body).catch(next)
        res.status(201).send(result)
    });
app.route('/courses/:id')
    .get(async (req, res, next) => {
        const result = await course.get({ id: req.params }).catch(next)
        res.status(200).send(result)
    })
    .put(async (req, res, next) => {
        const { id } = req.params
        const result = await course.edit(id, req.body).catch(next)
        res.status(200).send(result)
    })
    .delete(async (req, res, next) => {
        const { id } = req.params
        const result = await course.remove(id).catch(next)
        res.status(200).send(result)
    });

module.exports = app