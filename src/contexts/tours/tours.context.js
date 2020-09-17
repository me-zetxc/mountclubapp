import Axios from "axios";
import React, { createContext, useReducer } from "react";
import { URL } from "../../components/constants/constants";

const INIT_STATE = {
  tours: [],
};
export const ToursContext = createContext(INIT_STATE); // Создаем контекст ToursContext

const reducer = (state = INIT_STATE, action) => {
  // Основной редьюсер принимает состояние и экшн
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return { ...state, tours: action.payload };
    default:
      return state;
  }
};

const myMiddleware = (dispatch, action) => {
  console.log(action.id)
  //Посредник принимает диспатч и экшн
  switch (
    action.type //Смотрит на тип экшна
  ) {
    case "GET_DATA":
      Axios.get(URL + "/tours.json").then(({ data }) => {
        //делает запрос на сервер
        if (!data) return;
        const arr = Object.entries(data).map(([key, value]) => {
          value.id = key;
          return value;
        });
        dispatch({
          //Если всё удачно то вызывает GET_DATA_SUCCESS
          type: "GET_DATA_SUCCESS", //он заново рендерит новый стейт
          payload: arr, //передаем новый массив сформированный после запроса
        });
      });
      break;

      
    case "EDIT_ITEM":
      // PATCH request using axios => 5 lines
      Axios.patch(`${URL}/tours/${action.id}.json`, {
        method: "patch",
        data: action.payload
      });
      break;


    case "DELETE_ITEM":
      Axios.delete(`${URL}/tours/${action.payload}.json`).then(() => {
        myMiddleware(dispatch, {
          //При удалении важен action.payload. Он указывает на элемент который нужно удалить
          type: "GET_DATA",
        });
      });
      break;
    default:
      dispatch(action);
  }
};

function ToursProvider({ children }) {
  const [toursState, dispatch] = useReducer(reducer, INIT_STATE);
  const toursDispatch = (action) => myMiddleware(dispatch, action);

  return (
    <ToursContext.Provider
      value={{
        toursState,
        toursDispatch,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
}

export default ToursProvider;
