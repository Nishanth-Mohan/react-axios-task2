import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ setId }) => {
  const [userInfo, setUserInfo] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://6648c66c4032b1331bec6332.mockapi.io/api/users")
      .then((res) => setUserInfo(res.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://6648c66c4032b1331bec6332.mockapi.io/api/users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));

    alert(`The user with the id ${id} has been deleted`);
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">NO.</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>

            <th scope="col" className="text-center" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((ele, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>

                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleEdit(ele.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="m-2">
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
