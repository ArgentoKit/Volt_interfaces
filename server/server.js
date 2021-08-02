const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const dbConnection = require('./dbConnection');
const cors = require('cors')

const app = express()
const PORT = 3005

dbConnection()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!')
})