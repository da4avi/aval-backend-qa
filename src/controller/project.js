const Project = require('../model/project');

class ProjectController {
    async criarProject(titulo, conteudo, autorId) {
        const project = await Project
            .create({ titulo, conteudo, autorId });

        return project;
    }

    async buscarPorId(id) {
        const project = await Project.findByPk(id);

        if (!Project) {
            throw new Error('Project não encontrado');
        }

        return project;
    }

    async alterarProject(id, titulo, conteudo, autorId) {
        const project = await this.buscarPorId(id);

        project.titulo = titulo;
        project.conteudo = conteudo;
        project.autorId = autorId;

        project.save();

        return project;
    }

    async deletarProject(id) {

        const project = await this.buscarPorId(id);

        project.destroy();
    }

    async listarProjects() {
        return Project.findAll();
    }
}

module.exports = new ProjectController();