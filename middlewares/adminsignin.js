module.exports = function (role) {
    return function (req, res, next) {
        if (role.includes(req.session.currentUser.role)) {
            next()
        } else {
            res.redirect('/');
        }
    }
}