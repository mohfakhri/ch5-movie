 import React, { Component } from 'react';

 class GoogleAuth {extend} React.Component; {
    state = {isSignedIn : null};

    ComponentDidMount(); {
        window.Gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '1085462416434-guk7csjtivta4tel7vij1gungkbscr7a.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }
    onSignIn = () => {
        this.auth.signIn()
    }
    
    onSignOut = () => {
        this.auth.signOut()
    }
    
    renderAuthButton();{
        if(this.state.isSignedIn === null){
            return null
        }else if(this.state.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOut}><i className="google
                icon"></i>Sign Out</button>
            )
        }else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}><i className="google
                icon"></i>Sign In eith Google</button>
            )
        }
    }
    render();{
        return <div>{this.render.AuthButton()}</div>
    }
 }

 export default GoogleAuth