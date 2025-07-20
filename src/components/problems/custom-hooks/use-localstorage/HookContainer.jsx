import useLocalStorage from "./useLocalStorage";

const HookContainer = () => {
  const [value, setValue] = useLocalStorage("KEY1", "empty");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Hook Container</h2>

      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="bg-transparent border border-black rounded-md p-2 text-xl font-semibold "
        />
      </div>
    </div>
  );
};

export default HookContainer;
