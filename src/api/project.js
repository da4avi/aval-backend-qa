const ProjectController = require('../controller/project');

class ProjectApi {
    async criarProject(req, res) {
        const { titulo, conteudo, autorId } = req.body;

        try {
            const project = await ProjectController.criarProject(titulo, conteudo, autorId);
            return res.status(201).send(project);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarProject(req, res) {
        const { id } = req.params;
        const { titulo, conteudo, autorId } = req.body;

        try {
            const project = await ProjectController.alterarProject(Number(id), titulo, conteudo, autorId);
            return res.status(200).send(project);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarProject(req, res) {
        const { id } = req.params;

        try {
            await ProjectController.deletarProject(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarProjects(req, res) {

        try {
            const projects = await ProjectController.listarProjects();
            return res.status(200).send(projects);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = ProjectApi;