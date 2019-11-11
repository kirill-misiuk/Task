const bCrypt = require('bcrypt-nodejs');
const {Library} = require('../config/sequelize');

module.exports = function (passport) {
    let LocalStrategy = require('passport-local').Strategy;
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });
    passport.deserializeUser(function (id, done) {

        Library.findByPk(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, email, password, done) {

            let generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };

            Library.findOne({
                where: {
                    name: email
                }
            }).then(function (user) {

                if (user) {

                    return done(null, false, req.flash('signupMessage', 'That username is already taken.'))

                } else {

                    let userPassword = generateHash(password);

                    let data =
                        {
                            name: email,
                            password: userPassword,
                            location: 'location',
                            createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
                            updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')

                        };

                    Library.create(data).then(function (newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }
    ));
    passport.use('local-login', new LocalStrategy(
        {

            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true

        },


        function (req, email, password, done) {
            let isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }

            Library.findOne({
                where: {
                    name: email
                }
            }).then(function (user) {

                if (!user) {

                    return done(null, false, req.flash('loginMessage', 'No user found.'));

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                }


                let userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

};