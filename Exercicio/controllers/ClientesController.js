import express from 'express'
const router = express.Router()


router.get("/Clientes", function (req, res) {
    const Clientes = [
      {
        nome: "Coiote",
        CPF: "123.456.789-00",
        endereco:
          "Rua das Armadilhas, 123 - Bairro Selvagem, São Paulo, SP - CEP: 01000-000",
      },
      {
        nome: "Papaleguas",
        CPF: "987.654.321-00",
        endereco:
          "Avenida da Corrida, 456 - Bairro Rápido, São Paulo, SP - CEP: 01310-000",
      },
      {
        nome: "Gato Felix",
        CPF: "159.753.486-00",
        endereco:
          "Rua dos Truques, 789 - Bairro Divertido, Rio de Janeiro, RJ - CEP: 20010-000",
      },
      {
        nome: "Pernalonga",
        CPF: "321.654.987-00",
        endereco:
          "Rua do Engano, 321 - Bairro Malandro, Belo Horizonte, MG - CEP: 30130-000",
      },
      {
        nome: "Taz",
        CPF: "741.852.963-00",
        endereco:
          "Avenida do Caos, 654 - Bairro Selvagem, Curitiba, PR - CEP: 80020-000",
      },
      {
        nome: "Marvin, o Marciano",
        CPF: "963.852.741-00",
        endereco:
          "Rua das Estrelas, 987 - Bairro Extraterrestre, Porto Alegre, RS - CEP: 90030-000",
      },
      {
        nome: "Tom",
        CPF: "258.147.369-00",
        endereco:
          "Rua da Briga, 432 - Bairro Trapaceiro, São Paulo, SP - CEP: 04110-000",
      },
      {
        nome: "Jerry",
        CPF: "369.258.147-00",
        endereco:
          "Rua da Briga, 433 - Bairro Trapaceiro, São Paulo, SP - CEP: 04111-000",
      },
      {
        nome: "Scooby-Doo",
        CPF: "369.258.147-00",
        endereco:
          "Rua dos Mistérios, 543 - Bairro Aventura, Rio de Janeiro, RJ - CEP: 20510-000",
      },
    ];

    res.render("clientes", {
      Clientes: Clientes,
    });
  });

  export default router;