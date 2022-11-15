import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`name entered =>`, name);

    axios
      .post("/api/1", name)
      .then((response) => {
        console.log(`Post Success: Response =>`, response);
      })
      .catch((error) => {
        console.log(`fetch Failed: Error Below`);
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
