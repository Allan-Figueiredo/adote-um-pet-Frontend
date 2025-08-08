import { useState, useContext } from "react";

import Input from "../../form/input.jsx";
import styles from "../../form/Form.module.css";
import { Link } from "react-router-dom";

import { Context } from "../../../context/UserContext.jsx";

function Register() {

  const [user, setUser] = useState({});
  const { register } = useContext(Context);

function handleOnChange(e) {
  setUser({ ...user, [e.target.name]: e.target.value });
}

function handleSubmit(e) {
  e.preventDefault();
  register(user);
}

    return (
      <section className={styles.form_container}>
        <h1>Registrar</h1>
        <form onSubmit={handleSubmit}>
            <Input
               text="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                handleOnChange={handleOnChange}
            />
             <Input
               text="Telefone"
                type="text"
                name="phone"
                placeholder="Digite seu telefone"
                handleOnChange={handleOnChange}
            />
             <Input
               text="Email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                handleOnChange={handleOnChange}
            />
             <Input
               text="Senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                handleOnChange={handleOnChange}
            />
             <Input
               text="Confirmação de senha"
                type="password"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                handleOnChange={handleOnChange}
            />
            <input type="submit" value="Cadastrar"/>
        </form>
        <p>Já tem conta? <Link to="/login">Clique aqui.</Link></p>
      </section>
    );
  }
  
  export default Register; 