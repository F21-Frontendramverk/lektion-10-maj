import './App.css';
import { Component } from 'react';

import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: 'Köp kaffe', id: 1 },
        { task: 'Köp kaka', id: 2 },
        { task: 'Brygg kaffe', id: 3 },
        { task: 'Drick kaffe', id: 4 }
    ]}
  }

  componentDidMount() {
    // Denna metod körs enbart vid sidladdning när komponenten laddas

    /** Samma som:
     * 
     * useEffect(() => {
     * }, [])
     */

    console.log('Körs enbart vid sidladdning');
  }

  componentDidUpdate() {
    // Denna metod körs varje gång state uppdateras

    /** Samma som:
     * 
     * useEffect(() => {
     * })
     */
  }

  render() {
    return (
      <div className='App'>
        <h1>Todo App</h1>
        <ul>
        { this.state.todos.map((todo) => {
          return <TodoItem task={ todo.task } key={ todo.id } />
        }) }
        </ul>
      </div>
    )
  }
}

export default App;
