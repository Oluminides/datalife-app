import React from 'react';
// import styles from './Background.module.css'
import Paper from '@mui/material/Paper';
import img from '../img/bedroom_background.png'
import { Progress } from 'semantic-ui-react'

const paperStyles = {
    minHeight: '100vh', //window.innerHeight,
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: 'cover'
};

const dataStyles = {
    width: '33%',
    top: '0.5%',
    left: '0%',
    position: 'fixed'
};

const popStyles = {
    width: '33%',
    top: '0.5%',
    left: '67%',
    transform: 'rotate(180deg)',
    position: 'fixed'
};

export default class Background extends React.Component {
    render(){
        return(
            <Paper style={paperStyles}>
                {/* Some text to fill the Paper Component */}
				<Progress style={dataStyles} percent={100} indicating/>
				<Progress style={popStyles} percent={50} indicating/>
            </Paper>
        )
    }
}
