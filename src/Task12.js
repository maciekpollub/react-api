import React, { Component } from 'react'
import { database } from './firebase'

class Task12 extends Component {

    componentDidMount(){
        database.ref('/myData')
            .set({
                name: "maciek",
                surname: "ziemba"
                }
            )
            .then(()=>console.log('Personal data has been set...'))
            .catch(()=> console.log('Nothing saved...'))

    }

    render(){
        return(
            <div>
                Saving object with my personal data to "myData".
            </div>

        )
    }
}

export default Task12;