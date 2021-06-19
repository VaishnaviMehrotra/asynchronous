import React from 'react'

function Board(props) {
    const ele=props.className ? `${props.className} board` : 'board' ;
    return (
        <div className={ele} onClick={props.onClick}>
        {props.state}
        </div>
    )

}
export default Board;