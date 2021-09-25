import { IconButton, Box, Button,  AppBar, Toolbar, Typography, Search, SearchIconWrapper,
    Container, Link, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navigation.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeProvider} from '@mui/material'
import theme from '../utils/globalThemeMUI';


const Navigation = ()=>{
    return(
            <ThemeProvider theme={theme}>
                <div className={styles.navBar}>
                    <Typography variant="h5" sx={{marginLeft: '5vw', 
                        fontSize: {sm: '2em', xs: '1.3em'}}}>
                        MagicHouse<span style={{color: '#49bcbe'}}>Store</span>
                    </Typography>
                    <Toolbar sx={{display: 'flex'}}>
                        <Box sx={{display: 'flex', gap: '1.5vw', marginRight: '1em'}}>
                            <Link
                                component="button"
                                variant="body2"
                                underline="hover"
                                sx={{color: 'black', "&:hover": {color: '#49bcbe'}, display: {sm: 'initial', xs : 'none'}}}
                                >
                                <Typography sx={{fontWeight: 'bold'}}>Inicio</Typography>
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                underline="hover"
                                sx={{color: 'black', "&:hover": {color: '#49bcbe'}, display: {sm: 'initial', xs : 'none'}}}
                                >
                                <Typography sx={{fontWeight: 'bold'}}>Categorías</Typography>
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                underline="hover"
                                sx={{color: 'black', "&:hover": {color: '#49bcbe'}, display: {sm: 'initial', xs : 'none'}}}
                                >
                                <Typography sx={{fontWeight: 'bold'}}>Productos</Typography>
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                underline="hover"
                                sx={{color: 'black', "&:hover": {color: '#49bcbe'}, display: {sm: 'initial', xs : 'none'}}}
                                >
                                <Typography sx={{fontWeight: 'bold'}}>Nosotros</Typography>
                            </Link>
                        </Box>
                        <IconButton sx={{marginRight: {xs: '0'}}}>
                            <Badge badgeContent={1} color='primary'>
                                <ShoppingCartIcon sx={{fontSize: '1em'}}/>
                            </Badge>
                        </IconButton>
                        <IconButton sx={{display: {xs:'flex', sm: 'none'}}}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </div>
            </ThemeProvider>
    )
}

export default Navigation; 