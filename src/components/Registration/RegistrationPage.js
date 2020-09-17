import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
import './Registration.css'
import Axios from 'axios'
import { func } from "prop-types";

export default function RegistrationPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerButton, setRegisterButton] = useState(true)
  let pass = '';
  let confirmPass = '';

 async function registerUser(){
   console.log(password)
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  try {
    const response = await Axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxd_rGsGKHKQe2uV_yaHLlA-Sv3A_bk9E`,
      authData
    );
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
  }

  function checkHandler(){
    setRegisterButton(!registerButton)
  }

  return (
    <div>
      <Container className="RegisterPage">
        <Form>
          <FormGroup>
            <Label for="registerEmail">Email</Label>
            <Input
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              name="email"
              id="registerEmail"
              placeholder="Ваш E-Mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerPassword">Пароль</Label>
            <Input
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              name="password"
              id="registerPassword"
              placeholder="Пароль"
            />
            {/* <Label for="confrimPassword">Подтвердите пароль</Label>
            <Input
              onChange={(e)=>{}}
              type="password"
              name="password"
              id="confirmPassword"
              placeholder="Подтвердите пароль"
            /> */}
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={(e)=>checkHandler(e)} /> Я согласен с условиями пользовательского
              соглашения
            </Label>
          </FormGroup>
          <Button disabled={registerButton} color='primary' onClick={()=>registerUser()}>Зарегистрироваться</Button>
        </Form>
      </Container>
    </div>
  );
}
