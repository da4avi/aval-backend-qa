const app = require('../../src/index')
const request = require('supertest')

describe('Testes da API user', () => {

    it('Criar um usuario', async () => {
        const response = await request(app)
            .post('/users/registro')
            .send({ nome: "davi", email: "davi", senha: "1" });

            expect(response.statusCode).toBe(201);
        expect(response.body.nome).toEqual( "davi" );
        expect(response.body.email).toEqual( "davi" );
    } )
})
