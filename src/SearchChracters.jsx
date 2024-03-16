import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const SEARCH_LOCATIONS = gql`
  query getCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const SearchChracters = () => {
  const [getLocations, { loading, error, data, call }] = useQuery(
    SEARCH_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(loading, error, data);
  const [term, serTerm] = useState("");
  return (
    <div>
      <h3>Search at characters</h3>
      <hr />
      <div>
        <input
          value={term}
          onChange={(e) => serTerm(e.target.value)}
          type="text"
          placeholder="search..."
          style={{ padding: "10px" }}
        />
      </div>
      <button> Search</button>
    </div>
  );
};

export default SearchChracters;
