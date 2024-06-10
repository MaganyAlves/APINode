import connection from "../database/connection.js";

const controllerLancados = {
    selectLancados(req, res) {
        connection.query(`
            SELECT receita.tipoLancamento_idtipoLancamento AS tipo,
                receita.idReceita,
                receita.valor, 
                receita.descricao, 
                categoriaReceita.descricao AS categoria, 
                receita.dataReceita FROM receita
            JOIN tipoLancamento
            ON receita.tipoLancamento_idtipoLancamento = tipoLancamento.idtipoLancamento    
            JOIN categoriaReceita
            ON receita.CategoriaReceita_idCategoriaReceita = categoriaReceita.idCategoriaReceita
            UNION ALL
            SELECT despesa.tipoLancamento_idtipoLancamento AS tipo,
                despesa.idDespesa,
                despesa.valor, 
                despesa.descricao, 
                categoriaDespesa.descricao AS categoria, 
                despesa.dataDespesa FROM despesa
            JOIN categoriaDespesa
            ON despesa.CategoriaDespesa_idCategoriaDespesa = categoriaDespesa.idCategoriaDespesa;`,

            (err, lancados) => {
                if (err) return res.send(err);
                res.send(lancados);
            }
        );
    }
};

export default controllerLancados;
