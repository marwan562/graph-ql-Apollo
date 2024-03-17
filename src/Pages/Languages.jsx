import { useQuery, gql } from "@apollo/client";
import Loading from "../HOC/Loading";
import { useNavigate } from "react-router-dom";

const GET_LANGUAGES = gql`
  query {
    languages {
      code
      name
      native
    }
  }
`;

const Languages = () => {
  const { loading, error, data } = useQuery(GET_LANGUAGES);
  const navigate = useNavigate();

  const handleClickToLanguage = (country) => {
    navigate(`/country/${country.code}`);
  };
  const countriesResults =
    data?.languages.length > 0 &&
    data?.languages.map((country, inx) => {
      return (
        <div
          style={{
            border: "1px solid",
          }}
          key={inx}
        >
          <h2>
            {++inx}: {country.code}
          </h2>
          <ul>
            <li>
              <b>Native: </b>
              {country.native}
            </li>
          </ul>

          <button
            onClick={() => handleClickToLanguage(country)}
            style={{ color: "brown", cursor: "pointer" }}
          >
            Click to show result about {country.name}..!
          </button>
        </div>
      );
    });
  return (
    <div>
      <h1>Countries</h1>
      <hr />
      <div className="">
        <Loading loading={loading} error={error}>
          {countriesResults}
        </Loading>
      </div>
    </div>
  );
};

export default Languages;
