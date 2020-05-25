import React from "react";
import LoginForm from "./LoginForm";
import { mount } from "enzyme";

const user = { username: "nishu", password: "password" };
const errors = {};

it("should disable login button on submit click", () => {
  const wrapper = mount(
    <LoginForm
      user={user}
      errors={errors}
      onChange={jest.fn()}
      onLoginClick={jest.fn()}
      saving={false}
    ></LoginForm>
  );
  const submitButton = wrapper.find("#login-button");
  submitButton.simulate("click");
  expect(submitButton.prop("disabled")).not.toBeTruthy();
});

it("should enable submit button on submit click", () => {
  const wrapper = mount(
    <LoginForm
      user={user}
      errors={errors}
      onChange={jest.fn()}
      onLoginClick={jest.fn()}
      saving={true}
    ></LoginForm>
  );
  const submitButton = wrapper.find("#login-button");
  submitButton.simulate("click");
  expect(submitButton.prop("disabled")).toBeTruthy();
});
