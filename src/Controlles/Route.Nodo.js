import express from 'express'
import NodoDAO from '../DAOModels/NodoDAO.js'

const router = express.Router();

router.post('/addNodo', async (req, res) => {
    var { rango } = req.body
    res.send( await NodoDAO.addNodo( rango ) )
})

router.post('/getNodo', async (req, res) => {
    var { idNodo } = req.body
    res.send( await NodoDAO.getNodo( idNodo ) )
})

router.post('/getNodos', async (req, res) => {
    res.send( await NodoDAO.getNodos() );
})

export default router;