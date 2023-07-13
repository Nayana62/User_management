import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../api/userRequest";
import { updateUser } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFromData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const { username, email, phone } = formData;

  useEffect(() => {
    const fetchPersonDetails = async () => {
      const { data } = await getUser(id);
      setFromData({
        username: data.username,
        email: data.email,
        phone: data.phone,
      });
    };
    fetchPersonDetails();
  }, // eslint-disable-next-line
  []);

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, formData));
    navigate("/");
  };

  return (
    <div className="w-full h-full bg-[#ccf6fe] flex flex-col ">
      <div className=" max-w-[800px] w-[90%] h-[80%] m-auto">
        <h1 className=" text-[60px] font-bold">Update User</h1>
        <div className="w-[80%] h-[60%] bg-white shadow-xl rounded-3xl p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <input
              className="p-3 px-5 bg-gray-100 rounded-md outline-none"
              type="text"
              placeholder="name"
              name="username"
              value={username}
              onChange={handleChange}
              autoComplete="off"
            />

            <input
              className="p-3 px-5 bg-gray-100 rounded-md outline-none"
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="off"
            />

            <input
              className="p-3 px-5 bg-gray-100 rounded-md outline-none"
              type="tel"
              placeholder="phone number"
              name="phone"
              value={phone}
              onChange={handleChange}
              autoComplete="off"
            />

            <button
              type="submit"
              className="self-end rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black "
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-black transition duration-300 group-hover:text-white ease">
                Update User
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
