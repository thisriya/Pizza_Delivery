const User = require('../../models/user')
const bcrypt = require('bcrypt')

function auth_controller() {
    return {
        // Login page render
        login(req, res) {
            res.render('auth/login')
        },

        // Handle login POST request
        async postlogin(req, res) {
            const { email, password } = req.body
            
            // Validate input
            if (!email || !password) {
                req.flash('error', 'Both email and password are required')
                return res.redirect('/login')
            }
        
            try {
                // Convert email to lowercase and trim whitespace
                const sanitizedEmail = email.toLowerCase().trim()
                
                // Find user by email
                const user = await User.findOne({ email: sanitizedEmail })
                
                // Detailed error logging
                if (!user) {
                    console.log(`Login attempt failed: No user found with email ${sanitizedEmail}`)
                    req.flash('error', 'Invalid email or password')
                    return res.redirect('/login')
                }
        
                // Compare passwords
                const passwordMatch = await bcrypt.compare(password, user.password)
                
                if (!passwordMatch) {
                    console.log(`Login attempt failed: Password mismatch for email ${sanitizedEmail}`)
                    req.flash('error', 'Invalid email or password')
                    return res.redirect('/login')
                }
        
                // Successful login
                req.session.user = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                
                // Use req.session.save to ensure session is saved before redirecting
                req.session.save((err) => {
                    if (err) {
                        console.error('Session save error:', err)
                        return res.redirect('/login')
                    }
                    return res.redirect('/') // Redirect to home page on successful login
                })
        
            } catch (err) {
                console.error('Login error:', err)
                req.flash('error', 'Something went wrong')
                return res.redirect('/login')
            }
        },

        // Logout handler
        logout(req, res) {
            req.session.destroy((err) => {
                if (err) {
                    console.log(err)
                    return res.redirect('/')
                }
                res.clearCookie('connect.sid') // The session cookie name
                return res.redirect('/login')
            })
        },

        // Register page render
        register(req, res) {
            res.render('auth/register')
        },

        // Handle registration POST request
        async postregister(req, res) {
            const { name, email, password } = req.body
            
            // Validate request
            if (!name || !email || !password) {
                req.flash('error', 'All fields must be filled!')
                req.flash('name', name)
                req.flash('email', email)
                return res.redirect('/register')
            }

            try {
                // Check if user exists
                const userExists = await User.exists({ email: email })
                if (userExists) {
                    req.flash('error', 'Email already taken!')
                    req.flash('name', name)
                    req.flash('email', email)
                    return res.redirect('/register')
                }

                // Hash password
                const hashedPassword = await bcrypt.hash(password, 10)

                // Create user
                const user = new User({
                    name: name,
                    email: email,
                    password: hashedPassword
                })

                await user.save()
                
                req.flash('success', 'Registration successful! Please login.')
                return res.redirect('/login')

            } catch (err) {
                req.flash('error', 'Something went wrong!')
                return res.redirect('/register')
            }
        }
    }
}

module.exports = auth_controller