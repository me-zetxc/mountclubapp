import Axios from 'axios';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const AuthForm = (props) => {

  
  const loginHandler= ()=>{
  Axios.get('https://mountclub-cde00.firebaseio.com/AIzaSyDxd_rGsGKHKQe2uV_yaHLlA-Sv3A_bk9E.json')
  .then(response => console.log(response))
  }

  return (
    <Form>
      <FormGroup>
        <Label for="E-Mail">E-Mail</Label>
        <Input type="email" name="email" id="authEmail" placeholder="Введите ваш E-Mail" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Пароль</Label>
        <Input type="password" name="password" id="authPassword" placeholder="Введите пароль" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Запомнить меня
        </Label>
      </FormGroup>
      <Button color="primary" onClick={()=>loginHandler()}>Войти</Button>{' '}
      <Button color='warning' className='ml-3'><a style={{textDecoration:'none', color:'white'}} href='/registration'>Регистрация</a></Button>
    </Form>
  );
}

export default AuthForm;