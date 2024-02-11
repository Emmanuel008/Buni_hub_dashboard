import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";

const AddMember = (props) => {


  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    const { first_name, last_name, email } = values;
    try {
      props.setLoading(true)
      await axios
        .post("http://localhost:8081/api/member/createMember", {
          first_name,
          last_name,
          email,
        })
        .then((res) => {
          props.setModalShow(false);
          props.setLoading(false)
          props.setData(res.data.allMembers);
          if (res.status === 200) {
            Success.fire({
              icon: "success",
              title: "Save is successfully",
            });
          }
        });
    } catch (error) {
      props.setModalShow(false);
      props.setLoading(false)
      if (error){  
        Error.fire({
          icon: "error",
          title: error.message,
        });
      }
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Member
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body text-left">
            <form onSubmit={handelSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-info" type="submit">
                  Submit
                </button>
                <button className="btn btn-danger ml-2" onClick={props.onHide}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMember;


const Success = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const Error = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});