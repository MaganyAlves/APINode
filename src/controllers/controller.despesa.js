import connection from "../database/connection.js";
const controllerDespesa = {
    selectDespesa(req, res) {
        /*
        connection.query('SELECT * FROM despesa', (err, despesas) => {
            if (err) return res.send(err);
            res.send(despesas);
        }
        );
        */
        
        connection.query(`
        SELECT despesa.valor, 
            despesa.descricao, 
            categoriaDespesa.descricao AS categoria, 
            despesa.dataDespesa 
        FROM despesa 
        JOIN categoriaDespesa 
        ON despesa.CategoriaDespesa_idCategoriaDespesa = categoriaDespesa.idCategoriaDespesa;`, 
        (err, despesas) => {
            if (err) return res.send(err);
            res.send(despesas);
        }
        );
        
    },
    registerDespesa(req, res) {
        const { valor, descricao, dataDespesa, Usuario_idUsuario, CategoriaDespesa_idCategoriaDespesa, tipoLancamento_idtipoLancamento } = req.body;
        connection.query(`        
            INSERT INTO despesa 
                (valor, descricao, dataDespesa, Usuario_idUsuario, CategoriaDespesa_idCategoriaDespesa, tipoLancamento_idtipoLancamento )
            VALUES (?, ?, ?, ?, ?, ?)`, 
        [valor, descricao, dataDespesa, Usuario_idUsuario, CategoriaDespesa_idCategoriaDespesa, tipoLancamento_idtipoLancamento], (err) => {
            if (err) return res.send(err);
            res.send('Despesa inserida com sucesso!');
        }
        );
    },
    updateDespesa(req, res) {
        const { valor, descricao, dataDespesa, CategoriaDespesa_idCategoriaDespesa} = req.body;
        const { id } = req.params;
        connection.query(`
        UPDATE despesa SET valor = ?, descricao = ?, dataDespesa = ?, CategoriaDespesa_idCategoriaDespesa = ?  
        WHERE idDespesa = ?`, [valor, descricao, dataDespesa, CategoriaDespesa_idCategoriaDespesa ,id], (err) => {
            if (err) return res.send(err);
            res.send('Despesa atualizada com sucesso!');
        }
        );
    },
    deleteDespesa(req, res) {
        const { id } = req.params;
        connection.query('DELETE FROM despesa WHERE idDespesa = ?', [id], (err) => {
            if (err) return res.send(err);
            res.send('Despesa deletada com sucesso!');
        }
        );
    }
};
export default controllerDespesa;