import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import TodoMain from './main'
import PlaceHolder from './components/PlaceHolder'
import PlaceHolder2 from './components/PlaceHolder2'

class App extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Route exact path="/" component={TodoMain} />
                <Route path="/Motivation" component={PlaceHolder} />
                <Route path="/Placeholding" component={PlaceHolder2} />
            </BrowserRouter>
        )
    }
}

export default App;