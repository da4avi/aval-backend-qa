const app = require('../../src/index')
const request = require('supertest')

describe('Testes da API task', () => {

    it('Criar uma tarefa', async () => {
        const usuario = await request(app)
            .post('/users/registro')
            .send({ nome: "davi", email: "davi", senha: "1" });

        const usuarioLogado = await request(app)
            .post('/users/login')
            .send({ email: "davi", senha: "1" });

        const token = usuarioLogado.body.token;

        const projeto = await request(app)
            .post('/projects')
            .set('authorization', token)
            .send({ titulo: "davi", conteudo: "davi", autorId: usuario.body.id });

        const response = await request(app)
            .post('/tasks')
            .set('authorization', token)
            .send({ titulo: "davi", conteudo: "davi", status: "davi", projetoId: projeto.body.id });

        expect(response.statusCode).toBe(201);
        expect(response.body.titulo).toEqual("davi");
        expect(response.body.conteudo).toEqual("davi");
        expect(response.body.status).toEqual("davi");
        expect(response.body.projetoId).toEqual(projeto.body.id);
    })

})
