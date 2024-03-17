import { useState } from "react";
import useSearchCountry from "../hooks/useSearchCountry";
import Loading from "../HOC/Loading";

const LanguageSearch = () => {
  const [search, setSearch] = useState("");
  const { loading, error, data, getSearchLanguage } = useSearchCountry(search);

  const searchData = data?.languages.map((language) => {
    return (
      <div key={language.code}>
        <ol>
          <li>
            <b>Code:</b> {language.code}
          </li>
          <li>
            <b>Name:</b> {language.name}
          </li>
          <li>
            <b>Native:</b> {language.native}
          </li>
        </ol>
      </div>
    );
  });

  console.log(data);
  return (
    <div>
      <h2>LanguageSearch</h2>
      <hr />
      <input
        type="text"
        placeholder="Enter Code Country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => getSearchLanguage()}
        style={{ marginBottom: "20px", cursor: "pointer" }}
        disabled={!search}
      >
        Click
      </button>
      <Loading loading={loading} error={error}>
        {searchData}
      </Loading>
    </div>
  );
};

export default LanguageSearch;
