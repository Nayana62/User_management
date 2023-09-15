import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNewUser(data));
    navigate("/");
  };

  return (
    <div className="w-full h-full bg-[#ccf6fe] flex flex-col ">
      <div className=" max-w-[800px] w-[90%] h-[80%] m-auto">
        <h1 className=" text-[60px] font-bold">Add User</h1>
        <div className="w-[80%] h-[60%] bg-white shadow-xl rounded-3xl p-10 overflow-hidden">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <input
              className="p-3 px-5 bg-gray-100 rounded-md outline-none"
              type="text"
              placeholder="name"
              name="username"
              value={data.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <input
              className="p-3 px-5 bg-gray-100 rounded-md outline-none"
              type="email"
              placeholder="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <input
              className="p-3 px-5 bg-gray-100 rounded-md outline-none"
              type="tel"
              placeholder="phone number"
              name="phone"
              max={10}
              value={data.phone}
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <button
              type="submit"
              className="self-end rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black "
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-black transition duration-300 group-hover:text-white ease">
                Add User
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
