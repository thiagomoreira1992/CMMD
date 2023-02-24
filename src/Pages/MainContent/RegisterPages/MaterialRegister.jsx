
function CategoryRegister() {
    return (
<>
            <h1
                className="font-open text-3xl font-bold text-gray-400"
            >Cadastro de Materiais</h1>
            <form id={"category"} className="p-4 flex flex-col items-center gap-10">
                <div
                    className="flex gap-4 items-center">
                    <label htmlFor="categoria"
                        className="font-open text-xl font-semibold text-gray-400"
                    >Nome da Categoria</label>
                    <input type={"text"} name="categoria" className="font-open text-center text-gray-400 rounded-md drop-shadow-sm pl-2 py-1 outline-orange-300 border-orange-200 hover:border-orange-300 border-2 transition-all" />
                </div>
                <div
                    className="flex gap-4 items-center">
                    <label htmlFor="priority"
                        className="font-open text-xl font-semibold text-gray-400"
                    >Prioridade</label>
                    <select name="priority" id="priority" defaultValue={""}
                        className="font-open text-center text-gray-400 rounded-md drop-shadow-sm pl-2 py-1 outline-orange-300 border-orange-200 hover:border-orange-300 border-2 transition-all"
                    >
                        <option value={""} disabled> </option>
                        <option value={1}>Alta</option>
                        <option value={2}>Média</option>
                        <option value={3}>Baixa</option>
                    </select>
                </div>
                <button
                    className="bg-orange-300 py-2 px-3 mt-2 rounded-xl font-open font-semibold text-xl text-gray-400 drop-shadow-md hover:text-gray-500 hover:bg-orange-400 transition-all"
                >Cadastrar</button>
            </form>
        </>
    )
}

export default CategoryRegister