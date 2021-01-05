import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to DnD Shop | Home',
    description: 'Your one stop shop for all your campaign needs',
    keywords: 'Fight me IRL normies'

}
export default Meta
