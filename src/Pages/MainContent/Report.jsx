/*
    Relatorios:
    Movimentações recentes
    Gastos do Mês
    Todos os itens
    Buscar Item
*/

function Report() {
  return (
    <main className="w-full h-full grid grid-cols-3 gap-4 px-4 border justify-items-center items-center">
      <div
        className="flex justify-center items-center w-full h-[30%]       
        bg-gray-300 bg-opacity-30
        rounded-xl shadow-xl hover:shadow-none 
        hover:border-gray-200 hover:border- hover:border hover:bg-opacity-50 hover:cursor-pointer transition-all
      "
      >
        <span className="text-gray-600 font-open font-bold drop-shadow-md">
          Movimentações recentes
        </span>
      </div>
      <div
        className="flex justify-center items-center w-full h-[30%]       
        bg-gray-300 bg-opacity-30
        rounded-xl shadow-xl hover:shadow-none 
        hover:border-gray-200 hover:border- hover:border hover:bg-opacity-50 hover:cursor-pointer transition-all
      "
      >
        <span className="text-gray-600 font-open font-bold drop-shadow-md">
          Gastos do mês
        </span>
      </div>
      <div
        className="flex justify-center items-center w-full h-[30%]       
        bg-gray-300 bg-opacity-30
        rounded-xl shadow-xl 
        hover:border-gray-200 hover:border- hover:border hover:bg-opacity-50 hover:cursor-pointer
        hover:shadow-none 
        transition-all
      "
      >
        <span className="text-gray-600 font-open font-bold drop-shadow-md">
          Listar Todos
        </span>
      </div>
    </main>
  );
}

export default Report;
