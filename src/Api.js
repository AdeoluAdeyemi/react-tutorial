import React, {Component} from 'react'

class App extends Component {
    state = {
        data: [],
    }
    

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount(){
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
        .then((response) => response.json())
        .then((response) =>{
            this.setState({
                data: response,
            })
        })
        .catch((err) => {
            //Log error on console.
            const errorMessage = alert('Gah, it\'s not working')        
        })
    }

    render(){
        const {data} = this.state
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App