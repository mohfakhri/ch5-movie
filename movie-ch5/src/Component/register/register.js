import React, { useState } from "react";

const AddForm = () => {
  const [user, AddUsers] = useState({
    userEmail: "",
    userPassword: "",
    confPassword: "",
    userName: "",
  });
  const [err, AddError] = useState({
    errorEmail: null,
    errorPassword: null,
    errConfirmations: null,
    errUserName: null,
  });
  const inputChange = (e) => {
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    const passRegex = new RegExp(
      "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$"
    );
    const userRegex = new RegExp("^\\S*$");

    if (e.target.name === "email") {
      AddUsers({
        ...user,
        userEmail: e.target.value,
      });
      AddError({
        ...err,
        errorEmail: regex.test(e.target.value) ? "" : "invalid email",
      });
    } else if (e.target.name === "password") {
      AddUsers({
        ...user,
        userPassword: e.target.value,
      });
      AddError({
        ...err,
        errorPassword: passRegex.test(e.target.value)
          ? ""
          : "so small password",
      });
    } else if (e.target.name === "confirmation") {
      AddUsers({
        ...user,
        confPassword: e.target.value,
      });
      AddError({
        ...err,
        errConfirmations:
          e.target.value === user.userPassword ? "" : "not matching",
      });
    } else if (e.target.name === "userName") {
      AddUsers({
        ...user,
        userName: e.target.value,
      });
      AddError({
        ...err,
        errUserName: userRegex.test(e.target.value)
          ? ""
          : "please without whitespace",
      });
    }
  };

  return (
    <>
      <form className="container mt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={user.userEmail}
            onChange={(e) => inputChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <small className="text-danger">{err.errorEmail}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            className="form-control"
            value={user.userName}
            onChange={(e) => inputChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <small className="text-danger">{err.errUserName}</small>
        </div>

        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={user.userPassword}
            onChange={(e) => inputChange(e)}
            id="exampleInputPassword1"
            required
          />
          <small className="text-danger">{err.errorPassword}</small>
        </div>

        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label">
            Confirm Passwprd
          </label>
          <input
            type="password"
            name="confirmation"
            className="form-control"
            value={user.confPassword}
            onChange={(e) => inputChange(e)}
            id="exampleInputPassword1"
            required
          />
          <small className="text-danger">{err.errConfirmations}</small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default AddForm;