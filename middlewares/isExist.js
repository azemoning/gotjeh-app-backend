function isExist(model) {
    return async (req, res, next) => {
        const { id } = req.params
        const isExist = await model.findOne({
            where: {
                id: id
            }
        })

        if (!isExist) {
            res.status(404).json({ "error": "Not Found" })
        } else {
            next()
        }
    }
}

module.exports = isExist