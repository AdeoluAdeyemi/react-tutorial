import React, {Component} from 'react'
import Table2 from './Table2'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = (index) => {

    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character]})
  }

  render() {
    return (
      <div className="container">
        <Table2 characterData={this.state.characters}removeCharacter= {this.removeCharacter} />
        <Form handleSubmit = {this.handleSubmit} />
      </div>
    )
  }
}

export default App
