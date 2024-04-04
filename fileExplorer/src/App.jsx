import { useState } from 'react'
import explorer from "./data/folderdata"
import './App.css'
import Folder from './components/folder'
import useTraverseTree from './hooks/use-traverse-tree'



function App() {


   const [explorerdata,setExplorerdata]=useState(explorer)

   const {insertNode}= useTraverseTree()

   const HandleInsertNode =(folderId,item, isFolder)=>{
   const finalTree = insertNode(explorerdata,folderId,item,isFolder)
   setExplorerdata(finalTree)
   }

  return (
    <Folder  HandleInsertNode={ HandleInsertNode} explorer={explorerdata}/>
  )
}

export default App
