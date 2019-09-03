import React from 'react'
import styles from './selectLanguage.module.css'
import PropTypes from 'prop-types'

const  SelectLanguage = (props) => {
    const {handleChange, languagesArray, active} = props
    // const handleChange = props.handleChange
    // const languagesArray = props.languagesArray
    
    // const styles = {
    //     textTransform: 'capitalize'
    // }

    return (
        <ul className={styles.parent}>
            {languagesArray.map((language, index) => (<li style={active === language ? {color: '#FF0000'} : null} data-language={language} key={index} onClick={handleChange}>{language}</li>))}
        </ul>
    )
}

SelectLanguage.propTypes = {
    languagesArray: PropTypes.array.isRequired,
    active: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default SelectLanguage
