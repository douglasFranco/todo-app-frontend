import React, { Component } from 'react'

export default class PageHeader extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.name} <small>{this.props.small}</small></h1>
            </header>
        )
    }
}