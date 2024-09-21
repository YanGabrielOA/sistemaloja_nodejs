import express from 'express'
const router = express.Router()

router.get("/Produtos", function (req, res) {
    const Produtos = [
      {
        nome: "Rochedo Explosivo",
        preco: 150.00 ,
        categoria: "Explosivos",
        descricao: "Rochedo que explode ao ativar o mecanismo.",
      },
      {
        nome: "Armadilha de Corda",
        preco: 75.00,
        categoria: "Armadilhas",
        descricao: "Armadilha de corda que captura a presa quando acionada.",
      },
      {
        nome: "Pó de Invisibilidade",
        preco: 50.00,
        categoria: "Camuflagem",
        descricao:
          "Pó que faz com que o usuário se torne invisível temporariamente.",
      },
      {
        nome: "Bomba de Fumaça",
        preco: 80.00,
        categoria: "Explosivos",
        descricao:
          "Bomba que libera uma densa nuvem de fumaça para cobrir a área.",
      },
      {
        nome: "Lança-Rede",
        preco: 100.00,
        categoria: "Armadilhas",
        descricao: "Dispositivo que lança uma rede para capturar a presa.",
      },
      {
        nome: "Escudo de Aço",
        preco: 120.00,
        categoria: "Defesa",
        descricao: "Escudo resistente que protege contra ataques.",
      },
      {
        nome: "Moto Propulsora",
        preco: 300.00,
        categoria: "Veículos",
        descricao:
          "Veículo motorizado com propulsor a jato para alta velocidade.",
      },
      {
        nome: "Catapulta Precisa",
        preco: 200.00,
        categoria: "Armadilhas",
        descricao: "Catapulta que dispara objetos com alta precisão.",
      },
      {
        nome: "Explosivo Longo Alcance",
        preco: 180.00,
        categoria: "Explosivos",
        descricao: "Explosivo projetado para ser lançado a grandes distâncias.",
      },
      {
        nome: "Corda Elástica",
        preco: 60.00,
        categoria: "Armadilhas",
        descricao:
          "Corda elástica que pode ser usada para criar trampolins ou armadilhas.",
      },
      {
        nome: "Capacete de Proteção",
        preco: 90.00,
        categoria: "Defesa",
        descricao: "Capacete resistente a impactos e explosões.",
      },
      {
        nome: "Bomba Adesiva",
        preco: 70.00,
        categoria: "Armadilhas",
        descricao: "Bomba que lança um adesivo pegajoso para prender a presa.",
      },
    ];
    res.render("Produtos", {
      Produtos: Produtos,
    });
  });
  export default router;
