import express from 'express'
import ProfesorDAO from '../DAOModels/ProfesorDAO.js'

const router = express.Router();

router.post('/addProfesor', async (req, res) => {
    var { idProfesor , nombreProfesor , idDepartamento } = req.body
    res.send( await ProfesorDAO.addProfesor( idProfesor , nombreProfesor, idDepartamento) )
})

router.post('/getProfesor', async (req, res) => {
    var { nombreProfesor } = req.body
    res.send( await ProfesorDAO.getProfesor( nombreProfesor ) )
})

router.post('/getProfesores', async (req, res) => {
    res.send( await ProfesorDAO.getProfesores() );
})

export default router;