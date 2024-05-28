import express from 'express';
import controllerUser from '../controllers/controllerUser.js';
import controllerReceita from '../controllers/controller.receita.js';

const routes = express.Router();
const { selectUser, registerUser, updateUser, deleteUser } = controllerUser;
const { selectReceita, registerReceita, updateReceita, deleteReceita } = controllerReceita;

routes.get('/selectUser', selectUser);
routes.post('/registerUser', registerUser);
routes.put('/updateUser/:id', updateUser);
routes.delete('/deleteUser/:id', deleteUser);

routes.get('/selectReceita', selectReceita);
routes.post('/registerReceita', registerReceita);
routes.put('/updateReceita/:id', updateReceita);
routes.delete('/deleteReceita/:id', deleteReceita);


// Define your routes here
/*
routes.get('/selectUser', (req, res) => {
    connection.query('SELECT * FROM usuario', (err, users) => {
        if (err) return res.send(err);
        res.send(users);
    });
}); 

routes.post('/registerUser', (req, res) => {
        const { nome, email, senha } = req.body;
        connection.query('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
                if (err) return res.send(err);
                res.send('Usuário inserido com sucesso!');
        });
});

routes.put('/updateUser/:id', (req, res) => {
        const { nome, email, senha } = req.body;
        const { id } = req.params;
        connection.query('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE idUsuario = ?', [nome, email, senha, id], (err) => {
                if (err) return res.send(err);
                res.send('Usuário atualizado com sucesso!');
        });
});

routes.delete('/deleteUser/:id', (req, res) => {
        const { id } = req.params;
        connection.query('DELETE FROM usuario WHERE idUsuario = ?', [id], (err) => {
                if (err) return res.send(err);
                res.send('Usuário deletado com sucesso!');
        });
});
*/
// Export the router
export default routes;