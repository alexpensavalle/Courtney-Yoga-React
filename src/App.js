import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
// The following imports all named exports attached to yogaClassAPI
import * as yogaClassAPI from './services/yoga-api';
import ClassListPage from './components/ClassListPage/ClassListPage';
import AddClassPage from './components/AddClassPage/AddClassPage';
import ClassDetailPage from './components/ClassDetailPage/ClassDetailPage';
import EditClassPage from './components/EditClassPage/EditClassPage';

class App extends Component {
  state = {
    yogaClasses: []
  };
  
  //Runs everytime after render() is called
  async componentDidMount() {
    const yogaClasses = await yogaClassAPI.getAll();
    this.setState({yogaClasses});
  }

  handleAddClass = async newPupData => {
    const newPup = await yogaClassAPI.create(newPupData);
    this.setState(state => ({
      yogaClasses: [...state.yogaClasses, newPup]
    }),
    // Using cb to wait for state to update before rerouting
    () => this.props.history.push('/'));
  }

  handleUpdateClass = async updatedPupData => {
    const updatedClass = await yogaClassAPI.update(updatedPupData);
    // Using map to replace just the yogaClass that was updated
    const newPuppiesArray = this.state.yogaClasses.map(p => 
      p._id === updatedClass._id ? updatedClass : p
    );
    this.setState(
      {yogaClasses: newPuppiesArray},
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
  }

  handleDeleteClass= async id => {
    await yogaClassAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      yogaClasses: state.yogaClasses.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }
  
  render() {
    return (
      <div yogaClassName="App">
        <header yogaClassName="App-header">
          React Puppies CRUD
          <nav>
            <NavLink exact to='/'>
              PUPPIES LIST
            </NavLink>
            <NavLink exact to='/add'>
              Add Class
            </NavLink>
          </nav>
        </header>
        <main>
          <Route 
            exact 
            path='/' 
            render={() => 
              <ClassListPage
                yogaClasses={this.state.yogaClasses}
                handleDeleteClass={this.handleDeleteClass}
              />
            } 
          />
          <Route exact path='/add' render={() => 
            <AddClassPage
              handleAddClass={this.handleAddClass}
            />
          } />
          <Route exact path='/details' render={({location}) => 
            <ClassDetailPage location={location}/>
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditClassPage
              handleUpdateClass={this.handleUpdateClass}
              location={location}
            />
          } />
        </main>
      </div>
    );
  }
}
export default App;