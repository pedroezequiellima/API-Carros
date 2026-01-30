const express = require("express")
const mysql = require("mysql2")
const app = express()

const cors = require("cors")
app.use(cors())


//Dados recebidos no formato de JSON
app.use(express.json())

//Conexao com o Banco de dados

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"loja"
})

conexao.connect(err =>{
    if(err){
        console.log("Erro ao conectar com o MYSQL")
    }else{
        console.log("Banco conectado com sucesso!!!")
    }
})


app.get('/inicio',(req,res)=>{
    const SQL = "SELECT * FROM carro ORDER BY marca, modelo"

    conexao.query(SQL, (err, rows)=>{
        if (err) {
            console.log(err)
        } else {
            res.json(rows)
        }
    })
})


app.post('/carros',(req,res)=>{
    //dados vão vim do BODY
    const {marca, modelo, ano, preco} = req.body

    //SQL 
    const SQL = 'INSERT INTO carro(marca,modelo,ano,preco) values (?,?,?,?)'

    //Query
    conexao.query(SQL,[marca,modelo,ano,preco],(err)=>{
        if(err){
            return res.status(500).json({error:err})
        }else{
            res.status(201).json({mesagem: "Carro cadastrado!"})
        }
    })

})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})

