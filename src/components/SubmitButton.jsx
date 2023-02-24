export function SubmitButton({title, ...rest}) {
  return (
      <button
        {...rest}
        className="bg-orange-300 py-2 px-3 rounded-xl font-open font-semibold text-xl text-gray-400 drop-shadow-md hover:text-gray-500 hover:bg-orange-400 transition-all"
      >{title}
      </button>
  );
}
