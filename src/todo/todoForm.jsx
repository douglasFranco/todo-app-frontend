import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import changeDescription from './todoAction'

const TodoForm = props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <div className="col-xs-12 col-sm-9 col-md-10">
            <input
                id="description" 
                className="form-control"
                onChange={props.changeDescription} 
                onKeyUp={keyHandler}
                placeholder="Adicione uma tarefa"
                value={props.description} />
            </div>
        
            <div className="col-xs-12 col-sm-3 col-md-2">
                <button className="btn btn-primary" title="New" onClick={props.handleAdd}>
                    <i className="fa fa-plus"></i>
                </button>
                <button className="btn btn-primary" title="Search" onClick={props.handleSearch}>
                    <i className="fa fa-search"></i>
                </button>
                <button className="btn btn-default" title="Clear Search" onClick={props.handleClear}>
                    <i className="fa fa-close"></i>
                </button>
            </div>
        </div>
    )    
}

const mapStateToProps = (state) => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)