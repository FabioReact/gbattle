import React, { Component } from 'react'

import GithubItem from '../components/GithubItem'
import SelectLanguage from '../components/SelectLanguage'
import { fetchPopularRepo } from '../api/api'

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: "all",
            repositories: [],
            loading: true
        }
    }

    languagesArray = ['all', 'javascript', 'ruby', 'java', 'css', 'python']

    handleClick = (event) => {
        const lang = event.target.dataset.language
        this.setState({
            filter: lang,
            loading: true
        })
        fetchPopularRepo(lang).then(resultat => 
            this.setState({
                repositories: resultat,
                loading: false
            })
        )
    }

    componentDidMount() {
        // console.log(fetchPopularRepo())
        fetchPopularRepo().then(resultat => {
            this.setState({
                repositories: resultat,
                loading: false,
                yolo: true
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        if (prevState.yolo !== this.state.yolo)
            console.log("Loading changed")
        
    }

    render() {
        // console.log(this.state)
        if (this.state.loading === true)
            return (<div>Loading elements...</div>)
        return (
            <div>
                <SelectLanguage active={this.state.filter} languagesArray={this.languagesArray} handleChange={this.handleClick}/>
                <ul>
                    {this.state.repositories.map(repo => <GithubItem key={repo.id} repo={repo} />)}
                </ul>
            </div>
        )
    }
}

export default Popular