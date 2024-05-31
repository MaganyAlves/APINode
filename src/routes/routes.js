import express from 'express';
import controllerUser from '../controllers/controllerUser.js';
import controllerReceita from '../controllers/controller.receita.js';
import controllerDespesa from '../controllers/controller.despesa.js';

const routes = express.Router();
const { selectUser, registerUser, updateUser, deleteUser } = controllerUser;
const { selectReceita, registerReceita, updateReceita, deleteReceita } = controllerReceita;
const { selectDespesa, registerDespesa, updateDespesa, deleteDespesa } = controllerDespesa;

routes.get('/selectUser', selectUser);
routes.post('/registerUser', registerUser);
routes.put('/updateUser/:id', updateUser);
routes.delete('/deleteUser/:id', deleteUser);

routes.get('/selectReceita', selectReceita);
routes.post('/registerReceita', registerReceita);
routes.put('/updateReceita/:id', updateReceita);
routes.delete('/deleteReceita/:id', deleteReceita);

routes.get('/selectDespesa', selectDespesa);
routes.post('/registerDespesa', registerDespesa);
routes.put('/updateDespesa/:id', updateDespesa);
routes.delete('/deleteDespesa/:id', deleteDespesa);

// Export the router
export default routes;