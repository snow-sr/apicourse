import express from "express";  // Importando o express
const app = express(); 
const port = 8087;

var sabores = [
    "4 queijos", 
    "Frango Catupiry",
    "BROCOLIS <3",
    "Lombo com cheddar"
]

app.get("/", (req, res) => {
    res.send("Bem vindo à fábrica de pizzas")
})

app.post("/adicionarSabor", (req, res) => {
    console.log(req)
    let novoSabor = req.sabor;
    sabores.push(novoSabor);
    res.send("Sabor adicionado " + novoSabor)
})
 
app.get("/sabores", (req, res) => {
    res.send(sabores)
})



app.listen(port, () => {
    console.log("O servidor está aberto na porta " + port)
})
