import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo/Logo';
import Coin from './Components/Coin';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <Logo/>
          <Coin/>
        </div>
      </div>
    </div>
  );
}

export default App;
