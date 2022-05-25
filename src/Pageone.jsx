import React from 'react'
import './Style.css'
import { useState, useEffect } from 'react'
import { data } from './Data'
import PageNext from './PageNext'
import ReactPaginate from 'react-paginate'
import AdminUI_JSON from './AdminUI_JSON.json'


function Pageone() {

    const data = AdminUI_JSON
    const [users, SetUsers] = useState([])
    // console.log(users);
    const [search,SetSearch] = useState([])
    const [searchfilter,SetSearchFiletr] = useState('')
    const [del,setDel] = useState([])
    

   
    console.log(search );


    useEffect(() => {
        SetUsers(data)
        SetSearch(data)
        
    }, [])

    const [showPerPage ,SetShowPerPage ] = useState(10) 

    const [pagination , SetPagination] = useState({
        start:0,
        end:showPerPage
    })

    const handlePageClick = (data) => {
        console.log(data.selected);
    }

    const onpaginationChange= (start,end)=>{
    //    console.log(start,end);
    SetPagination({start:start,end:end})
    }

   const serchhandle =(e)=>{
    if (e.target.value =='') {
        SetUsers(data)
    } else {
        const searchfilter = users.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) 
    
        )
        SetUsers(searchfilter)
    }     
   }

   const deletfun = (e)=>{
    if (e =='') {
         SetUsers(data)        
    } else {
        const del = users.filter(item => item.id !== e)
        SetUsers(del)
    }  
    
   }

    





    return (
        <div className='container-fluid mb-3 p-5   ' >
            <input className="form-control" type="text"  onChange={(e)=> serchhandle(e) }  placeholder="Search by name , email or role" aria-label="default input example" />

            {/* table */}
            <table className="table  table table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">  <input type="checkbox" /></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='table'>
                    {users.slice(pagination.start,pagination.end).map((value, index) => {
                        return (
                            <>
                                <tr className='table1' key={value.id} >
                                    <th>  <input type="checkbox" /></th>
                                    <td  >{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.role}</td>
                                    <td onClick={(e)=>deletfun(value.id)} ><i className="fa-solid icon fa-pen-to-square "></i>
                                        &nbsp; &nbsp;
                                        <i className=" text-danger icon fa-solid fa-trash"></i>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
     
   
           

       <PageNext showPerPage={showPerPage} onpaginationChange={onpaginationChange} total={users.length}  />
        </div>
    )
}

export default Pageone