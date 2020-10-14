import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
// The following imports all named exports attached to yogaClassAPI
import * as yogaClassAPI from './services/yoga-api';
import ClassListPage from './components/ClassListPage/ClassListPage';
import AddClassPage from './components/AddClassPage/AddClassPage';
import ClassDetailPage from './components/ClassDetailPage/ClassDetailPage';
import EditClassPage from './components/EditClassPage/EditClassPage';
import userService from './utils/userService';
import tokenService from './utils/tokenService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      yogaClasses: [],
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }
  
  //Runs everytime after render() is called
  async componentDidMount() {
    const yogaClasses = await yogaClassAPI.getAll();
    this.setState({yogaClasses});
  }

  handleAddClass = async newYogaClassData => {
    const newYogaClass = await yogaClassAPI.create(newYogaClassData);
    this.setState(state => ({
      yogaClasses: [...state.yogaClasses, newYogaClass]
    }),
    // Using cb to wait for state to update before rerouting
    () => this.props.history.push('/'));
  }//////////////////////

  handleUpdateClass = async updatedYogaClassData => {
    const updatedClass = await yogaClassAPI.update(updatedYogaClassData);
    // Using map to replace just the yogaClass that was updated
    const newYogaClassesArray = this.state.yogaClasses.map(p => 
      p._id === updatedClass._id ? updatedClass : p
    );
    this.setState(
      {yogaClasses: newYogaClassesArray},
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
      <div className="App">
        <header className="App-header">
          Courtney's Yoga
          <nav>
            <NavLink exact to='/'>
              My Classes
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