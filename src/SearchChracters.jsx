import { useState } from "react";
import useSearchLocations from "./useSearchLocations";

const SearchChracters = () => {
  const [name, setName] = useState("");

  const { loading, error, data, called, getLocations } =
    useSearchLocations(name);

  console.log(loading, error, data, called);

  return (
    <div>
      <h3>Search at characters</h3>
      <hr />
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="search..."
          style={{ padding: "10px" }}
        />
      </div>
      <button onClick={() => getLocations()}>Search</button>
    </div>
  );
};

export default SearchChracters;
