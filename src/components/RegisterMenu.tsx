
import { useState } from 'react';
import { Link } from 'react-router-dom'

type childData = {
    childToParent: (newType: string) => void;
}


function RegisterMenu({childToParent}:childData ) {

    return (
        <div
            className='w-full flex gap-10 justify-around mb-10 font-open  text-md font-semibold rounded-br-xl rounded-bl-xl bg-light-blue shadow-inner shadow-white'
        >
            <button
                className='w-full hover:bg-gray-300  transition-all rounded-b-xl shadow-inner shadow-white'
                id={"category"}
                onClick={() => childToParent("categoria")}>Categoria</button>
            <button
                className='w-full hover:bg-gray-300  transition-all rounded-b-xl shadow-inner shadow-white'
                id={"materiais"}
                onClick={() => childToParent("materiais")}>Materiais</button>
            <button
                className='w-full hover:bg-gray-300  transition-all rounded-b-xl shadow-inner shadow-white'
                id={"registro"}
                onClick={() => childToParent("registro")}>Registro</button>
        </div>
    )
}

export default RegisterMenu;