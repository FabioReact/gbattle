import React, { Component } from 'react'

import GithubItem from '../components/GithubItem'
import SelectLanguage from '../components/SelectLanguage'
import { fetchPopularRepo } from '../api/api'

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "all"
        }
    }

    languagesArray = ['all', 'javascript', 'ruby', 'java', 'css', 'python']

    handleClick = (event) => {
        this.setState({
            filter: event.target.dataset.language
        })
    }

    componentDidMount() {
        fetchPopularRepo().then(repos => {
            this.setState({repos: repos})
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <SelectLanguage active={this.state.filter} languagesArray={this.languagesArray} handleChange={this.handleClick}/>
                <ul>
                    <GithubItem /> 
                </ul>
            </div>
        )
    }
}

export default Popular