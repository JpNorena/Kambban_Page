import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages'

export class videos extends Component {
    render() {
        return (
            <div className = "app-wrapper">
                <ContainerHeader match = {this.props.match}
                                 title = {<IntlMessages id = "pages.videos"/>}/>
                <div className = "page-heading">
                    <iframe width="100%" height = "600"src="https://www.youtube.com/embed/euNn-8LJBhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>                 
            </div>
        )
    }
}

export default videos
