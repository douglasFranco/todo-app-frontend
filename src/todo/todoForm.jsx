import React, { Component } from 'react'


export default class TodoForm extends Component {
    constructor(props){    
        super(props)
        console.log(this)
    }
    render() {
        return (
            <div role="form" className="todoForm">
                <div className="col-xs-12 col-sm-9 col-md-10">
                    <input id="description" className="form-control" value={this.props.description} onChange={this.props.handleChange} placeholder="Adicione uma tarefa"/>
                </div>
            
                <div className="col-xs-12 col-sm-3 col-md-2">
                    <button className="btn btn-primary" onClick={this.props.handleAdd}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}