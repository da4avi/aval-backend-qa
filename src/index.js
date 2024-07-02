const express = require('express');
const database = require('./config/database');
const UserRoute = require('../src/routes/userRoute')
const UserApi = require('../src/api/user')
const ProjectRoute = require('../src/routes/projectRoute')
const TaskRoute = require('../src/routes/taskRoute')
const Middleware = require('./middleware/validationMiddleware')

const userApi = new UserApi();
const middleware = new Middleware();
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})

app.post('/users/registro', middleware.validarUsuario, userApi.criarUsuario)
app.post('/users/login', middleware.validarLogin, userApi.logarUsuario)

app.use(userApi.validarToken)

app.use('/users', UserRoute)
app.use('/projects', ProjectRoute)
app.use('/tasks', TaskRoute)

const PORT = 3000;

database.sync({ force: true })
    .then(() => {
        if (process.env.NODE_ENV !== 'test') {
            app.listen(PORT, () => {
              console.log(`Servidor rodando na porta ${PORT}`);
            });
          }
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

module.exports = app;