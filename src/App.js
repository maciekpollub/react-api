import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        response: 'No response yet...'
    }


    getHandler = () => {
        fetch("https://my-first-personal-project.firebaseio.com/users/maciek.json")
            .then(response => response.json())
            .then((json) => {
                this.setState({response: JSON.stringify(json)})
            })
    };

    postHandler = () => {
        fetch("https://my-first-personal-project.firebaseio.com/users/maciek.json",
            {
                method: 'POST',
                body: JSON.stringify({
                    name: 'maciek',
                    lastname: 'ziemba',
                    active: false,
                    alive: true
                })
            }

        )
    }

    putHandler = () => {
        fetch("https://my-first-personal-project.firebaseio.com/users/maciek.json",
            {
                method: 'PUT',
                body: JSON.stringify({
                    name: 'maciek',
                    lastname: 'ziemba',
                    active: false,
                    alive: true
                })
            }

        )
    }

    patchHandler = () => {
        fetch("https://my-first-personal-project.firebaseio.com/users/maciek.json",
            {
                method: 'PATCH',
                body: JSON.stringify({
                    name: 'maciek',
                    lastname: 'ziemba',
                    active: true,
                    alive: false
                })
            }

        )
    }

    deleteHandler = () => {
        fetch(
            "https://ad-snadbox.firebaseio.com/users/maciek.json",
            {method: 'DELETE'}
        ).then(() => console.log('Delete done'))
    }

  render() {
    return (
      <div>
          <button onClick = {this.getHandler}> GET data from our endpoint </button>
          <button onClick = {this.postHandler}> POST data to our endpoint </button>
          <button onClick = {this.putHandler}> PUT data to our endpoint </button>
          <button onClick = {this.patchHandler}> PATCH data to our endpoint </button>
          <button onClick = {this.deleteHandler}> DELETE data to our endpoint </button>
          <p>
              {this.state.response}
          </p>


      </div>
    );
  }
}


export default App;
