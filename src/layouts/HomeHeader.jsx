import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import {CssBaseline} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()

    const Home = () => navigate("/") 
   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: 'block' }}
                    >
                        <Link to="/" style={{color: '#fff'}}>냥가왈부</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'flex' } }}>
                        <HomeIcon  onClick={Home}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}