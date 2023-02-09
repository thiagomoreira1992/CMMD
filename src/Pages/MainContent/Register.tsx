
import { useEffect, useState } from "react";
import RegisterMenu from "../../components/RegisterMenu";
import CategoryRegister from "./CategoryRegister";
import MaterialRegister from './MaterialRegister';
import RecordRegister from './RecordRegister';

type RegisterType = {
  register: Element
}

function Register() {
  const [link, setLink] = useState<string>("registro")

  const linkSwitch = (register:RegisterType) => ({
    "categoria" : <CategoryRegister/>,
    "materiais" : <MaterialRegister/>,
    "registro" :  <RecordRegister/>
  })




  const childToParent = (childdata: string) => {
    setLink(childdata);
  }

function handleChangeRegister(link:string){

  switch (link) {
    case "categoria":
      return <CategoryRegister/>;
    case "materiais":
      return <MaterialRegister/>;
    case "registro":
      return <RecordRegister/>;  
  }

}
  return (
      <main className="flex flex-col items-center pt-10 gap-10">
        <RegisterMenu childToParent={childToParent}/>
        {
            handleChangeRegister(link)
        }
      </main>
  );
}

export default Register;
