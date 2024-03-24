import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./User.css";
import axios from 'axios';
import { deleteUser } from '../../../../server/controller/userController';
import toast from 'react-hot-toast';


function User() {

    const [users, setusers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/new/getAll");
            setusers(response.data);
            console.log(response.data)
        }

        fetchData();
    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8000/new/delete/${userId}`)
            .then((response) => {
                setusers((prevUser) => prevUser.filter((user) => user._id !== userId))
                toast.success(response.data.msg, { position: 'top-right' })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='userTable'>
            <Link to={"/add"} className='addButton'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.NO.</th>
                        <th>Date</th>
                        <th>Ticket Number</th>
                        <th>Full Name</th>
                        <th>Quintal</th>
                        <th>Price</th>
                        <th>AAYA</th>
                        <th>MILA</th>
                        <th>Action Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{new Date(user.date).toLocaleDateString('en-GB')}</td>


                                    <td>{user.ticketNumber}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.quintal}</td>
                                    <td>{user.price}</td>
                                    <td>{user.aaya ? <i class="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</td>
                                    <td>{user.mila ?<i class="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</td>

                                    <td className='actionButton'>
                                        <button onClick={() => { deleteUser(user._id) }}><i className="fa-solid fa-trash"></i></button>
                                        <Link to={`/edit/` + user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default User