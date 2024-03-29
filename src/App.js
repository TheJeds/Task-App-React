import './App.css';
import logoTheJeds from './images/Logo-TheJeds.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-app">
      <div className='logo-TheJeds-container'>
        <img src={logoTheJeds} className='logo-TheJeds' alt='TheJeds-Logo' />
      </div>
      <div className='task-list-main'>
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
