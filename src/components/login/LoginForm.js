import React from "react";
import TextInput from "../common/TextInput";

const LoginForm = ({
  user,
  onLoginClick,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onLoginClick}>
      <div className=" text-center text-slanted text-blue">
        <h1>Login</h1>
      </div>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        type="text"
        name="username"
        label="User Name"
        value={user.username}
        onChange={onChange}
        error={errors.username}
      />

      <TextInput
        type="password"
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.password}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
