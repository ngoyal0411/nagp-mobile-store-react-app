import React, { useState, useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";
import { UserContext } from "../../context/context";
import { Container, Segment } from "semantic-ui-react";

function Login(props) {
  const [user, setUserState] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!formIsValid()) {
      setSaving(true);
      return;
    } else {
      setSaving(false);
    }
  }, [currentUser]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function formIsValid() {
    const { username, password } = currentUser;
    const errors = {};

    if (!username) errors.username = "User Name is required.";
    if (!password) errors.password = "Password is required";
    if (password.length > 0 && password.length < 8) {
      errors.password = "Password must contain atleast 8 characters";
    }

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleLogin(event) {
    event.preventDefault();
    const { username, password } = currentUser;
    if (username === user.username || password === user.password) {
      setUserState((prevUser) => ({
        ...prevUser,
        isLoggedIn: true,
      }));
      toast.success("Logged In successfully");
      props.history.push("/");
    } else {
      toast.error("Invalid Credentials!!");
    }
  }

  return (
    <Container>
      <Segment
        style={{
          margin: "50px",
          alignItems: "center",
          position: "flex",
          zIndex: 1000,
          color: "gray",
        }}
      >
        <LoginForm
          user={currentUser}
          errors={errors}
          onChange={handleChange}
          onLoginClick={handleLogin}
          saving={saving}
        />
      </Segment>
    </Container>
  );
}

export default Login;
