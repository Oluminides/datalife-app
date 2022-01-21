import React from 'react';
import './Style.css';
import Paper from '@mui/material/Paper';
import img1 from '../img/bedroom_background.png'
import { Progress } from 'semantic-ui-react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoIcon from '@mui/icons-material/Info';
// import reactDom from 'react-dom';


 class Background extends React.Component {

    state = {
        dataPercent: 100,
        popPercent: 100,

        // phoneImage:  "",
        // clockImage:  "../img/clock.svg",
    }

    updateChoice()
    {

    }

    dataDecrement = () => {
        this.setState((prevState) => ({
            dataPercent: prevState.dataPercent >= 0 ? prevState.dataPercent - 10 : 0,
            popPercent: prevState.popPercent >= 0 ? prevState.popPercent - 5 : 0,
        }));

        document.getElementById('phoneStyles').style.display = 'none';
        document.getElementById('clockStyles').style.display = 'none';
        document.getElementById('questionStyles').style.display = 'none';
        document.getElementById('choiceStyles').style.display = 'block';
        document.getElementById('choiceCardStyles').style.display = 'block';
        document.getElementById('choiceCardStyles').innerHTML = document.getElementById('phoneStyles').innerHTML;
        document.getElementById('nextButtonStyles').style.display = 'block';
    }

    popDecrement = () => {
        this.setState((prevState) => ({
            popPercent: prevState.popPercent >= 0 ? prevState.popPercent - 10 : 0,
            dataPercent: prevState.dataPercent >= 0 ? prevState.dataPercent - 5 : 0
        }));
        
        document.getElementById('phoneStyles').style.display = 'none';
        document.getElementById('clockStyles').style.display = 'none';
        document.getElementById('questionStyles').style.display = 'none';
        document.getElementById('choiceStyles').style.display = 'block';
        document.getElementById('choiceCardStyles').style.display = 'block';
        document.getElementById('choiceCardStyles').innerHTML = document.getElementById('clockStyles').innerHTML;
        document.getElementById('nextButtonStyles').style.display = 'block';
    }
    clickContinue()
    {
        document.getElementById('phoneStyles').style.display = 'none';
    }

    clickPhone()
    {
        this.dataDecrement();
        // this.changeHTML();
    }
        

    render()
    {

        const introMessage = "The real cost of living in the 21st century cannot be measured in money alone. Data has been called “the new oil”. It’s a valuable asset. The entire online economic eco-system is powered by data. Yet throughout each day we give our data away. Most online games want to collect your data. We want you to think about the ways in which you give it away.";
        
        const nextMessage = "It’s an average day… <br/> What choices will you make? <br/> You can use digital technology and trade your data to save time and money. Or, you can guard your data and maintain privacy, but it may come at the cost of convenience and social connections. You get to decide…<br/>And we’ll show you the impact of your choices.";
        const questionMessage = "How do you wake up???";
        
        const choiceMessage = "You chose";

        return(

            <div>
                <Paper id='paperStyles'></Paper>

                <div>
                    <Progress size='large' id='dataStyles' percent={this.state.dataPercent} indicating/>
                    <Box id='questionStyles'> {questionMessage} </Box>
                    <Button onClick={this.dataDecrement} id='phoneStyles'>Smartphone Alarm</Button>

                    <Button onClick={this.popDecrement} id='clockStyles'>Alarm <br/> Clock</Button>

                    <Box id='choiceStyles'> {choiceMessage} </Box>   

                    <Box id='choiceCardStyles'></Box>   

                    <Box id='introStyles'> {introMessage} </Box>
                    <Button onClick={() => {
                        document.getElementById('introStyles').innerHTML = nextMessage;
                        document.getElementById('introStyles').style.backgroundColor = "white";
                        document.getElementById('introStyles').style.color = "#536872";
                        document.getElementById('startButtonStyles').style.display = 'block';
                        document.getElementById('backButtonStyles').style.display = 'block';
                    }}
                    id='continueButtonStyles'>CONTINUE</Button>

                    <Button onClick={() => {
                        document.getElementById('introStyles').style.display = 'none';
                        document.getElementById('startButtonStyles').style.display = 'none';
                        document.getElementById('dataStyles').style.display = 'block';
                        document.getElementById('popStyles').style.display = 'block';
                        document.getElementById('phoneStyles').style.display = 'block';
                        document.getElementById('clockStyles').style.display = 'block';
                        document.getElementById('infoButtonStyles').style.display = 'flex';
                        document.getElementById('paperStyles').style.filter = 'blur(0px)';
                        document.getElementById('continueButtonStyles').style.display = 'none';
                        document.getElementById('backButtonStyles').style.display = 'none';
                    }}
                    id='startButtonStyles'>START</Button>

                    <IconButton onClick={() => {
                        document.getElementById('introStyles').innerHTML = introMessage;
                        document.getElementById('introStyles').style.backgroundColor = "#536872";
                        document.getElementById('introStyles').style.color = "white";
                        document.getElementById('startButtonStyles').style.display = 'none';
                        document.getElementById('backButtonStyles').style.display = 'none';
                    }}
                    id='backButtonStyles' size="large">
                        <ArrowBackIosNewIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton
                        // onClick={handleClick({
                        // vertical: 'top',
                        // horizontal: 'center',
                        // })}
                    id='infoButtonStyles' size="large">
                        <InfoIcon fontSize="inherit"/>
                    </IconButton>

                    <Button onClick={() => {
                        // document.getElementById('introStyles').innerHTML = nextMessage;
                        // document.getElementById('introStyles').style.backgroundColor = "white";
                        // document.getElementById('introStyles').style.color = "#536872";
                        // document.getElementById('startButtonStyles').style.display = 'block';
                        // document.getElementById('backButtonStyles').style.display = 'block';
                    }}
                    id='nextButtonStyles'>NEXT</Button>

                    <Progress size='large' id='popStyles' percent={this.state.popPercent} indicating/> 
                </div>
            </div>
        );
    }
    
}

export default Background;