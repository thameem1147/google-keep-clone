import React from "react";
 function Note(props)
 {
     function handler()
     {
         props.change(props.id)
     }
     return <div className="note">
         <h1>{props.name}</h1>
         <p>{props.sub}</p>
         <button onClick={handler}>DELETE</button>
     </div>
 }
 export default Note;