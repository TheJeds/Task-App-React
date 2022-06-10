import './App.css';
import logoTheJeds from './images/Logo-TheJeds.png'
import Task from './components/Task.jsx'

function App() {
  return (
    <div className="task-app">
      <div className='logo-TheJeds-container'>
        <img src={logoTheJeds} className='logo-TheJeds' />
      </div>
      <div className='task-list-main'>
        <h1>My tasks</h1>
        <Task text="Aprender React" />
      </div>
    </div>
  );
}

export default App;
