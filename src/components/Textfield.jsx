

function Textfield({label, name, type, ...rest}) {
  return (
    <div className="flex gap-4 items-center">
      <label
        htmlFor={name}
        className="font-open text-xl font-semibold text-gray-400"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
       {...rest}
        className="font-open text-center text-gray-400 rounded-md drop-shadow-sm pl-2 py-1 outline-orange-300 border-orange-200 hover:border-orange-300 border-2 transition-all"
      />
    </div>
  );
}


export default Textfield;