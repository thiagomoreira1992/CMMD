import { ChangeEvent, ReactComponentElement, useState } from "react";
import { SearchItem } from "../../components/SearchItem";
import { SubmitButton } from "../../components/SubmitButton";
import Textfield from "../../components/Textfield";

function Search() {
  const [material, setMaterial] = useState("");

  function handleChangeMaterial(newMaterial) {
    console.log(newMaterial);
    settMaterial(newMaterial);
    console.log(material);
    // settMaterial(e.currentTarget.value)
  }

  function submitButton() {
    console.log(material);
  }

  const teste = {
    "name" : "Buscopan",
    "presentation": "Ampola",
    "records" : [
      {
        "id": 3,
        "batch": "22030122",
        "expires" : "03022024",
        "quantity": 204
      },
      {
        "id": 14,
        "batch": "22030123",
        "expires" : "03022025",
        "quantity": 150
      }
    ]
  }


  return (
    <main className=" w-full grid items-center justify-center  grid-cols-1">
      <h2 className="font-open text-3xl font-bold text-gray-400 text-center">
        Pesquisa de materiais
      </h2>
      <div className="flex flex-1 self-center items-center justify-center gap-4 m-10 border-b-2 py-10">
        <Textfield
          name="buscar"
          type="text"
          label="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        ></Textfield>
        <SubmitButton
          title="Buscar"
          onClick={() => console.log(material)}
        ></SubmitButton>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-11 gap-4 my-1">
          <span className="col-span-5 font-open font-semibold text-xl border-b-2">
            Material
          </span>
          <span className="col-span-5 font-open font-semibold text-xl  border-b-2">
            Apresentacao
          </span>
        </div>
          <SearchItem material={teste}></SearchItem>
      </div>
    </main>
  );
}

export default Search;
