import React,{useState} from 'react'
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Swal from "sweetalert2";

const EditMember = (props) => {
    console.log(props && props.data)
    const [formData, setFormData] = useState({
      first_name: props.data && props.data.first_name ,
      last_name: props.data && props.data.last_name,
      email: props.data && props.data.email,
      id: props.data && props.data.membership_id
    });

     const [formChanged, setFormChanged] = useState(false);

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value,
       });
       setFormChanged(true);
       console.log(formData)
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
          try {
           await axios.put(
             `http://localhost:8081/api/member/updateMember/${props.data.membership_id}`, formData
           ).then((res)=>{
               setFormChanged(false);
               props.setEditModal(false)
               props.setData(res.data.allMembers);
               if (res.status === 200) {
                 Success.fire({
                   icon: "success",
                   title: "Save is successfully",
                 });
               }
           })
          } catch (error) {
           console.log(error)
           Error.fire({
             icon: "error",
             title: error.message,
           });
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
            {props.data &&
              `Edit ${props.data.first_name} ${props.data.last_name}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body text-left">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="first_name"
                  defaultValue={props.data && props.data.first_name}
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
                  defaultValue={props.data && props.data.last_name}
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
                  defaultValue={props.data && props.data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-info"
                  type="submit"
                  disabled={!formChanged}
                >
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
}

export default EditMember

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
