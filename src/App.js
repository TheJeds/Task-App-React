import './App.css';
import logoTheJeds from './images/Logo-TheJeds.png'
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="task-app">
      <div className='logo-TheJeds-container'>
        <img src={logoTheJeds} className='logo-TheJeds' />
      </div>
      <div className='task-list-main'>
        <h1>My tasks</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
