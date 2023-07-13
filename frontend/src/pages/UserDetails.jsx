import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../api/userRequest";

const UserDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      const { data } = await getUser(id);
      console.log(data);
      setPerson(data);
    };
    fetchPerson();
  }, // eslint-disable-next-line
  []);

  return (
    <div className="w-full h-full bg-[#ccf6fe] flex flex-col ">
      <div className=" max-w-[800px] w-[90%] h-[80%] m-auto">
        <h1 className=" text-[60px] font-bold">User Details</h1>
        <div className="w-[80%] h-[60%] bg-white shadow-xl rounded-3xl p-10">
          <form action="" className="flex flex-col gap-8">
            <table>
              <tbody>
                <tr className=" h-16">
                  <td className=" font-semibold text-[20px]">Name:</td>
                  <td className="text-[16px]">{person.username}</td>
                </tr>
                <tr className=" h-16">
                  <td className=" font-semibold text-[20px]">Email:</td>
                  <td className="text-[16px]">{person.email}</td>
                </tr>
                <tr className=" h-16">
                  <td className=" font-semibold text-[20px]">Phone Number:</td>
                  <td className="text-[16px]">{person.phone}</td>
                </tr>
              </tbody>
            </table>
            <Link to="/" className="self-end">
              <button className=" rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black ">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-black transition duration-300 group-hover:text-white ease">
                  Go back
                </span>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
