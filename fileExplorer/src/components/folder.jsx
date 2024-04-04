import React from "react";

import { useState } from "react";


const Folder = ({ explorer, HandleInsertNode=()=>{} }) => {
 
    const [expand,setExpand] = useState(false)
    const [showInput,setShowInput]= useState({
      visable:false,
      isFolder: false
    })
    const HandleNewFolder = (e,isFolder)=>{
       e.stopPropagation()
       setExpand(true)
       setShowInput({
        visable:true,
        isFolder
       })
    }
    const onAddFolder = (e) => {
      if (e.keyCode === 13 && e.target.value) {
        HandleInsertNode(explorer.id, e.target.value, showInput.isFolder);
  
        setShowInput({ ...showInput, visible: false });
      }
    };
 
  if (explorer.isFolder) {
    return (
      <div >
        <div onClick={()=>setExpand(!expand)} className=" bg-black/10 mt-2 flex justify-between p-3 w-96 rounded-lg border-2 cursor-pointer ">
          <span className="ms-0 me-1 mt-1 mb-0"> 📁 {explorer.name}</span>

          <div>
            <button className="mt-1 border-2 border-blue-600 bg-blue-800 px-2 py-1 mx-1 rounded-lg hover:bg-blue-700" onClick={(e)=>HandleNewFolder(e,true)} >Folder+</button>
            <button className="mt-1 border-2 border-blue-600 bg-blue-800 px-2 py-1 rounded-lg hover:bg-blue-700" onClick={(e)=>HandleNewFolder(e,false)} >File+</button>
          </div>
        </div>


        <div style={{display: expand?"block":"none"}} className="px-7">

          {showInput.visable && (
            <div className="flex  items-center gap-1">
              <span className="mt-1">{showInput.isFolder? "📁" :"📄 "}</span>
              <input type="text" className="ms-2 me-0 mt-0 mb-0 p-1 flex border-2 border-white text-black items-center justify-between cursor-pointer"  autoFocus onBlur={()=>setShowInput({...showInput,visable:false})} onKeyDown={onAddFolder}/>
            </div>
          )}
          
        {explorer.items.map((exp) => {
          return <Folder explorer={exp} key={exp.id} HandleInsertNode={HandleInsertNode}/>
        })}
        </div>
      </div>
    );
  }
  else{
    return <span className="mt-2 ps-1 flex flex-col">📄 {explorer.name}</span>
}
};


export default Folder;
