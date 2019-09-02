import React from 'react'

const  SelectLanguage = (props) => {
    const {handleChange, languagesArray, active} = props
    // const handleChange = props.handleChange
    // const languagesArray = props.languagesArray
    
    // const styles = {
    //     textTransform: 'capitalize'
    // }

    return (
        <ul>
            {languagesArray.map((language, index) => (<li style={active === language ? {color: '#FF0000'} : null} data-language="all" key={index} onClick={() => handleChange(language)}>{language}</li>))}
        </ul>
    )
}

export default SelectLanguage
