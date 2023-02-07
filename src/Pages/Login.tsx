import { Password } from "phosphor-react";
import Photo from "../assets/photo.png";

function Login() {
  return (
    <div className="h-screen w-screen relative flex justify-center items-center">
      <div
        className="fixed -z-10 flex justify-end"
        style={{
          background:
            "linear-gradient(66deg, rgba(254,159,77,1) 0%, rgba(250,217,186,1) 99%)",

          filter: "blur(2px)",
          width: "100vw",
          height: "24rem",
        }}
      >
        <img src={`${Photo}`} alt="" className="ml- bg-blend-luminosity"></img>
      </div>
      <main className="w-96 !important h-64 bg-light-blue rounded-xl p-4 drop-shadow-md flex flex-col items-center">
          {/* <h2 className="font-open text-xl font-bold text-gray-400">Entrar</h2> */}
        <article 
            className="py-3 flex flex-col items-center justify-center gap-3"
        >
          <h3 className="font-open text-md font-semibold text-gray-400">
            Usuário
          </h3>
          <input type={"text"} className="font-open text-center text-gray-400 rounded-md drop-shadow-sm pl-2 py-1 outline-orange-300"/>
          <h3 className="font-open text-md font-semibold text-gray-400">
            Senha
          </h3>
          <input type={"password"} className="font-open text-center text-gray-400 rounded-md drop-shadow-sm pl-2 py-1 outline-orange-300 transition-all"/>
          <button className="bg-orange-300 py-2 px-3 mt-2 rounded-xl font-open font-semibold text-gray-400 drop-shadow-md hover:text-gray-500 hover:bg-orange-400 transition-all">Entrar</button>
        </article>
      </main>
    </div>
  );
}

export default Login;
