import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MyCard from './MyCard';
import styles from './HomeContent.module.css'

import data from '../src/fakeDB.js'

const HomeContent = ()=>{
    return(
        <Box display="flex" flexWrap="wrap">
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap="2em" 
            sx={{marginLeft: {xs: '0', sm: '5em'}, marginRight: {xs: '0', sm: '5em'}}}
            >
                {data.map(articulo => {
                    return <MyCard nombre={articulo.articulo} srcImg={articulo.imagen} precio={articulo.precio} key={articulo.id}/>
                })}
            </Box>
        </Box>
    )
}

export default HomeContent; 