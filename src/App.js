import Navbar from './components/Navbar';
import Questionaryapi from './components/Questionaryapi';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(100)

  return (
    <div >
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
     <Navbar title='NioClass'/>
     <br/>
     <Questionaryapi/>
     
    </div>
  );
}

export default App;
