import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserList = ({ person, index, handleDelete }) => {
  const notify = () => toast("Deleted User Successfully!");
  return (
    <tbody>
      <tr className="text-center h-10 border-[1px] border-gray-300">
        <td>{index + 1}</td>
        <td>{person.username}</td>
        <td className="flex justify-center">
          <Link to={`/users/${person._id}`}>
            <button className="bg-[#0c2e8a] text-[#f6f8fb] p-2 rounded-md px-4 m-1">
              View
            </button>
          </Link>
          <Link to={`/users/update/${person._id}`}>
            <button className="bg-[#0c2e8a] text-[#f6f8fb] p-2 rounded-md px-4 m-1">
              Edit
            </button>
          </Link>
          <div onClick={notify}>
            <button
              onClick={() => handleDelete(person._id)}
              className="bg-[#0c2e8a] text-[#f6f8fb] p-2 rounded-md px-4 m-1"
            >
              Delete
            </button>
            <ToastContainer />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default UserList;
