import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      Log-in to your account
        {/* <Image src='/logo.png' /> Log-in to your account */}
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm










// import React from "react";
// import PropTypes from "prop-types";
// import TextInput from "../common/TextInput";
// import { propTypes } from "react-currency-format";

// const LoginForm = ({
//   users,
//   onSave,
//   onChange,
//   saving = false,
//   errors = {},
// }) => {
//   return (
//     <form onSubmit={onSave}>
//       <h2>Login</h2>
//       {errors.onSave && (
//         <div className="alert alert-danger" role="alert">
//           {errors.onSave}
//         </div>
//       )}
//       <TextInput
//         name="username"
//         label="User Name"
//         value={users.name}
//         onChange={onChange}
//         error={errors.username}
//       />

//       <TextInput
//         name="password"
//         label="Password"
//         value={users.password}
//         onChange={onChange}
//         error={errors.password}
//       />

//       <button type="submit" disabled={saving} className="btn btn-primary">
//         {saving ? "Saving..." : "Save"}
//       </button>
//     </form>
//   );
// };

// LoginForm.propTypes = {
//   users: propTypes.array.isRequired,
//   errors: PropTypes.object,
//   onSave: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   saving: PropTypes.bool,
// };

// export default LoginForm;
