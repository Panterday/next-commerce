import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './HomeContent.module.css'

const HomeContent = ()=>{
    return(
        <div style={{borderTop: '1px solid #49bcbe', marginLeft: '1em', marginRight: '1em'}}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <section>LEFT</section>
                <section>RIGHT</section>
            </div>
        </div>
    )
}

export default HomeContent; 