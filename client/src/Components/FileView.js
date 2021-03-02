import React from 'react'




function FileView(props) {
const keyName=props.keyWord
  return (
    <div className="treeView">
    <ul>
      {     props.data.map((val,key)=>{
        console.log(val.user[keyName])
            return(
              val.user[keyName]!==undefined?
              <li key={key}>{val.user[keyName]}</li> : null

            )})
      }

      </ul>
    </div>
  )
}

export default FileView
