import Menu from "../components/Menu";

function Cmmd() {
  return (
    <div className="relative flex h-screen w-screen md:items-center md:justify-start sm:justify-center">
      <Menu />
      <div className=" h-[95%] sm:ml-0 sm:mt-24 md:ml-24 md:mt-0 bg-white p-4 rounded-xl overflow-y-auto flex flex-col items-center">
        <main className="flex flex-col items-center p-5 w-full">
          <h1 className="font-open font-extrabold text-3xl text-gray-400 border-b-2 w-full text-center pb-3">
            Materiais com vencimento próximo
          </h1>
          <div className="flex flex-col pt-5 font-open font-semibold text-gray-400">
            <div className="flex justify-evenly">
              <p>Material</p>
              <p>Data de Validade</p>
              <p>Lote</p>
            </div>
            <div></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Cmmd;
