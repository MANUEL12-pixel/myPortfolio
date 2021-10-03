import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
// import { useForm } from "react-hook-form";
import axios from "axios";

export default class Contact extends React.Component {
  // const {
  //   register,
  //    formState: { errors },
  //  } = useForm();

  // const onSubmit = (data) => console.log(data);

  name = React.createRef();
  asunt = React.createRef();
  email = React.createRef();
  message = React.createRef();

  state = {
    name: "",
    asunt: "",
    email: "",
    message: "",
  };

  comprobarCambios = () => {
    //actualiza el state para cada cambio
    var name = this.name.current.value;
    var asunt = this.asunt.current.value;
    var email = this.email.current.value;
    var message = this.message.current.value;

    this.setState({
      name: name,
      asunt: asunt,
      email: email,
      message: message,
    });
  };

  constructor() {
    //hace el bind el metodo
    super();
    this.sendEmail = this.sendEmail.bind(this);
  }

  async sendEmail(e) {
    //metodo para enviar el email
    e.preventDefault();
    const { name, email, asunt, message } = this.state;
    const form = await axios.post("/api/form", {
      name,
      asunt,
      email,
      message,
    });
  }

  render() {
    return (
      <div className="Contactfond">
        <div className="Contact">
          <h1 className="titleContact">Contact</h1>
        </div>
        <div className="container">
          <div className="wrapper wrapperContact">
            <form className="formulario" onSubmit={this.sendEmail}>
              <div className="row rowContact">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombres"
                    aria-label="Names"
                    name="name"
                    onChange={this.comprobarCambios}
                    ref={this.name}
                    // {...register("Names", {
                    //   required: "Ingresa tu nombre",
                    //   minLength: 10,
                    //   maxlength: 100,
                    // })}
                  />
                  {/* {errors.Names && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.Names.message}
                  </span>
                )} */}
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Asunto"
                    aria-label="Asunt"
                    name="asunt"
                    onChange={this.comprobarCambios}
                    ref={this.asunt}
                    // {...register("Asunt", {
                    //   required: "Por favor ingresa un asunto",
                    //   minLength: 10,
                    //   maxlength: 50,
                    // })}
                  />
                  {/* {errors.Asunt && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.Asunt.message}
                  </span>
                )} */}
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="E-mail"
                    name="email"
                    onChange={this.comprobarCambios}
                    ref={this.email}
                    // {...register("email", {
                    //   required: "Ingrese su correo",
                    //   pattern: {
                    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    //     message: "Ingresa un correo valido",
                    //   },
                    // })}
                  />
                  {/* {errors.email && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.email.message}
                  </span>
                )} */}
                </div>
                <div className="col">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Mensaje"
                    name="message"
                    onChange={this.comprobarCambios}
                    ref={this.message}
                    // {...register("Message", {
                    //   required: "Ingresa un mensaje",
                    //   minLength: 10,
                    //   maxlength: 200,
                    // })}
                  ></textarea>
                  {/* {errors.Message && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.Message.message}
                  </span>
                )} */}
                </div>
                <div className="col">
                  <ReCAPTCHA
                    className="recap"
                    sitekey="6LdpF4UcAAAAABR79qJu-jGqkCrKpPA-SaEJ4dqt"
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-light buttonSubmit"
                    // onClick={SubmitAP}
                  >
                    <FontAwesomeIcon
                      icon={["fas", "paper-plane"]}
                      className="Iconsubmitbutton"
                    />{" "}
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
