import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from './components/NavBar'
import TodoMain from './main'
import Feed from './components/Feed'
import PlaceHolder2 from './components/PlaceHolder2'
import IndId from './components/IndId'
import notFound from './components/notFound'

class App extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={TodoMain} />
                    <Route exact path="/Motivation" component={Feed} />
                    <Route exact path="/Placeholding" component={PlaceHolder2} />
                    <Route exact path="/Motivation/:post_id" component={IndId} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;