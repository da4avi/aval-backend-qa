const express = require('express');
const UserApi = require('../api/user');
const Middleware = require('../middleware/validationMiddleware')

const userApi = new UserApi();
const middleware = new Middleware();
const router = express.Router()

router.get('/', userApi.listarUsuario);
router.put('/:id', middleware.validarUsuario, middleware.validarUserId, userApi.alterarUsuario);
router.delete('/:id', middleware.validarUserId, userApi.deletarUsuario);

module.exports = router;

