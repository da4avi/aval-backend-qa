const userController = require('../../src/controller/user')

describe('Testes de integração de user', () => {

    it('Criar um usuário', async () => {
        const user = await userController.criarUsuario(
                "davi",
                "davi",
                "davi"
        )
        expect(user).toHaveProperty("nome", "email", "senha")
    })
})