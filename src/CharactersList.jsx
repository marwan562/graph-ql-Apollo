import { gql } from "@apollo/client";
import useCharactersF from "./hooks/useCharactersF";
import { Link } from "react-router-dom";
import Loading from "./HOC/Loading";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useCharactersF(GET_CHARACTERS);

  const handelCharacters = data?.characters?.results.map((el) => {
    return (
      <div key={el.id}>
        <p>{el.name}</p>
        <Link to={`/${el.id}`}>
          <img src={el.image} alt={el.name} />
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>CharactersList</h3>
        <Link to="/search">
          <button
            style={{
              padding: "15px",
              cursor: "pointer",
              backgroundColor: "yellow",
            }}
          >
            Go to search
          </button>
        </Link>
      </div>
      <hr />

      <div className="characters">
        <Loading loading={loading} error={error}>
          {handelCharacters}
        </Loading>
      </div>
    </div>
  );
};

export default CharactersList;
