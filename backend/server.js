const { Client } = require('pg').native

const client = new Client({
    user: "Garza",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "ecommerce"
})

client.connect()
.then(() => console.log("connect successfully"))
.then(() => client.query ("select * from users"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())