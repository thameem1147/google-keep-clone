import React, { useState } from "react";
import Head from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Workarea from "./workarea";
 

function App()
 {
     const [display, setdisplay] = useState([]);
     function addingnote(reciveval)
     { 
         return setdisplay(prev => {
        return [...prev, reciveval];
        setdisplay("")
});
     }
     function deleting(id)
     {
         setdisplay(prev => {
            return prev.filter((con, index) => {
                 return index !== id
             }
             )
         })
     }
     return <div>
         <Head />
         <Workarea adding={addingnote}/>
         {display.map((store, index) =>
         {
             return <Note key={index} id={index} name={store.title} sub={store.content} change={deleting}
             />
                   
         })}
     <Footer />
     </div>
 }
 export default App;
 //  <Note id={1} name={display} sub={display} />