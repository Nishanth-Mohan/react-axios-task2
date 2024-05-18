import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://6648c66c4032b1331bec6332.mockapi.io/api/users")
      .then((res) => setUserData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {userData.map((element, index) => {
        return (
          <div key={index}>
            <div className="col">
              <div class="card mx-3 my-3" style={{ width: "18rem" }}>
                <div class="card-header text-center">
                  <b>UserID:</b> {element.id}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <b>Name:</b> {element.name}
                  </li>
                  <li class="list-group-item">
                    <b>UserName:</b> {element.username}
                  </li>
                  <li class="list-group-item">
                    <b>Email:</b> {element.email}
                  </li>
                  <li class="list-group-item">
                    <b>Phone:</b> {element.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
