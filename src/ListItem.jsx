import React, {useEffect, useState} from 'react';
import {ProgressBar} from 'react-bootstrap';
import Flip from 'react-reveal/Flip';


const  ListItem = (props) => {
    const [percent, setPercent] = useState(1);

    useEffect( ( ) => {
        setInterval( () => {
            setPercent(props.progress)
        })
    }, [percent])


    return (
        <li className="listRows"><Flip><img src={props.icon} /></Flip> {props.name} <ProgressBar animated now={percent} /></li>
    )
}
export default ListItem;