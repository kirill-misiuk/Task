const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');
const dbconfig = require('../config/passportDB');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


module.exports = function (passport) {


    passport.serializeUser(function (user, done) {

        done(null, user.id);
    });


    passport.deserializeUser(function (id, done) {
        connection.query("SELECT * FROM libraries WHERE id = ? ", [id], function (err, rows) {
            done(err, rows[0]);
        });
    });
    passport.use(
        'local-signup',
        new LocalStrategy({

                usernameField: 'name',
                passwordField: 'password',
                passReqToCallback: true
            },
            function (req, username, password, done) {
                connection.query("SELECT * FROM libraries WHERE name = ?", [username], function (err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                    } else {
                        let newUserMysql = {
                            name: username,
                            password: bcrypt.hashSync(password, null, null),
                            location: req.body.location,
                            createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
                            updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
                            // use the generateHash function in our user model
                        };

                        let insertQuery = "INSERT INTO libraries ( name, password, location,createdAt,updatedAt ) values (?,?,?,?,?)";

                        connection.query(insertQuery, [newUserMysql.name, newUserMysql.password, newUserMysql.location, newUserMysql.createdAt, newUserMysql.updatedAt], function (err, rows) {
                            console.log(err);
                            console.log('!!!!',rows);
                            newUserMysql.id = rows.insertId;
                            return done(null, newUserMysql);
                        });
                    }
                });
            })
    );


    passport.use(
        'local-login',
        new LocalStrategy({
                usernameField: 'name',
                passwordField: 'password',
                passReqToCallback: true
            },
            function (req, username, password, done) {
                connection.query("SELECT * FROM libraries WHERE name = ?", [username], function (err, rows) {
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessage', 'No user found.'));
                    }

                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(password, rows[0].password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                    // all is well, return successful user
                    return done(null, rows[0]);
                });
            })
    );

};
