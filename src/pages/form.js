import React, { useState } from "react";
import Layout from "../layout";

function Form() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();

      if (response.ok) {
        const [firstName, lastName] = data.name.split(" ");

        setUserData({
          name: data.name,
          firstName: firstName || "",
          lastName: lastName || "",
        });
        setError(false);
      } else {
        console.error("Usuario no encontrado");
        setUserData(null);
        setError(true);
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(userId);
  };

  return (
    <Layout>
      <section className="h-[77vh] min-h-[420px] flex items-center justify-center max-w-screen-lg mx-auto">
        <span className="absolute top-0 left-0 w-full h-screen -z-10 object-cover object-center bg-cover bg-center bg-[url('https://www.bancoazteca.com.mx/content/dam/azteca/home/240905/banner-home-remesas.webp')]"></span>
        <form onSubmit={handleSubmit} className="md:w-full max-w-screen-sm p-8 rounded-md bg-white/70">
          <div className="mt-2">
            <input
              required
              placeholder="ID usuario:"
              className="focus:outline-none w-full border-[1px] border-[#03cd94]/30 p-2 rounded-md text-neutral-450"
              id="userId"
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <input
              placeholder="Nombre:"
              className="focus:outline-none w-full border-[1px] border-[#03cd94]/30 p-2 rounded-md text-neutral-450"
              type="text"
              name="nombre"
              value={userData ? userData.firstName : ""}
              disabled
            />
          </div>

          <div className="mt-2">
            <input
              placeholder="Apellido Paterno:"
              className="focus:outline-none w-full border-[1px] border-[#03cd94]/30 p-2 rounded-md text-neutral-450"
              type="text"
              name="apellidoPaterno"
              value={userData ? userData.lastName : ""}
              disabled
            />
          </div>

          <div className="mt-2">
            <input
              placeholder="Apellido Materno:"
              className="focus:outline-none w-full border-[1px] border-[#03cd94]/30 p-2 rounded-md text-neutral-450"
              type="text"
              name="apellidoMaterno"
              value={userData ? userData.lastName : ""}
              disabled
            />
          </div>

          <input
            className="mt-2 rounded-full text-base p-2 w-full flex items-center flex-wrap justify-center cursor-pointer font-semibold text-black bg-[#03cd94] hover:text-white hover:bg-[#006231] transition-colors duration-700"
            type="submit"
            value="Buscar Usuario"
          />
        </form>

        {error && (
          <aside className="absolute top-20 right-20 z-10 p-8 rounded-md border border-red-600 bg-white">
            <i className="w-6 h-6 absolute -top-2 -right-2 rounded-full animate-pulse bg-yellow-600"></i>
            <i className="w-6 h-6 absolute -top-2 -right-2 rounded-full animate-pulse bg-red-600"></i>
            <p>
              <strong>¡Vaya!</strong> parece que no hay <strong>ningún</strong> <br /> usuario que coincida con el <strong>ID</strong> <br /> que has colocado
            </p>
            <p>
              <strong>Inténtalo con: 1</strong> 😉
            </p>
          </aside>
        )}
      </section>
    </Layout>
  );
}

export default Form;
