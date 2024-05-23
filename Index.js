import express from 'express';
import connection from './connection.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/selectUser', (req, res) => {
    connection.query('SELECT * FROM usuario', (err, users) => {
        if (err) return res.send(err);
        res.send(users);
    });
}); 

app.post('/registerUser', (req, res) => {
        const { nome, email, senha } = req.body;
        connection.query('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
                if (err) return res.send(err);
                res.send('Usuário inserido com sucesso!');
        });
});

app.put('/updateUser/:id', (req, res) => {
        const { nome, email, senha } = req.body;
        const { id } = req.params;
        connection.query('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE idUsuario = ?', [nome, email, senha, id], (err) => {
                if (err) return res.send(err);
                res.send('Usuário atualizado com sucesso!');
        });
});

app.delete('/deleteUser/:id', (req, res) => {
        const { id } = req.params;
        connection.query('DELETE FROM usuario WHERE idUsuario = ?', [id], (err) => {
                if (err) return res.send(err);
                res.send('Usuário deletado com sucesso!');
        });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});