import React from 'react';
import './Style.css';
import Paper from '@mui/material/Paper';
import img1 from '../img/bedroom_background.png'
import { Progress } from 'semantic-ui-react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import reactDom from 'react-dom';


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
                <Paper id='paperStyles'></Paper>

                <div>
                    <Progress id='dataStyles' percent={this.state.dataBar} indicating/>
                    <Box id='questionStyles'> {questionMessage} </Box>
                    <Button onClick={() => {
                                        this.state.dataBar = this.state.dataBar - 10;
                                        // this.render();
                                        alert('CLICKED PHONE' + this.state.dataBar);
                                    }} id='phoneStyles'>Smartphone Alarm</Button>

                    <Button onClick={() => {
                                        this.state.popBar = this.state.popBar - 10;
                                        // this.render();
                                        alert('CLICKED CLOCK: ' + this.state.dataProgress.style.width);
                                    }} id='clockStyles'>Alarm <br/> Clock</Button>

                    <Progress id='popStyles' percent={this.state.popBar} indicating/>         

                    <Box id='introStyles'> {introMessage} </Box>
                    <Button onClick={() => {
                        document.getElementById('introStyles').style.display = 'none';
                        document.getElementById('buttonStyles').style.display = 'none';
                        document.getElementById('dataStyles').style.display = 'block';
                        document.getElementById('popStyles').style.display = 'block';
                    }}
                    id='buttonStyles'>CONTINUE</Button>
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