const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 8000;

// Mudar para o diretório do script
process.chdir(__dirname);

const db = new sqlite3.Database('sinal');

// Código para criar a tabela no banco de dados SQLite
db.serialize(function () {
  db.run('CREATE TABLE IF NOT EXISTS music (nome TEXT, autor TEXT)');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const query = 'SELECT nome, autor FROM music';
  db.all(query, (err, rows) => {
    if (err) {
      console.error('Erro ao buscar dados do banco de dados:', err);
      res.status(500).send('Erro ao processar a solicitação');
    } else {
      console.log('Dados do banco de dados:', rows);
      res.render('index', { data: rows });
    }
  });
});

app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  const autor = req.body.autor;

  const query = 'INSERT INTO music (nome, autor) VALUES (?, ?)';
  db.run(query, [nome, autor], function (err) {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao processar a solicitação');
    } else {
      console.log('Dados inseridos com sucesso!');
      res.redirect('/para.html');
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});
