import { CaretDoubleDown } from "phosphor-react";

export function SearchItem({ material, ...rest }) {
  return (
    <div className="grid grid-rows-2" material={material} {...rest}>
      <div className="grid grid-cols-11 gap-4 border-b-2 my-2">
        <span className="col-span-5 font-open font-regular text-xl">
          {material.name}
        </span>
        <span className="col-span-5 font-open font-regular text-xl">
          {material.presentation}
        </span>
        <CaretDoubleDown
          size={24}
          className="bg-orange-300 rounded-full p-1 self-center justify-self-center cursor-pointer"
        />
      </div>
      <div className="pl-10 w-full grid grid-cols-3">
        <span className="font-open font-semibold">Lote</span>
        <span className="font-open font-semibold">Data de Validade</span>
        <span className="font-open font-semibold">Quantidade</span>
        <div className="grid grid-cols-3 col-span-3 ">
          <span className="font-open font-regular">Lote</span>
          <span className="font-open font-regular">Data de Validade</span>
          <span className="font-open font-regular">Quantidade</span>
        </div>
        {
          material.records.map((record) => {
            
            <div key={record.id} className="grid grid-cols-3 col-span-3 ">
              <span className="font-open font-regular">{record.batch}</span>
              <span className="font-open font-regular">{record.expires}</span>
              <span className="font-open font-regular">{record.quantity}</span>
              {console.log(record.expires)}{record}
            </div>;
          })
          // material.records.map((record)=>{console.log(record.batch)})
        }
      </div>
    </div>
  );
}
