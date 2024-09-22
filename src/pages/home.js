import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Layout from "../layout";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Usuario y contraseña por defecto
  const defaultUser = "azteca";
  const defaultPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (attempts >= 3) {
      return; // Deshabilitar si hay más de 3 intentos fallidos
    }

    if (user === defaultUser && password === defaultPassword) {
      // Redirigir a la página de formulario
      history.push("/formulario");
    } else {
      console.log("Contraseña incorrecta");
      setErrorMessage("Usuario o contraseña incorrecta");
      setAttempts(attempts + 1);
    }
  };

  return (
    <Layout>
      <section className="h-[77vh] min-h-[420px] md:flex items-center justify-between max-w-screen-lg mx-auto">
        <form onSubmit={handleLogin} className="md:w-2/3 p-8">
          <hgroup className="">
            <h2 className="text-3xl font-medium">
              {attempts >= 3 ? (
                <span>
                <strong>¡Vaya!</strong><br /> parece que has pasado el <br /><strong>límite</strong> de <strong>intentos </strong> 🤯
              </span>
              ) : (
                <span>
                  Inicia sesión en <strong>Azteca</strong> <br /> tus credenciales son <br />
                  <strong>azteca</strong> y <strong>12345</strong> 😜
                </span>
              )}
            </h2>
          </hgroup>

          <div className="mt-2">
            <input
              required
              placeholder="Usuario:"
              className="focus:outline-none w-full border-[1px] border-[#03cd94]/30 p-2 rounded-md text-neutral-450"
              id="user"
              type="text"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="mt-2 relative flex items-center">
            <input
              required
              placeholder="Contraseña:"
              className="focus:outline-none w-full border-[1px] border-[#03cd94]/30 p-2 rounded-md text-neutral-450"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && <span className="pr-1 text-xs text-red-700">{errorMessage}</span>}

          <input
            className={`mt-2 rounded-full text-base p-2 w-full flex items-center flex-wrap justify-center cursor-pointer font-semibold
          animate-fadeIn--bg-blue text-black bg-[#03cd94] hover:text-white hover:bg-[#006231] transition-colors duration-700 ${
            attempts >= 3 ? "opacity-10 cursor-none" : ""
          }`}
            type="submit"
            value="Iniciar Sesión"
            disabled={attempts >= 3}
          />

          {attempts >= 3 && console.log("contraseña incorrecta")}
        </form>
        <aside className="md:w-1/3 p-8">
          <img
            src="https://www.baz.app/assets/el-centro-comercial-esta-en-baz-5a77bee4.webp"
            alt="image"
            className="w-full"
          />
        </aside>
      </section>
    </Layout>
  );
}

export default App;
