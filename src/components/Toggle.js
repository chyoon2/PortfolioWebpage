import { useState } from "react";
import { Switch } from "@headlessui/react";

function Toggle({ setMoon }) {
  const [enabled, setEnabled] = useState(false);

  const manyfxn = () => {
    setEnabled(!enabled);
    if (enabled) {
      return setMoon("moon-off");
    } else {
      return setMoon("moon-on");
    }
  };

  return (
    <Switch
      checked={enabled}
      onChange={() => {
        manyfxn();
      }}
      className={`${
        enabled ? "bg-blue-300" : "bg-gray-500"
      } relative inline-flex items-center  h-7 rounded-full w-14 border-gray-50	border-opacity-1`}>
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          enabled
            ? "translate-x-8 ease-in-out duration-1000"
            : "translate-x-1 ease-in-out duration-1000"
        } relative ease-in ease-out inline-block w-5 h-5 transform bg-white rounded-full`}
      />
    </Switch>
  );
}
export default Toggle;
