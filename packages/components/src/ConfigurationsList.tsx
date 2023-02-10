import { configurations } from "tools";

export const ConfigurationsList = () => {
  return (
    <ul>
      {configurations.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
};
export default ConfigurationsList;
