import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Team.css";

function Team(props) {
  let navigate = useNavigate();
  const [toggle, settoogle] = useState(true);
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [invalid, setinvalid] = useState(false);
  const [age, setage] = useState("");
  const [filter, setfilter] = useState("");
   const [data, setdata] = useState([
    {
      id: 1,
      name: "Ali",
      level: "M.L developer",
      age: 12,
      img: "/image/profile.png",
    },
    {
      id: 2,
      name: "Liaqt",
      level: "M.L developer",
      age: 22,
      img: "/image/profile2.png",
    },
    {
      id: 3,
      name: "usama",
      level: "S. developer",
      age: 22,
      img: "/image/profile.png",
    },
    {
      id: 4,
      name: "Mohsin",
      level: "J. developer",
      age: 6,
      img: "/image/profile2.png",
    },
    {
      id: 5,
      name: "Ali",
      level: "M.L developer",
      age: 5,
      img: "/image/profile.png",
    },
  ]);
  const [filterdata, setfilterdata] = useState(data);

useEffect(()=>{
  const a= localStorage.getItem("login");
  if(a==""){
    navigate("/", { replace: true });
  }
},[])



  function handleSubmit(e) {
    e.preventDefault();
 
    if (name == "" || role == "") {
      setinvalid(true)

    } else {
      const adddata = {
        id: Math.random(),
        name: name,
        level: role,
        age: age,
        img: "/image/profile.png",
      };
      setdata((data) => [...data, adddata]);
      setfilterdata((data) => [...data, adddata]);

      settoogle(!toggle);
    }
  }

  function handleChange(e) {
    setname(e.target.value);
    setinvalid(false)

  }

  const handlefilter=(e)=>{
    setfilter(e.target.value)
    setdata(data)
  }

  const deleteitem = (id) => {
    console.log(id)
    setfilterdata(data.filter((data) => data.id !== id));
    console.log(filterdata)
  };

  const sort = () => {
    const a=data.filter((data) => data.age == filter)
    setfilterdata(a)
    console.log(filterdata)
  };

  return (
    <div className="container-fluid">
      {toggle && (
        <div>
          <h1 className="text-center my-5">{props.title}</h1>
          <div className="d-flex justify-content-between w-75 mx-auto">
            <button
              className="btn btn-primary"
              onClick={() => settoogle(!toggle)}
            >
              Add Member
            </button>
            <div className="d-flex">
              <input
                type="number"
                value={filter}
                placeholder="Enter Your age"
                onChange={handlefilter}
              ></input>
              <button className="btn btn-success ms-4" onClick={sort}>
                Search
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            {filterdata.length == 0 && <h2>No Data Found</h2>}

            {filterdata &&
              filterdata.map((data, index) => {
                const { name, level, age, img, id } = data;
                return (
                  <div
                    className="col-md-4 my-3 d-flex justify-content-center"
                    key={index}
                  >
                    <div className="d-flex align-items-center justify-content-center box w-75">
                      <div>
                        <h3>{name}</h3>
                        <p>Age:{age}</p>
                        <h4>{level}</h4>
                      </div>

                      <div>
                        <img className="a" src={img}></img>
                        <div className="d-flex">
                          <button
                            className="btn btn-danger ms-3"
                            onClick={() => deleteitem(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
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
                className={invalid ? "invalid":""}
                  type="text"
                  value={name}
                  onChange={ handleChange }  
                  placeholder="Enter your username.."
               
                />

                <label for="Role"  >Role</label>
                <input
                  type="text"
                  className={invalid ? "invalid":""}
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                  placeholder="Enter your Role.."
                 
                />
                <label for="Role">Age</label>
                <input
                  type="number"
                  className={invalid ? "invalid":""}
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                  placeholder="Enter your Age.."
                 
                />
                <input type="submit" name="submit" value="ADD User" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
