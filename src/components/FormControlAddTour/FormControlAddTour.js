import React, { useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import Axios from "axios";
import { URL } from "../constants/constants";
import { ToursContext } from "../../contexts/tours/tours.context";

const FormControlAddTour = (props) => {
  const {toursDispatch} = useContext(ToursContext);
  const [complexity, setComplexity] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [meeting, setMeeting] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [tourType, setTourType] = useState("")

  const data = {
    complexity: complexity,
    date: date,
    description: description,
    location: location,
    meeting: meeting,
    image: image,
    price: price,
    tourType: tourType
  };

  const addTour=(data)=>{
    Axios.post(`${URL}/tours.json`, data)
    .then(function (response) {
      toursDispatch({
        type: "GET_DATA"
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  return (
    <Form>
      <FormGroup>
        <Label  for="tourName">Локация</Label>
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          name="name"
      
          placeholder="Например: 'Озеро Кол-Тор' "
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourName">Тип похода</Label>
        <Input
          value={tourType}
          onChange={(e) => setTourType(e.target.value)}
          type="text"
          name="name"
        
          placeholder="Например: 'Однодневный, многодневный или альпинизм' "
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourComplexity">Сложность</Label>
        <Input
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          type="text"
          name="name"
      
          placeholder="Например: легкая, средняя или сложная "
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourDate">Дата</Label>
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="text"
          name="name"
        
          placeholder="Например: '15 Сентября'"
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourMeeting">Сбор</Label>
        <Input
          value={meeting}
          onChange={(e) => setMeeting(e.target.value)}
          type="text"
          name="name"
        
          placeholder="Например: '7.30 напротив ГУМа'"
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourPrice">Стоимость</Label>
        <Input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          name="tourPrice"
         
          placeholder="Например: 1500 сом"
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourFoto">Ссылка на главную фотографию</Label>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="fieldAddress"
         
          placeholder="Например: 'http:/website/picture.img'"
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourPhone">Телефон гида</Label>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          name="tourPhone"
          
          placeholder="Напишите мобильный телефон"
        />
      </FormGroup>
      <FormGroup>
        <Label for="tourDescription">Описание</Label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="textarea"
          name="tourDescription"
          
          placeholder="Напишите подробнее"
        />
      </FormGroup>
      <Button color="primary" onClick={()=>addTour(data)}>Добавить</Button>{' '}
    </Form>
  );
};

export default FormControlAddTour;
