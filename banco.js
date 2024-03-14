const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function () {
    console.log("Conexão com o banco realizada com sucesso!")
}).catch(function (erro) {
    console.log("falha na conexão: " + erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome: {
      type: Sequelize.STRING,
    },
    telefone: {
      type: Sequelize.STRING,
    },
    origem: {
      type: Sequelize.STRING,
    },
    data_contato: {
      type: Sequelize.DATEONLY,
    },
    observacao: {
      type: Sequelize.TEXT,
    },
  });

//Agendamentos.sync({force: true})

module.exports = Agendamentos