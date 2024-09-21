import express from 'express'
const router = express.Router()
router.get("/Pedidos", function (req, res) {
     const Pedidos = [
        { numeroPedido: "12345678", cliente: "Coiote", estado: "Esperando pagamento",precoTotal: 330.00  },
        { numeroPedido: "87654321", cliente: "Papaleguas", estado: "Pago",precoTotal: 480.00  },
        { numeroPedido: "15975348", cliente: "Gato Felix", estado: "Enviado",precoTotal: 235.00  },
        { numeroPedido: "32165487", cliente: "Pernalonga", estado: "Finalizado",precoTotal: 430.00  },
        { numeroPedido: "74185296", cliente: "Taz", estado: "Esperando pagamento", precoTotal: 215.00 },
        { numeroPedido: "96325874", cliente: "Marvin, o Marciano", estado: "Pago",precoTotal: 370.00 }
      ];
    res.render("pedidos",{
        Pedidos:Pedidos
    });
  });

  export default router;
