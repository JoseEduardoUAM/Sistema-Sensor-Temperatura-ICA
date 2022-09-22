import express from 'express'
import EspacioNodoDAO from '../DAOModels/EspacioNodoDAO.js'

const router = express.Router();

router.get('/Simulador/217200268744251-computacion2323', async (req, res) => {
    res.render( 'Simulador' )
})

router.get( '/Simulador/datos', async (req, res) => {
    let espacio_nodo = await EspacioNodoDAO.getEspaciosNodos()
    res.json( espacio_nodo )
})

export default router;