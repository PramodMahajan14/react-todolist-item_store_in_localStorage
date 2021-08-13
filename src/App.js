import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Added from "./Added";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import './App.css';
//get data from localStorage
const getLocalData=()=>{
  let listOfitems =localStorage.getItem('listOfitem') ;
      if(listOfitems){
        return JSON.parse(localStorage.getItem('listOfitem'));
      }else{
        return [];
      }
}
const App=()=>{
         const[item,setitem] =useState('');
         const[newitem,setnewitem] = useState(getLocalData());
           const inputevent = (e)=>{
                            setitem(e.target.value);
                             }

            const additem=(val)=>{
                         if(item==='')
                           { toast.error('please enter item',{
                                                position:'top-center',
    
                                         })
                          }else{
                                 setnewitem((prevalue)=>{
                                  return[...prevalue,item]
                                         });
                                   setitem('');
                                }

              }
            const deleteitem=(id)=>{
                         setnewitem((prevalue)=>{
                         return prevalue.filter((item,index)=>{
                         return index !== id;
                        })
                     })
               }
     useEffect(()=>{
           localStorage.setItem('listOfitem',JSON.stringify(newitem));
      },[newitem])
             const deleteall=()=>{
                      setnewitem([]);
              }
  return(<>
          <div className="main-div">
            <div className="center-div">
              <h1>TodoList</h1>
              <input type="text" value={item} onChange={inputevent} placeholder="Enter item...."  />
             <button className="btn" onClick={additem}><AddIcon  /></button>
            <div> <ClearAllIcon onClick={deleteall} className="clearall"/></div>
             <ul>
               {
                 newitem.map((val,index)=>{
                   return <Added  key={index}
                   id={index}
                   getitem={val}
                   select={deleteitem} />
                   
                 })
               }
             </ul>
            </div>
          </div>
          <ToastContainer
            hideProgressBar={false}
          />
  </>)
}
export default App;