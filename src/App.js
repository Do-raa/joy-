import './App.css'; 
import ReactPlayer from 'react-player'; 
import img1 from './pictures/female.jpg'; 
import "./style.css";

function App() {
  return (
    <div style={{border:'solid 1px black' , maxWidth:'100vw'}} className="App"> 

    <h1 className="titleRed">DORRA</h1>

   

    <p><img width='350px' border='5px' src="./pic2/dd.png" alt=""/>

    {"\n"}</p>

    <img width='350px' height='370px' border='5px' src={img1} alt="" /> {"\n"}

    <ReactPlayer style={{width:"320" ,  height:"240" }}   url='https://youtu.be/N3AkSS5hXMA' controls={true}/>

    </div>
  );
}

export default App;
