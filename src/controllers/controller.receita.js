import connection from "../database/connection.js";

const controllerReceita = {
selectReceita(req, res) {
    /*
    connection.query('SELECT * FROM receita', (err, receitas) => {
        if (err) return res.send(err);
        res.send(receitas);
    }
    );
    */
    
    connection.query(`
        SELECT receita.idReceita,
            receita.valor, 
            receita.descricao, 
            categoriaReceita.descricao AS categoria, 
            receita.dataReceita 
        FROM receita 
        JOIN categoriaReceita 
        ON receita.CategoriaReceita_idCategoriaReceita = categoriaReceita.idCategoriaReceita;`, 
    (err, receitas) => {
        if (err) return res.send(err);
            res.send(receitas);
    }
    );
},
    registerReceita(req, res) {
        const { valor, descricao, dataReceita, Usuario_idUsuario,CategoriaReceita_idCategoriaReceita, tipoLancamento_idtipoLancamento } = req.body;
        connection.query(`        
            INSERT INTO receita 
                (valor, descricao, dataReceita, Usuario_idUsuario, CategoriaReceita_idCategoriaReceita, tipoLancamento_idtipoLancamento )
            VALUES (?, ?, ?, ?, ?, ?)`, 
        [valor, descricao, dataReceita, Usuario_idUsuario, CategoriaReceita_idCategoriaReceita, tipoLancamento_idtipoLancamento], (err) => {
            if (err) return res.send(err);
            res.send('Receita inserida com sucesso!');
        }
        );
    },
    updateReceita(req, res) {
        const { valor, descricao, dataReceita, CategoriaReceita_idCategoriaReceita} = req.body;
        const { id } = req.params;
        connection.query(`
        UPDATE receita SET valor = ?, descricao = ?, dataReceita = ?, CategoriaReceita_idCategoriaReceita = ?  
        WHERE idReceita = ?`, [valor, descricao, dataReceita, CategoriaReceita_idCategoriaReceita ,id], (err) => {
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