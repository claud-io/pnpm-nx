import { createRoot } from "react-dom/client";
import { configurations } from "tools";
import { ConfigurationsList } from "components";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <p>tools dep</p>
    {configurations.map((c) => (
      <p>{c}</p>
    ))}
    <p>components dep</p>
    <ConfigurationsList />
  </div>
);
