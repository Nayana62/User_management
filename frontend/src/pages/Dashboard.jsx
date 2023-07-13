import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api/userRequest";
import UserList from "../components/UserList";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/userAction";

const Dashboard = () => {
  const [persons, setPersons] = useState([]);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }

  useEffect(() => {
    const fetchPersons = async () => {
      const {data} = await getAllUsers();
      // console.log(data);
      setPersons(data);
    };
    fetchPersons();
  }, []);


  return (
    <div className="w-full h-full bg-[#ccf6fe] ">
      <Header />

      <div className="w-full h-14 bg-[#0c2e8a] text-[#f6f8fb] flex items-center justify-between px-32 font-semibold">
        <p className=" text-[20px]">User Management</p>
        <Link to="/users">
        <button className="p-2 px-4 bg-[#4fd8af] rounded-md ">Add User</button>
        </Link>
      </div>

      <div className="w-full bg-white">
        <table className="w-full ">
         <thead>
         <tr className=" h-10 border-2 border-gray-300">
            <th className=" w-[10%]">ID</th>
            <th className=" w-[60%]">Name</th>
            <th className=" w-[30%]">Action</th>
          </tr>
         </thead>
          {persons.map((person, index) => {
            return (
             <UserList key={person._id} person={person} index={index} handleDelete={handleDelete}/>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
