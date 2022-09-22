import express from 'express'
import EdificioDAO from '../DAOModels/EdificioDAO.js'

const router = express.Router();

router.post('/addEdificio', async (req, res) => {
    var { nombreEdificio } = req.body
    res.json( await EdificioDAO.addEdificio( nombreEdificio ) )
})

router.post('/getEdificio', async (req, res) => {
    var { nombreEdificio } = req.body
    res.json( await EdificioDAO.getEdificio( nombreEdificio ) )
})

router.post('/getEdificios', async (req, res) => {
    res.json( await EdificioDAO.getEdificios() );
})

router.get('/Edificios', async (req, res) => {
    res.render( 'Edificio' )
})

export default router;