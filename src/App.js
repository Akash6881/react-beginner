import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Greet name="dasa"/>
      <Welcome name="yooo"/>
      <Message></Message>

    </div>
  );
}

export default App;
