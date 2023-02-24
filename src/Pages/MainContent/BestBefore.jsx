import Menu from "../../components/Menu";

function BestBefore() {
    return (
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
    )
}

export default BestBefore;