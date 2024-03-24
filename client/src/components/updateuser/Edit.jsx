import React, { useEffect } from 'react'
import "../adduser/Add.css";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Edit() {

    const users={
        date:"",
        ticketNumber:"",
        fullName:"",
        quintal:"",
        price:"",
        aaya:"",
        mila:""
    }
    const[user,setUser] = useState(users);

    const {id} = useParams();
    const navigate = useNavigate();
  

    const inputChange =(e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/new/getone/${id}`)
        .then((response)=>{
            setUser(response.data)
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])


        const submitform =async(e)=>{
            e.preventDefault();
            await axios.put(`http://localhost:8000/new/update/${id}`,user)
            .then((response)=>{
               toast.success(response.data.msg,{position:"top-right"})
               navigate("/")
            }).catch(error => console.log(error))
    
        }
        return (
            <div className='addUser'>
                <Link to={"/"}>Back</Link>
                <h3>Update user</h3>
                <form action="" className='addUserForm' onSubmit={submitform}>
                    <div className="inputGroup">
                        <label htmlFor="date">Date</label>
                        <input type="text" value={new Date(user.date).toLocaleDateString('en-GB')} disabled />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="ticketNumber">Ticket Number</label>
                        <input type="text" value={user.ticketNumber} disabled />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" value={user.fullName} disabled />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="quintal">Quintal</label>
                        <input type="text" value={user.quintal} disabled />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="price">Price</label>
                        <input type="text" value={user.price} disabled />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="aaya">AAYA</label>
                        <select value={user.aaya} onChange={inputChange} id='aaya' name='aaya'>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="mila">MILA</label>
                        <select value={user.mila} onChange={inputChange} id='mila' name='mila'>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className="inputGroup">
                        <button type='Submit'>Update user</button>
                    </div>
                </form>
            </div>
        );
        
}

export default Edit