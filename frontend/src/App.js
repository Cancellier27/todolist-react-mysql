import './App.css';
import Header from './components/header'
import Task from './components/task'

function App() {
  return (
    <div className="App">
      <Header />

      <section className="query-container" >
        <span>Type your new task:</span>
        <div>
          <input type="text" />
          <button>Add</button>
        </div>
      </section>

      <section className="tasks-container" >
        <Task />
        <Task />
      </section>

    </div>
  );
}

export default App;
