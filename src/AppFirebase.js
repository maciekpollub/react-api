import React, {Component} from 'react'
import { database } from './firebase'

class AppFirebase extends Component {

    state = {
        counter: null
    }

    incHandler = () => {
        database.ref('/counter')
            .set(this.state.counter +1)
    }

    decHandler = () => {
        database.ref('/counter')
            .set(this.state.counter -1)
    }

    componentDidMount(){
        database.ref('/counter')
            .on('value', (snapshot)=>{
                this.setState({counter: snapshot.val()//na żywo dane w DB zmieniają się gdy działam w app
                })
            })
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.incHandler}> + </button>
                <button onClick={this.decHandler}> - </button>
            </div>
            )
    }

}

export default AppFirebase;