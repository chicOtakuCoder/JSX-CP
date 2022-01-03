// import logo from './logo.svg';
import './App.css';
import image from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border: "solid 1px black", maxWidth: "100vw"}}>
        <h1 className="title red">Yvonne Irenroa</h1>
        <div>
          <img src= {image} alt= "HNY 2022" />
        </div>
        <div>
          <img src="/imageInPublic.png" alt= "HNY 2022 white" />
        </div>
      </div>
        <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
