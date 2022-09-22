import express from 'express'
import EspacioDAO from '../DAOModels/EspacioDAO.js'
import ProfesorDAO from '../DAOModels/ProfesorDAO.js'
import EdificioDAO from '../DAOModels/EdificioDAO.js'

const router = express.Router();

router.post('/addEspacio', async (req, res) => {
    var { nombreEspacio , numero , descripcion , idProfesor , idEdificio } = req.body
    res.json( await EspacioDAO.addEspacio(  nombreEspacio , numero , descripcion , "" , idProfesor , idEdificio ) )
})

router.post('/getEspacio', async (req, res) => {
    var { nombreEspacio } = req.body
    res.json( await EspacioDAO.getEspacio( nombreEspacio ) )
})

router.post('/getEspacios', async (req, res) => {
    res.json( await EspacioDAO.getEspacios() )
})

router.get('/Espacios', async (req, res) => {
    var edificios = await EdificioDAO.getEdificios()
    var profesores = await ProfesorDAO.getProfesores()
    res.render( 'Espacios.ejs' , { edificios , profesores } )
})

router.get('/Espacio', async (req, res) => {
    const { idEspacio } = req.query
    var espacio = await EspacioDAO.getEspacioId( idEspacio )
    res.render( 'Espacio.ejs' , { espacio : espacio[0] } )
})

export default router;
