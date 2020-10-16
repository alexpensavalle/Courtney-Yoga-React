import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
// The following imports all named exports attached to yogaClassAPI
import * as yogaClassAPI from './services/yoga-api';
import * as userAPI from './services/user-api';
import ClassListPage from './components/ClassListPage/ClassListPage';
import AddClassPage from './components/AddClassPage/AddClassPage';
import ClassDetailPage from './components/ClassDetailPage/ClassDetailPage';
import EditClassPage from './components/EditClassPage/EditClassPage';
import SignupPage from './pages/SignupPage/SignupPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import userService from './utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
  }

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

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleDeleteClass= async id => {
    await yogaClassAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      yogaClasses: state.yogaClasses.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleBookClass = async id => {
    await userAPI.bookClass(this.state.user, id);

  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <NavLink exact to='/home'>Courtney's Yoga</NavLink>

          {this.state.user ?
              <div>
                <span className="inline">Welcome, {this.state.user.name}
                  &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  <nav>
                  <NavLink exact to='/login' onClick={this.handleLogout}>LOG OUT?</NavLink>
                </nav></span>
              </div>
              :
              <div>
                <nav>
                  <NavLink to='/login'>LOG IN</NavLink>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <NavLink to='/signup'>SIGN UP</NavLink>
                </nav>
              </div>
          }
          
          {this.state.user && this.state.user.isAdmin ?
            <div>
              <nav>
                <NavLink exact to='/add'>
                  Add Class
                </NavLink>
              </nav>
            </div>
            :
            <div>
              <nav>
                <NavLink exact to='/'> 
                  Book a Class
                </NavLink>
                <NavLink exact to='/'>
                  My Profile
                </NavLink>
              </nav>
            </div>
          }
        
        </header>
        
        <main>
          <Route 
            exact path='/' render={() => 
              <ClassListPage
                yogaClasses={this.state.yogaClasses}
                handleDeleteClass={this.handleDeleteClass}
                handleLogout={this.handleLogout}
                user={this.state.user} 
              />
            } 
          />
          <Route exact path='/add' render={() => 
            <AddClassPage
                handleAddClass={this.handleAddClass}
            />
          } />
          <Route exact path='/details' render={({location}) => 
            <ClassDetailPage 
                handleBookClass={this.handleBookClass}
                user={this.state.user} 
                location={location}
            />
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditClassPage
              handleUpdateClass={this.handleUpdateClass}
              location={location}
            />
          } />
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/signup' render={({history}) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          
        </main>
      </div>
    );
  }
}
export default App;