import React from 'react'
import {connect} from 'react-redux'

const TodoList = (props) => {

    const renderRows = () => {      
        const list = props.list
        
        return (
            list.map( todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                    {!todo.done ? (
                        <td>
                            <button className="btn btn-success" onClick={() => props.handleMarkAsDone(todo)}>
                                <i className="fa fa-check"></i>
                            </button>
                        </td>
                    ) : (
                        <td>
                            <button className="btn btn-warning" onClick={() => props.handleMarkAsPending(todo)}>
                                <i className="fa fa-undo"></i>
                            </button>
                            <button className="btn btn-danger" onClick={() => props.handleRemove(todo)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </td>                          
                    )}
                </tr>
            ))
        )
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)