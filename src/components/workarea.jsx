import React, { useState } from "react";

function Workarea(props)  {
    const [initial, final] = useState({
        title:"",
        content:""
    });
    function savetext(event)
    {
        const {name, value} = event.target;

        final( prevval => { return {...prevval,[name]:value}})
    }
    function submit1(event)
    {
         props.adding(initial);
         final({ title:"",
         content:""})
        event.preventDefault();
    }
    return (
    <div>
        <form>
            <input name="title" placeholder="TITLE" onChange={savetext} value={initial.title}/>
            <textarea name="content" placeholder="content goes here..." rows="3" onChange={savetext} value={initial.content}/>
            <button onClick={submit1}>ADD</button>
        </form>
    </div>
    );
}
export default Workarea;



