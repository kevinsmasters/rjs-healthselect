import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordions from './components/Accordions'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="well" id="healthSelect">
            <p>The below lists of core rodent pathogens are excluded from ALL Taconic Biosciences health standards:</p>
            <Accordions />
        </div>
    </div>
  );
}

export default App;
