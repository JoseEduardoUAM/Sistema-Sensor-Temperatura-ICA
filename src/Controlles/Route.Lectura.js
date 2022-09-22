import express from 'express'
import LecturaDAO from '../DAOModels/LecturaDAO.js'

const router = express.Router();

router.post('/addLectura', async (req, res) => {
    var { posx  , posy , temp , ica , fecha , idNodo } = req.body
    res.send( await LecturaDAO.addLectura( posx , posy , temp , ica , fecha , idNodo ) )
})

router.post('/getLectura', async (req, res) => {
    var { idLectura } = req.body
    res.send( await LecturaDAO.getLectura( idLectura ) )
})

router.post('/getLecturas', async (req, res) => {
    res.send( await LecturaDAO.getLecturas() );
})

export default router;