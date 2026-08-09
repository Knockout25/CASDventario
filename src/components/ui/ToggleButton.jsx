export default function ToggleButton({checked, onChange}) {
  return (
    <div>
      <input
        id="togglebtn"
        className="hidden peer"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        htmlFor="togglebtn"
        className="flex items-center relative w-10 h-5 rounded-4xl bg-black cursor-pointer transition-all ease-in-out peer-checked:bg-gray-500 after:content-[''] after:absolute after:top-1 after:left-1 after:w-3 after:h-3 after:bg-white peer-checked:after:bg-black after:rounded-full after:transition-all peer-checked:after:translate-x-5"
      ></label>
    </div>
  );
}
