import express from 'express'
import DepartamentoDAO from '../DAOModels/DepartamentoDAO.js'

const router = express.Router();

router.post('/getDepartamento', async (req, res) => {
    var { nombreDepartamento } = req.body
    res.json( await DepartamentoDAO.getDepartamento( nombreDepartamento ) )
})

router.post('/getDepartamentos', async (req, res) => {
    res.json( await DepartamentoDAO.getDepartamentos() )
})

router.post('/addDepartamento', async (req, res) => {
    var { nombreDepartamento } = req.body
    res.json( await DepartamentoDAO.addDepartamento( nombreDepartamento ) )
})

router.get('/Departamentos', async (req, res) => {
    res.render( 'Departamento' )
})

export default router;