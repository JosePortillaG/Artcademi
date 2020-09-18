import React, { useState } from "react";
import "./comentBlogArt.css";

export const ComentBlogArt = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    web: "",
  });
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const sendData = (e) => {
    e.preventDefault();
    console.log(data.name + "" + data.email);
  };
  return (
    <>
      <section className="u-wrapper">
        <p className="coment-title">comentarios</p>
        <p className="coment-text">
          Tu dirección de correo electrónico no será publicada.Los campos
          obligatorios estan marcados con *
        </p>
        <form onSubmit={sendData}>
          <div className="form-coment">
            <textarea
              className="form-textarea"
              name="text"
              placeholder="Comentarios*"
            ></textarea>
            <div className="form-container-input">
              <input
                type="text"
                class="form-control"
                placeholder="Nombre*"
                name="name"
                onChange={handleInputChange}
              />
              <input
                type="email"
                class="form-control"
                placeholder="E-mail*"
                name="email"
                onChange={handleInputChange}
              />
              <input
                type="text"
                class="form-control"
                placeholder="Web"
                name="web"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div className="form-container-checked">
              <input type="checkbox" name="vehicle1" value="Bike" />
              <label for="vehicle1">
                Guardar mi nombre, correo electronico y web en este navegador
                para la próxima vez que comente.
              </label>
            </div>
            <div className="form-container-checked">
              <input type="checkbox" name="vehicle2" value="Car" />
              <label for="vehicle2">
                Reacibir un e-mail con los siguientes comentarios a esta
                entrada.
              </label>
            </div>
            <div className="form-container-checked">
              <input type="checkbox" name="vehicle3" value="Boat" />
              <label for="vehicle3">
                Recibir un e-mail con cada nueva entrada.
              </label>
            </div>
            <div className="container-form-button">
              <button className="form-button" type="submit">
                Deja tu comentario
              </button>
            </div>
          </div>
        </form>
      </section>
      <div className="carrusel-blog"></div>
    </>
  );
};
