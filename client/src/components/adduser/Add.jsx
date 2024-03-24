import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Add.css";
import axios from 'axios';
import toast from 'react-hot-toast';

function Add() {
    const users = {
        date: "",
        ticketNumber: "",
        fullName: "",
        quintal: "",
        price: "",
        aaya: "",
        mila: ""
    }
    const [user, setUser] = useState(users);

    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/new/create", user)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" })
                navigate("/")
            }).catch(error => console.log(error))

    }

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form onSubmit={submitForm} className='addUserForm'>
                <div className="inputGroup">
                    <label htmlFor="date">Date</label>
                    <input type="date" onChange={inputHandler} id='date' name='date' autoComplete='off' placeholder='Date' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="ticketNumber">Ticket Number</label>
                    <input type="text" onChange={inputHandler} id='ticketNumber' name='ticketNumber' autoComplete='off' placeholder='Ticket Number' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" onChange={inputHandler} id='fullName' name='fullName' autoComplete='off' placeholder='Full Name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="quintal">Quintal</label>
                    <input type="text" onChange={inputHandler} id='quintal' name='quintal' autoComplete='off' placeholder='Quintal' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="price">Price</label>
                    <input type="text" onChange={inputHandler} id='price' name='price' autoComplete='off' placeholder='Price' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="aaya">AAYA</label>
                    <select onChange={inputHandler} id='aaya' name='aaya'>
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <label htmlFor="mila">MILA</label>
                    <select onChange={inputHandler} id='mila' name='mila'>
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>

                    </select>
                </div>
                <div className="inputGroup">
                    <button type='Submit'>Add user</button>
                </div>
            </form>
        </div>
    )
}

export default Add;
