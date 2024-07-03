// const app = require('../../src/index')
// const request = require('supertest')

// describe('Testes da API user', () => {

//     it('Criar um usuario', async () => {
//         const response = await request(app)
//             .post('/users/registro')
//             .send({ nome: "davi", email: "davi", senha: "1" });

//             expect(response.statusCode).toBe(201);
//         expect(response.body.nome).toEqual( "davi" );
//         expect(response.body.email).toEqual( "davi" );
//     } )

//     it('Logar um usuário', async () => {
//         const usuario = await request(app)
//             .post('/users/registro')
//             .send({ nome: "davi", email: "davi", senha: "1" });

//         const response = await request(app)
//             .post('/users/login')
//             .send({ email: usuario.body.email, senha: "1" });

//         expect(response.statusCode).toBe(200);
//         expect(response.body).toHaveProperty('token');
//     })

//     it('Alterar um usuário', async () => {
//         const usuario = await request(app)
//             .post('/users/registro')
//             .send({ nome: "davi", email: "davi", senha: "1" });

//         const usuarioLogado = await request(app)
//             .post('/users/login')
//             .send({ email: usuario.body.email, senha: "1" });

//         const response = await request(app)
//             .put('/users/1')
//             .set('authorization', usuarioLogado.body.token)
//             .send({ nome: "zion", email: "zion", senha: "2" });

//         expect(response.statusCode).toBe(200);
//         expect(response.body.nome).toEqual("zion");
//         expect(response.body.email).toEqual("zion");
//     })
// })
