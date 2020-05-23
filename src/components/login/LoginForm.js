import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { propTypes } from "react-currency-format";

const LoginForm = ({
  users,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Login</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="username"
        label="User Name"
        value={users.name}
        onChange={onChange}
        error={errors.username}
      />

      <TextInput
        name="password"
        label="Password"
        value={users.password}
        onChange={onChange}
        error={errors.password}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  users: propTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default LoginForm;
