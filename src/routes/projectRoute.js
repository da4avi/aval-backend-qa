const express = require('express');
const ProjectApi = require('../api/project');
const Middleware = require('../middleware/validationMiddleware')

const projectApi = new ProjectApi();
const middleware = new Middleware();
const router = express.Router()

router.post('/', middleware.validarProject, projectApi.criarProject);
router.get('/', projectApi.listarProjects);
router.put('/:id', middleware.validarProject, middleware.validarProjectId, projectApi.alterarProject);
router.delete('/:id', middleware.validarProjectId, projectApi.deletarProject);

module.exports = router;