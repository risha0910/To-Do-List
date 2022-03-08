import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './taskReducer';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Addtask from './Components/Addtask';
import Todolist from './Components/Todolist';

function App() {
  const store = createStore(taskReducer)
  return (
    <div className="App">
      <h3 style={{ background: 'white', padding: '12px', marginTop: '10px', borderRadius: '122px', fontFamily: 'math' }}> Hey Buddy ! What's Your Plan ?</h3>
      <h5 style={{ fontFamily: 'cursive', background: 'white', padding: '12px', width: '164px', position: 'absolute', marginTop: '4px', borderRadius: '62px' }}>Here's your todolist!</h5>
      <h5 style={{ fontFamily: 'cursive', background: 'white', padding: '12px', width: '164px', position: 'absolute', marginTop: '6px', marginLeft: '1000px', borderRadius: '47px' }}>List down your activities!</h5>
      <Provider store={store}>
        <Navbar />
        <Addtask />
        <Todolist/>
        <taskReducer />
      </Provider>

     
    </div>
  );
}

export default App;
