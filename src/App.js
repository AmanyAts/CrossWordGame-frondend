import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Categories from './categories'


import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import Board from './board'
import Result from './results'
import AllResults from './allResults'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        {/* <Eclipse size={64} /> */}
       
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        {/* <Board user={user}/> */}
        
         <AuthenticatedRoute user={user} path='/board/:id' render={(props) => (
            <Board alert={this.alert} user={user} ud={props.match.params.id} />
          )} />
          <AuthenticatedRoute user={user} exact path='/home' render={(props) => (
            <Categories alert={this.alert} user={user} scoreId={props.match.params.id} />
          )} />
           <AuthenticatedRoute user={user} exact path='/allusers' render={(props) => (
            <AllResults alert={this.alert} user={user}  />
          )} />

          <AuthenticatedRoute user={user} path='/result' render={() => (
            <Result user={user}/>
          )} />
          {/* <AuthenticatedRoute user={user} exact path='/spinner' render={() => (
            <Spinnerr alert={this.alert} user={user}  />
          )} /> */}



            {/* <AllResults /> */}
        
          
          
       
        

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
           
        </main>
      </React.Fragment>
    )
  }
}

export default App
