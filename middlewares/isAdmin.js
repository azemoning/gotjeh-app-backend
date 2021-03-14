function verifyAdmin(model) {
    return async (req, res, next) => {
        const { id } = req.body
        const result = await model.findOne({
            where: {
                id: id
            }
        })

        if (result.is_admin) {
            next()
        } else {
            res.status(403).json({
                "code": 403,
                "error": "Only admin can access this route"
            })
        }
    }
}

module.exports = verifyAdmin