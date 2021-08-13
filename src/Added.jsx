import React, { useState } from "react";
import CheckIcon from '@material-ui/icons/Check';

import DeleteIcon from '@material-ui/icons/Delete';


const Added=(props)=>{
    const[check,setcheck] = useState(false);
    const chekeditem =()=>{
        setcheck(true)
    }

    return( <li style={{textDecoration: check ?"line-through":"none"}}>{props.getitem}
    <div className="deleteorcheked"><CheckIcon onClick={chekeditem} className="added"/>
    <DeleteIcon onClick={()=>{
        props.select(props.id);
    }} className="delete"/>
    </div></li>
    )}
export default Added;