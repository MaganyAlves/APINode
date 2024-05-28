import connection from "../database/connection.js";
const controllerReceita = {
  selectReceita(req, res) {
    connection.query("SELECT * FROM receita", (err, receitas) => {
      if (err) return res.send(err);
        res.send(receitas);
    }
    );
    },
    registerReceita(req, res) {
        const { nome, ingredientes, modo_preparo } = req.body;
        connection.query('INSERT INTO receita (nome, ingredientes, modo_preparo) VALUES (?, ?, ?)', [nome, ingredientes, modo_preparo], (err) => {
            if (err) return res.send(err);
            res.send('Receita inserida com sucesso!');
        }
        );
    },
    updateReceita(req, res) {
        const { nome, ingredientes, modo_preparo } = req.body;
        const { id } = req.params;
        connection.query('UPDATE receita SET nome = ?, ingredientes = ?, modo_preparo = ? WHERE idReceita = ?', [nome, ingredientes, modo_preparo, id], (err) => {
            if (err) return res.send(err);
            res.send('Receita atualizada com sucesso!');
        }
        );
    },
    deleteReceita(req, res) {
        const { id } = req.params;
        connection.query('DELETE FROM receita WHERE idReceita = ?', [id], (err) => {
            if (err) return res.send(err);
            res.send('Receita deletada com sucesso!');
        }
        );
    }
};
export default controllerReceita;