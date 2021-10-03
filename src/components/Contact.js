import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  /*
  const [setPost] = React.useState(null);
  const baseURL = "http://localhost:3500/form";

   React.useEffect(() => {
     axios.get(`${baseURL}`).then((response) => {
       setPost(response.data);
     });
   }, []);

  function SubmitAP() {
    axios
      .post(baseURL, {
        Names: "",
        Asunt: "",
        email: "",
        Message: "",
      })
      .then((response) => {
        setPost(response.data);
      });
  }
*/
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="Contactfond">
      <div className="Contact">
        <h1 className="titleContact">Contact</h1>
      </div>
      <div className="container">
        <div className="wrapper wrapperContact">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="row rowContact">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombres"
                  aria-label="Names"
                  {...register("Names", {
                    required: "Ingresa tu nombre",
                    minLength: 10,
                    maxlength: 100,
                  })}
                />
                {errors.Names && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.Names.message}
                  </span>
                )}
              </div>
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Asunto"
                  aria-label="Asunt"
                  {...register("Asunt", {
                    required: "Por favor ingresa un asunto",
                    minLength: 10,
                    maxlength: 50,
                  })}
                />
                {errors.Asunt && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.Asunt.message}
                  </span>
                )}
              </div>
              <div className="col">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="E-mail"
                  {...register("email", {
                    required: "Ingrese su correo",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Ingresa un correo valido",
                    },
                  })}
                />
                {errors.email && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="col">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Mensaje"
                  {...register("Message", {
                    required: "Ingresa un mensaje",
                    minLength: 10,
                    maxlength: 200,
                  })}
                ></textarea>
                {errors.Message && (
                  <span>
                    <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />{" "}
                    {errors.Message.message}
                  </span>
                )}
              </div>
              <div className="col">
                <ReCAPTCHA
                  className="recap"
                  sitekey="6LdpF4UcAAAAABR79qJu-jGqkCrKpPA-SaEJ4dqt"
                  onChange={onChange}
                />
                <button
                  type="submit"
                  class="btn btn-outline-light buttonSubmit"
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

export default Contact;
