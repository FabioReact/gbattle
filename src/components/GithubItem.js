import React from 'react'

const GithubItem = (props) => {
    return (
        <li>
            <span>#</span>
            <img src="" alt=""/>
            <a href="">{props.repo.name}</a>
            <span>@</span>
            <span>stars</span>
        </li>
    )
}

export default GithubItem