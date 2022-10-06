import React, { useState } from "react";

const FormComponent = () => {
  const [user, AddUsers] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [err, AddError] = useState({
    errorEmail: null,
    errorPassword: null,
  });
  const inputChange = (e) => {
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    const passRegex = new RegExp(
      "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$"
    );

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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default FormComponent;