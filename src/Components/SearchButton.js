import React, { Component } from 'react'
import axios from 'axios';
import logo from './github.jpeg';
import './SearchButton.css'


class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            show: [],
        };
    }
    handleChange = (event) => {
        this.setState({ username: event.target.value });
    }
    submitChange = () => {
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(response => {
                this.setState({
                    show: response.data
                })
            
                this.props.history.push({ pathname: "/detail", userData: response.data })
            })
    }
    render() {
        console.log(this.state.username, "Ranuuu")
        return (
            <div>
                <img style={{ width: '600px' }} src={logo} />
                <div>
                    <input className='change' type="text" value={this.state.username} onChange={this.handleChange} />
                    <button className='submit' onClick={this.submitChange}>submit</button>
                </div>
            </div>
        )
    }
}
export default SearchButton;











