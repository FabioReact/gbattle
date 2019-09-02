import React, { Component } from 'react'
import SelectLanguage from '../components/SelectLanguage'

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "all"
        }
    }

    languagesArray = ['all', 'javascript', 'ruby', 'java', 'css', 'python']

    handleClick = (language) => {
        this.setState({
            filter: language
        })
    }


    render() {
        return (
            <div>
                <SelectLanguage active={this.state.filter} languagesArray={this.languagesArray} handleChange={this.handleClick}/>
                <ul>
                    <li>
                        <span>#</span>
                        <img src="" alt=""/>
                        <a href=""></a>
                        <span>@</span>
                        <span>stars</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Popular