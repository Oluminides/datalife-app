import React from 'react';
// import './Background.css';
import Paper from '@mui/material/Paper';
import img1 from '../img/bedroom_background.png'
import { Progress } from 'semantic-ui-react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import reactDom from 'react-dom';
// import InfoIcon from '@mui/icons-material/Info';

const introStyles = {
    position: 'absolute',
    top: '10%',
    left: '12.5%',
    width: '75%',
    height: '75%',
    border: '1px solid white',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    backgroundColor: '#536872',
    fontFamily: 'Baskerville',
    fontSize: '35px',
    fontWeight: 'bold',
    typography: 'subtitle2',
    textAlign: 'center',
    letterSpacing: '6px',
    lineHeight: '2'
}

const buttonStyles = {
    position: 'absolute',
    height: '10%',
    width: '15%',
    top: '90%',
    left: '85%',
    color: '#536872',
    border: '2px solid white',
    borderRadius: '10px',
    backgroundColor: 'white',
    fontFamily: 'Baskerville',
    fontSize: '25px',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: 'white',
        opacity: [0.9, 0.8, 0.7],
    },
}

const phoneStyles = {
    width: '25%',
    height: '30%',
    top: '35%',
    left: '12.5%',
    border: '1px solid white',
    position: 'fixed',
    borderRadius: '10px',
    backgroundColor: '#536872',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Baskerville',
    fontSize: '35px',
    fontWeight: 'bold',
    typography: 'subtitle2',
    letterSpacing: '6px',
    lineHeight: '1.5'
}

const clockStyles = {
    width: '25%',
    height: '30%',
    top: '35%',
    left: '62.5%',
    border: '1px solid white',
    position: 'fixed',
    borderRadius: '10px',
    backgroundColor: '#536872',
    color: 'white',
    fontFamily: 'Baskerville',
    fontSize: '35px',
    fontWeight: 'bold',
    typography: 'subtitle2',
    textAlign: 'center',
    letterSpacing: '6px',
    lineHeight: '1.5'
}

const paperStyles = {
    minHeight: '100vh', //window.innerHeight,
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: 'cover',
    filter: 'blur(6px)',
}

const dataStyles = {
    width: '33%',
    // height: '5%',
    top: '0.5%',
    left: '0%',
    position: 'fixed'
    // display: 'block'
}

const popStyles = {
    width: '33%',
    // height: '5%',
    top: '0.5%',
    left: '67%',
    transform: 'rotate(180deg)',
    position: 'fixed'
}

const questionStyles = {
    width: '50%',
    top: '10%',
    left: '25%',
    height: '8%',
    position: 'absolute',
    borderRadius: '10px',
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#536872',
    fontFamily: 'Baskerville',
    fontSize: '35px',
    fontWeight: 'bold',
    typography: 'subtitle2',
    letterSpacing: '6px',
    lineHeight: '1.5',
    flexDirection: 'column'
}


 class Background extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataBar: 100,
            popBar: 100,
            children: [],
        }

    }




    render()
    {
        // const children = [];
        
        
        // alert(this.state.dataBar);

        // const inputEl = useRef(null);

        console.log(this.state.dataBar);

        // const dataProgress = <Progress style={dataStyles} percent={this.state.dataBar} indicating/>;

        
        

        // const popProgress = <Progress style={popStyles} percent={this.state.popBar} indicating/>;

        const introMessage = "The real cost of living in the 21st century cannot be measured in money alone. Data has been called “the new oil”. It’s a valuable asset. The entire online economic eco-system is powered by data. Yet throughout each day we give our data away. Most online games want to collect your data. We want you to think about the ways in which you give it away.";

        const questionMessage = "How do you wake up???";
        
        // const intro = <Box style={introStyles}> {introMessage} </Box>; 
        // const continueButton = <Button style={buttonStyles}>CONTINUE</Button>;

       
         
        // const phoneChoice = <Button onClick={() => {
        //                                 this.state.dataBar = this.state.dataBar - 10;
        //                                 // this.render();
        //                                 // alert('CLICKED PHONE' + this.state.dataBar);
        //                             }} style={phoneStyles}>Smartphone Alarm</Button>;

        // const clockChoice =  <Button onClick={() => {
        //         this.state.popBar = this.state.popBar - 10;
        //         this.render();
        //         // alert('CLICKED CLOCK: ' + this.state.dataProgress.style.width);
        //     }} style={clockStyles}>Alarm <br/> Clock</Button>;                      

        // const question = <Box style={questionStyles}> {questionMessage} </Box>;


        
        
        // this.state.children.push(dataProgress);
        // this.state.children.push(question);
        // this.state.children.push(phoneChoice);
        // this.state.children.push(clockChoice);
        // this.state.children.push(popProgress);

        // paperStyles.filter = 'blur(0px)';
        // ======================================================== //
        // this.state.children.push(intro);
        // this.state.children.push(continueButton);

        

        // for (var i = 0; i < this.state.numChildren; i += 1) {
        //   children.push(<ChildComponent key={i} number={i} />);
        // };

        return(

            <div>
                <Paper style={paperStyles}></Paper>

                <div>
                    <Progress style={dataStyles} percent={this.state.dataBar} indicating/>
                    <Box style={questionStyles}> {questionMessage} </Box>
                    <Button onClick={() => {
                                        this.state.dataBar = this.state.dataBar - 10;
                                        // this.render();
                                        alert('CLICKED PHONE' + this.state.dataBar);
                                    }} style={phoneStyles}>Smartphone Alarm</Button>

                    <Button onClick={() => {
                                        this.state.popBar = this.state.popBar - 10;
                                        // this.render();
                                        alert('CLICKED CLOCK: ' + this.state.dataProgress.style.width);
                                    }} style={clockStyles}>Alarm <br/> Clock</Button>

                    <Progress style={popStyles} percent={this.state.popBar} indicating/>         
                </div>

                {/* <Paper style={paperStyles}> */}

                    
                
                    {/* <Progress style={dataStyles} percent={100} indicating/>


                    <Box style={phoneStyles}>
                        Use your smartphone alarm
                        <Button style={buttonStyles}>PHONE</Button>
                    </Box>

                    <Box style={clockStyles}>
                        Use your old-school alarm clock
                        <Button style={buttonStyles}>CLOCK</Button>
                    </Box> 

                    <Progress style={popStyles} percent={100} indicating/>  */}

                {/* </Paper> */}
            </div>
        );
    }
    
}

export default Background;