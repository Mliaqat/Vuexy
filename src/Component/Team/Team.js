import React, { useState } from "react";
import "./Team.css";

function Team(props) {
  const [toggle, settoogle] = useState(true);
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [data, setdata] = useState([
    {
      name: "Ali",
      level: "M.L developer",
      img: "/image/profile.png",
    },
    {
      name: "Ali",
      level: "Mid Level developer",
      img: "/image/profile2.png",
    },
    {
      name: "Ali",
      level: "Mid Level developer",
      img: "/image/profile.png",
    },
    {
      name: "Ali",
      level: "Mid Level developer",
      img: "/image/profile2.png",
    },
    {
      name: "Ali",
      level: "Mid Level developer",
      img: "/image/profile.png",
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (name == "" || role == "") {
      alert("Please Fill All Field");
    } else {
      const adddata = {
        name: name,
        level: role,
        img: "/image/profile.png",
      };
      setdata((data) => [...data, adddata]);

       settoogle(!toggle  )
    }
  }

  return (
    <div>
      {toggle && (
        <div>
          <h1 className="text-center my-5">{props.title}</h1>
          <button
            className="btn btn-primary"
            onClick={() => settoogle(!toggle)}
          >
            Add Member
          </button>
          <div className="row">
            {data.map((data, index) => {
              const { name, level, img } = data;
              return (
                <div className="col-md-4 my-3 d-flex justify-content-center" key={index}>
                  <div className="d-flex align-items-center justify-content-center box w-75">
                    <div>
                      <h3>{name}</h3>
                      <h4>{level}</h4>
                    </div>
                    <img className="a" src={img}></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {!toggle && (
        <div>
          <h1 className="text-center my-5">Add Member</h1>
          <button
            className="btn btn-primary ms-5"
            onClick={() => settoogle(!toggle)}
          >
            Back
          </button>
          <div className="row">
            <div className="offset-lg-3 col-md-6">
              <form onSubmit={handleSubmit}>
              <label for="username">Username</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Enter your username.."
                 required
                />

                <label for="Role">Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                  placeholder="Enter your Role.."
                    required
                />
                <input type="submit" name="submit"  value="ADD User" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
