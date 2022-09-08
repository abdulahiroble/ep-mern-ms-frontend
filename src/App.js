import './App.css';
import {Link} from 'react-router-dom';
function App() {
  return (
    <main className="App">
      <div style={{backgroundColor:'black', height: '50px', width: '50px'}} >
      <Link to='/eventdetails'>click me</Link>
      </div>
    </main>
  );
}

export default App;
