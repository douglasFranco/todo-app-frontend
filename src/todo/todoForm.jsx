import React, { Component } from 'react'
export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        if(e.key === 'Enter'){
            console.log(this)
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <div className="col-xs-12 col-sm-9 col-md-10">
                    <input 
                        id="description" 
                        className="form-control"
                        value={this.props.description} 
                        onChange={this.props.handleChange} 
                        onKeyUp={this.keyHandler}
                        placeholder="Adicione uma tarefa"/>
                </div>
            
                <div className="col-xs-12 col-sm-3 col-md-2">
                    <button className="btn btn-primary" title="New" onClick={this.props.handleAdd}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button className="btn btn-primary" title="Search" onClick={this.props.handleSearch}>
                        <i className="fa fa-search"></i>
                    </button>
                    <button className="btn btn-default" title="Clear Search" onClick={this.props.handleClear}>
                        <i className="fa fa-close"></i>
                    </button>
                </div>
            </div>
        )
    }
}