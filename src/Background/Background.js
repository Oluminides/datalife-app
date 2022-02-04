import React from 'react';
import './Style.css';
import Paper from '@mui/material/Paper';
import soundtrack1 from '../audio/community_western.mp3'
import soundtrack2 from '../audio/ecstasy_of_gold.mp3'
import { Progress } from 'semantic-ui-react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import {Howl, Howler} from "howler";
import reactDomServer from 'react-dom/server';


const sound = new Howl({
    src: [soundtrack2],
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
});

 class Background extends React.Component {
    state = {
        dataPercent: 100,
        popPercent: 100,
        choiceMade: false,
        gamePage: 1,
        disableButton: false,
        soundOn: true,
    }

    dataDecrement = () => {

        this.setState((prevState) => ({
            dataPercent: prevState.dataPercent >= 0 ? prevState.dataPercent - 10 : 0,
            popPercent: prevState.popPercent >= 0 ? prevState.popPercent - 5 : 0,
            choiceMade: true
        }));

        document.getElementById('firstStyles').style.display = 'none';
        document.getElementById('secondStyles').style.display = 'none';
        document.getElementById('questionStyles').style.display = 'none';
        document.getElementById('choiceStyles').style.display = 'block';
        document.getElementById('choiceCardStyles').innerHTML = document.getElementById('firstStyles').innerHTML;
        document.getElementById('choiceCardStyles').style.display = 'flex';
        document.getElementById('nextButtonStyles').style.display = 'block';

        this.labelColor('dataLabelStyles', (this.state.dataPercent >= 0 ? this.state.dataPercent - 10 : 0));
        this.labelColor('popLabelStyles', (this.state.popPercent >= 0 ? this.state.popPercent - 5 : 0));
    }

    popDecrement = () => {
        this.setState((prevState) => ({
            popPercent: prevState.popPercent >= 0 ? prevState.popPercent - 10 : 0,
            dataPercent: prevState.dataPercent >= 0 ? prevState.dataPercent - 5 : 0,
            choiceMade: true
        }));
        
        document.getElementById('firstStyles').style.display = 'none';
        document.getElementById('secondStyles').style.display = 'none';
        document.getElementById('questionStyles').style.display = 'none';
        document.getElementById('choiceStyles').style.display = 'block';
        document.getElementById('choiceCardStyles').innerHTML = document.getElementById('secondStyles').innerHTML;
        document.getElementById('choiceCardStyles').style.display = 'flex';
        document.getElementById('nextButtonStyles').style.display = 'block';

        this.labelColor('popLabelStyles', (this.state.popPercent >= 0 ? this.state.popPercent - 10 : 0));
        this.labelColor('dataLabelStyles', (this.state.dataPercent >= 0 ? this.state.dataPercent - 5 : 0));
    }

    labelColor(label, percent)
    {
        if(percent >= 90)
        {
            document.getElementById(label).style.backgroundColor = '#66da81';
        }
        else if(percent >= 70 && percent < 89)
        {
            document.getElementById(label).style.backgroundColor = '#b4d95c';
        }
        else if(percent >= 60 && percent < 69)
        {
            document.getElementById(label).style.backgroundColor = '#ddc928';
        }
        else if(percent >= 40 && percent < 59)
        {
            document.getElementById(label).style.backgroundColor = '#e6bb48';
        }
        else if(percent >= 30 && percent < 39)
        {
            document.getElementById(label).style.backgroundColor = '#efbc72';
        }
        else if(percent < 30)
        {
            document.getElementById(label).style.backgroundColor = '#d95c5c';
        }
    }

    // At the start of the game
    clickContinue()
    {
        document.getElementById('introStyles').innerHTML = "It’s an average day… <br/> What choices will you make? <br/> You can use digital technology and trade your data to save time and money. Or, you can guard your data and maintain privacy, but it may come at the cost of convenience and social connections. You get to decide…<br/>And we’ll show you the impact of your choices.";
        document.getElementById('introStyles').style.backgroundColor = "white";
        document.getElementById('introStyles').style.color = "#536872";
        document.getElementById('startButtonStyles').style.display = 'block';
        document.getElementById('backButtonStyles').style.display = 'block';
    }

    clickStart()
    {
        sound.play();

        document.getElementById('introStyles').style.display = 'none';
        document.getElementById('startButtonStyles').style.display = 'none';
        document.getElementById('continueButtonStyles').style.display = 'none';
        document.getElementById('backButtonStyles').style.display = 'none';

        document.getElementById('dataStyles').style.display = 'block';
        document.getElementById('dataLabelStyles').style.display = 'block';
        document.getElementById('popStyles').style.display = 'block';
        document.getElementById('popLabelStyles').style.display = 'block';
        document.getElementById('firstStyles').style.display = 'block';
        document.getElementById('secondStyles').style.display = 'block';
        document.getElementById('infoButtonStyles').style.display = 'flex';
        document.getElementById('paperStyles').style.filter = 'blur(0px)';
        document.getElementById('volumeButtonStyles').style.display = 'block';        
    }

    clickBack()
    {
        document.getElementById('introStyles').innerHTML = "The real cost of living in the 21st century cannot be measured in money alone. Data has been called “the new oil”. It’s a valuable asset. The entire online economic eco-system is powered by data. Yet throughout each day we give our data away. Most online games want to collect your data. We want you to think about the ways in which you give it away";
        document.getElementById('introStyles').style.backgroundColor = "#536872";
        document.getElementById('introStyles').style.color = "white";
        document.getElementById('startButtonStyles').style.display = 'none';
        document.getElementById('backButtonStyles').style.display = 'none';
    }

    clickInfo = () =>
    {
        document.getElementById('infoButtonStyles').style.display = 'none';

        document.getElementById('infoCardStyles').style.display = 'block';
        document.getElementById('infoCloseStyles').style.display = 'flex';

        this.setState(() => ({
            disableButton: true
        }));

        if(!(this.state.choiceMade))
        {
            document.getElementById('dataStyles').style.filter = 'blur(6px)';
            document.getElementById('dataLabelStyles').style.filter = 'blur(6px)';
            document.getElementById('popStyles').style.filter = 'blur(6px)';
            document.getElementById('popLabelStyles').style.filter = 'blur(6px)';
            document.getElementById('firstStyles').style.filter = 'blur(6px)';
            document.getElementById('secondStyles').style.filter = 'blur(6px)';
            document.getElementById('paperStyles').style.filter = 'blur(6px)';
        }
        else{
            document.getElementById('choiceStyles').style.filter = 'blur(6px)';
            document.getElementById('choiceCardStyles').style.filter = 'blur(6px)';
            document.getElementById('nextButtonStyles').style.filter = 'blur(6px)';
            document.getElementById('dataStyles').style.filter = 'blur(6px)';
            document.getElementById('dataLabelStyles').style.filter = 'blur(6px)';
            document.getElementById('popStyles').style.filter = 'blur(6px)';
            document.getElementById('popLabelStyles').style.filter = 'blur(6px)';
            document.getElementById('paperStyles').style.filter = 'blur(6px)';
            
        }

        
    }

    clickInfoClose = () =>
    {
        document.getElementById('infoButtonStyles').style.display = 'flex';
        document.getElementById('infoCardStyles').style.display = 'none';
        document.getElementById('infoCloseStyles').style.display = 'none';

        this.setState(() => ({
            disableButton: false
        }));

        if(!(this.state.choiceMade))
        {
            document.getElementById('dataStyles').style.filter = 'blur(0px)';
            document.getElementById('dataLabelStyles').style.filter = 'blur(0px)';
            document.getElementById('popStyles').style.filter = 'blur(0px)';
            document.getElementById('popLabelStyles').style.filter = 'blur(0px)';
            document.getElementById('firstStyles').style.filter = 'blur(0px)';
            document.getElementById('secondStyles').style.filter = 'blur(0px)';
            document.getElementById('paperStyles').style.filter = 'blur(0px)';
        }
        else{
            document.getElementById('choiceStyles').style.filter = 'blur(0px)';
            document.getElementById('choiceCardStyles').style.filter = 'blur(0px)';
            document.getElementById('nextButtonStyles').style.filter = 'blur(0px)';
            document.getElementById('dataStyles').style.filter = 'blur(0px)';
            document.getElementById('dataLabelStyles').style.filter = 'blur(0px)';
            document.getElementById('popStyles').style.filter = 'blur(0px)';
            document.getElementById('popLabelStyles').style.filter = 'blur(0px)';
            document.getElementById('paperStyles').style.filter = 'blur(0px)';
        }

       
    }

    clickNext = () =>
    {

        document.getElementById('choiceStyles').style.display = 'none';
        document.getElementById('choiceCardStyles').style.display = 'none';
        document.getElementById('nextButtonStyles').style.display = 'none';

        this.setState((prevState) => ({
            gamePage: prevState.gamePage + 1,
            choiceMade: false
        }));

        document.getElementById('firstStyles').innerHTML = this.firstChoices[this.state.gamePage];
        document.getElementById('secondStyles').innerHTML = this.secondChoices[this.state.gamePage];
        document.getElementById('questionStyles').innerHTML = this.questions[this.state.gamePage];        
        document.getElementById('firstStyles').style.display = 'block';
        document.getElementById('secondStyles').style.display = 'block';
        document.getElementById('questionStyles').style.display = 'block';

        document.getElementById('paperStyles').style.backgroundImage = "url(" + this.backgrounds[this.state.gamePage - 1] + ")";

        // alert(this.state.choiceMade);

    }

    clickVolume = () =>
    {
        this.setState((prevState) => ({
            soundOn: !prevState.soundOn
        }));
        
        
        if(!this.state.soundOn === true)
        {
            sound.play();

            document.getElementById('volumeButtonStyles').style.backgroundColor = '#536872';
            document.getElementById('volumeButtonStyles').style.color = 'white';
            document.getElementById('volumeButtonStyles').style.borderColor = 'white';

            document.getElementById("volumeButtonStyles").innerHTML = reactDomServer.renderToString(<VolumeUpIcon fontSize="inherit" />);

            Howler.volume(1.0);
        }
        else{
            sound.stop();

            document.getElementById('volumeButtonStyles').style.backgroundColor = 'white';
            document.getElementById('volumeButtonStyles').style.color = '#536872';
            document.getElementById('volumeButtonStyles').style.borderColor = '#536872';
            
            document.getElementById("volumeButtonStyles").innerHTML = reactDomServer.renderToString(<VolumeOffIcon fontSize="inherit" />);

            // Howler.volume(0.0);
        }

        
    }
        
    questions = ["How do you wake up???", "Where is your To-Do List???", "How do you exercise???", "How do you commute???", "How do you pay for coffee???"];
    firstChoices = ["Smartphone Alarm", "Notes App", "Online Instructor", "GPS Navigation", "Loyalty Points Card & App"];
    secondChoices = ["Alarm Clock", "Wall Calendar", "Outdoor Jogging", "w/o GPS Nav", "With Cash"];
    backgrounds = [require('../img/EAAI_driving_background.jpeg').default, require('../img/bedroom_background.png').default, require('../img/EAAI_driving_background.jpeg').default, require('../img/bedroom_background.png').default, require('../img/EAAI_driving_background.jpeg').default];
        
    render()
    {
        // sound.play();
        const introMessage = "The real cost of living in the 21st century cannot be measured in money alone. Data has been called “the new oil”. It’s a valuable asset. The entire online economic eco-system is powered by data. Yet throughout each day we give our data away. Most online games want to collect your data. We want you to think about the ways in which you give it away.";
        const choiceMessage = "You chose";

        return(

            <div>
                <Paper id='paperStyles'></Paper>

                <div>
                    <Progress size='large' id='dataStyles' percent={this.state.dataPercent} indicating></Progress>
                    <Box id='dataLabelStyles'>DATA</Box>

                    <Box id='questionStyles'> {this.questions[this.state.gamePage - 1]} </Box>

                    <Button disabled={this.state.disableButton} onClick={this.dataDecrement} id='firstStyles'>{this.firstChoices[this.state.gamePage - 1]}</Button>
                    <Button disabled={this.state.disableButton} onClick={this.popDecrement} id='secondStyles'>{this.secondChoices[this.state.gamePage - 1]}</Button>

                    <Box id='choiceStyles'> {choiceMessage} </Box>   
                    <Box id='choiceCardStyles'></Box>   

                    <Box id='introStyles'> {introMessage} </Box>
                
                    <Button onClick={this.clickContinue}
                    id='continueButtonStyles'>CONTINUE</Button>

                    <Button onClick={this.clickStart}
                    id='startButtonStyles'>START</Button>

                    <IconButton onClick={this.clickBack}
                    id='backButtonStyles' size="large">
                        <ArrowBackIosNewIcon fontSize="inherit" />
                    </IconButton>

                    <Tooltip title="What's Happening?">
                        <IconButton
                            onClick={this.clickInfo}
                            id='infoButtonStyles' size="large">
                            <InfoIcon fontSize="inherit"/>
                        </IconButton>
                    </Tooltip>

                    <Box id='infoCardStyles'></Box>

                    <IconButton 
                        onClick={this.clickInfoClose}
                        id='infoCloseStyles' size="large">
                        <CloseIcon fontSize="inherit" />
                    </IconButton>

                    <IconButton 
                        onClick={this.clickVolume}
                        id='volumeButtonStyles' size="large">
                        <VolumeUpIcon fontSize="inherit" />
                    </IconButton>
                    
                    <Button 
                        onClick={this.clickNext}
                        id='nextButtonStyles' disabled={this.state.disableButton}>NEXT</Button>

                    <Box id='popLabelStyles'>POPULARITY</Box>
                    <Progress size='large' id='popStyles' percent={this.state.popPercent} indicating></Progress> 
                </div>
            </div>
        );
    }
    
}

export default Background;