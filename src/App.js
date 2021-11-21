import logo from './logo.svg';
import './App.css';
import Background from './Background/Background';
import 'semantic-ui-css/semantic.min.css'
import { Progress } from 'semantic-ui-react'
import { makeStyles } from '@mui/material';
// import img from '../img/bedroom_background.png'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(${img})`,
//   }
// }));

function App() {
  return (
    <div>
      <Background/>

      {/* <Progress/> */}
    </div>
  );
}

export default App;
