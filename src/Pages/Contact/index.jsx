import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import { MainLayout, InnerLayout } from "../../styles/Layouts";
import PrimaryButton from "../../components/PrimaryButton";
import ContactItem from "../../components/ContactItem";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Contact = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  return (
    <MainLayout>
      <Title title={"Contato"} span={"Contato"}></Title>
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-container">
            <div className="contact-title">
              <h4>Envie sua mensagem:</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">
                  Informe o seu nome:
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="name" id="name">
                  Informe o seu email:
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="name" id="assunto">
                  Informe o seu assunto:
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="">Escrea a sua mensagem</label>
                <textarea name="msg" id="textarea" />
              </div>
              <div className="form-field">
                <PrimaryButton title={"Enviar"} />
              </div>
            </form>
          </div>
          <div className="rigth-content">
            <ContactItem
              icon={phone}
              title={"Telefone"}
              contact1={"(11) 97244-3359"}
              contact2={"(11) 97116-5596"}
            />
            <ContactItem
              icon={email}
              title={"Email"}
              contact1={"marlondener01@gmail.com"}
              contact2={"m.dener01@uni9.edu.br"}
            />
            <ContactItem
              icon={location}
              title={"Localização"}
              contact1={"Embu Guaçu - SP"}
              contact2={"Disponivel contato"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.div`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media (max-width: 978px) {
      display: flex;
      flex-direction: column-reverse;
    }
    .rigth-content {
      display: flex;
      flex-direction: column;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding-top: 20px;
        font-size: 1.5rem;
        position: relative;
        top: -40px;
        @media (max-width: 978px) {
          top: -10px;
        }
      }
    }

    .form {
      width: 100%;
      .form-field {
        &:not(:first-child) {
          margin-top: 1.5rem;
        }
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -18px;
          font-size: 19px;
          padding: 5px 5px;
          display: inline-block;
          background-color: var(--background-dark-color);
          z-index: 6;
        }
        input {
          color: var(--primary-color);
          font-size: 0.9rem;
          z-index: 5;
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 65px;
          padding: 20px 15px;
          width: 100%;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          width: 100%;
          font-size: 0.9rem;
          height: 200px;
          resize: none;
          padding: 20px 5px 5px 15px;
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default Contact;
