import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email };

    if (id) {
      EmployeeService.updateEmployee(id, employee).then(() => {
        navigate("/");
      });
    } else {
      EmployeeService.createEmployee(employee).then(() => {
        navigate("/");
      });
    }
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div className="container">
      <br />
      <br />

      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">

            <form>
              <div className="form-group mb-2">
                <label className="form-label"> First Name :</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Last Name :</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Email :</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;