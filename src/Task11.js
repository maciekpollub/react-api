import React, {Component} from 'react'
import { database } from './firebase'

class Task11 extends Component{

    componentDidMount(){
        database.ref('/my/first/path')
            .set("It works...")//chcemy zapisać to w bazie danych więc metoda firebase'owa set. Nie potrzeba stanu gdy celem jest tylko zapis do bazy danych
            .then(()=>console.log('Data saved in database...'))

    }


    render(){
        return(
            <div>
                Saving "it works" to 'my/first/path'.
            </div>
        )
    }
}

export default Task11;