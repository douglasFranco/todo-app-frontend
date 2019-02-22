import React, { Component } from 'react'
export default class TodoList extends Component {
    constructor (props) {
        super(props)
        this.renderRows = this.renderRows.bind(this)        
    }

    renderRows() {        
        const list = this.props.list
        
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                    {!todo.done ? (
                        <td>
                            <button className="btn btn-success" onClick={() => this.props.handleMarkAsDone(todo)}>
                                <i className="fa fa-check"></i>
                            </button>
                        </td>
                    ) : (
                        <td>
                            <button className="btn btn-warning" onClick={() => this.props.handleMarkAsPending(todo)}>
                                <i className="fa fa-undo"></i>
                            </button>
                            <button className="btn btn-danger" onClick={() => this.props.handleRemove(todo)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </td>                          
                    )}
                </tr>
            ))
        )
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}