function Input({ text, type, id }) {
  return (
    <div className="relative inline-block">
      <input
        className="w-full peer p-2 rounded-md border border-gray-600 text-sm text-gray-600 outline-none focus:border-2 focus:border-cyan-600"
        id={id}
        type={type}
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 bg-white cursor-text select-none
        peer-focus:left-2 peer-focus:top-0 peer-focus:px-1 peer-focus:font-medium peer-focus:text-xs peer-focus:text-cyan-600
        peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-xs
        transition-all ease-in-out"
      >
        {text}
      </label>
    </div>
  );
}

export default Input;
