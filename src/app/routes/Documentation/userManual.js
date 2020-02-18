import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages'

export class userManual extends Component {
    render() {
        return (
            <div className = "app-wrapper">
                <ContainerHeader  match = {this.props.match}
                                  title = {<IntlMessages id = "pages.userManual"/>}/>
                <div className = "page-heading">
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit porta bibendum, turpis aliquam commodo fermentum fringilla vulputate imperdiet dictumst, dui tempus integer netus metus luctus praesent purus. Tellus gravida phasellus taciti libero curabitur cum sociosqu et, massa faucibus magna mattis sagittis urna maecenas, natoque metus iaculis nullam aptent sem primis. Parturient hac tristique sagittis ultricies nibh enim elementum mollis, interdum pellentesque curabitur id aptent consequat neque, sed orci bibendum sodales venenatis nec eros.
                    </span>
                </div>                  
            </div>
        )
    }
}

export default userManual
