const database = require('../config/database');
const User = require('./user');

class Project {
    constructor() {
        this.model = database.define('projects', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.Sequelize.STRING,
                validate: {
                    len: {
                        args: [1, 100],
                        msg: "Título deve ter no máximo 100 caracteres"
                    }
                }
            },
            conteudo: {
                type: database.Sequelize.STRING
            },
            autorId: {
                type: database.Sequelize.INTEGER,
                foreignKey: true,
                references: {
                    model: User,
                    key: 'id'
                }
            }
        });
    }
}

module.exports = (new Project).model;