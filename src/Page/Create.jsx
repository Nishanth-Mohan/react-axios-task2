import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://6648c66c4032b1331bec6332.mockapi.io/api/users", createData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/userinfo");
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="row g-3 mb-2 align-items-center justify-content-center">
            <div className="col-auto">
              <label className="col-form-label">Name:</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="name"
                value={createData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mb-2 align-items-center justify-content-center">
            <div className="col-auto">
              <label className="col-form-label">Username:</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="username"
                value={createData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mb-2 align-items-center justify-content-center">
            <div className="col-auto">
              <label className="col-form-label">Email:</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="email"
                value={createData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mb-2 align-items-center justify-content-center">
            <div className="col-auto">
              <label className="col-form-label">Phone:</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="phone"
                value={createData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mb-2 align-items-center justify-content-center">
            <div className="col-auto">
              <label className="col-form-label">User_id:</label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="user_id"
                value={createData.user_id}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="m-3">
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
