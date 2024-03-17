import { useParams } from "react-router-dom";
import useCharacter from "./hooks/useCharacter";
import Loading from "./HOC/Loading";

const CharacterById = () => {
  let { id } = useParams();
  const { loading, error, data, getCharacter } = useCharacter(id);

  const handelCharacters = data?.character && (
    <div className="character" key={data.character.id}>
      <img src={data.character.image} alt="ll" width={750} height={750} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>
          {data.character.gender === "Male" ? "He is Male" : "She is Female"}
        </p>
        <div className="character-episode">
          {data.character.episode.map((el, inx) => {
            return (
              <div key={inx}>
                {el.name} - {el.episode}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h3>CharactersList</h3>
      <hr />

      <div className="characters">
        <Loading loading={loading} error={error}>
          <h2>Click button to show {data?.character?.name} </h2>
          <button onClick={() => getCharacter()}>Click</button>
          {handelCharacters}
        </Loading>
      </div>
    </div>
  );
};

export default CharacterById;
