// Middleware to check if user is authenticated
function auth(req, res, next) {
    if (req.session.user) {
        return next()
    }
    req.flash('error', 'Please login to access this page')
    return res.redirect('/login')
}

// Middleware to check if user is not authenticated
function guest(req, res, next) {
    if (!req.session.user) {
        return next()
    }
    return res.redirect('/')
}

module.exports = {
    auth,
    guest
}