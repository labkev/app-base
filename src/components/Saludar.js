import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "NN" } = userInfo;

  console.log(props);
  console.log(userInfo);

  return (
    <div>
      {/* <p> Hola {props.userInfo.nombre}, 
        tiene {props.userInfo.edad} años
        y su color favorito es {props.userInfo.color}</p> */}
      <button onClick={() => saludarFn(nombre, userInfo.edad)}>Saludar</button>
    </div>
  );
}
