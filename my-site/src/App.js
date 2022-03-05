import './App.css';
import background from './backgrounds/Vaporwave1.mp4'
import React from 'react';

function App() {

  const [counter, setCounter] = React.useState(15);
  const rickRollLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) window.open(rickRollLink, '_self')?.focus();
  }, [counter]);

  return (
    <div className="App">

      <div className='vignette'>
        <div className='text-box'>
          
          <span className='maintenance-text'>
            this site is under maintenance. come back later.
          </span>
          
          <hr style={{width: 250, marginTop: 20, marginBottom: 20}}/>
          
          <span className='maintenance-text'>
            ce site indisponible. revenez plus tard.
          </span>
          
          <br/><br/>

          <p className='rick-roll'>
            {counter} seconds until Rick Roll
          </p>

        </div>
      </div>

      <video autoPlay loop muted className='background'>
        <source src={background} type='video/mp4'/>
      </video>

    </div>
  );
}

export default App;
