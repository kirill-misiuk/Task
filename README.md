# Intexsoft_Task
https://library.cleverapps.io
Password to all library accounts: qwerty

# ABOUT DATABASES
I used mysql and sequelize.
To change  connection options go to config/sequelize.js
```JS
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'host',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
'''
