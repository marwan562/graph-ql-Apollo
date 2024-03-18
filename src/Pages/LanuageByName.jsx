import { useParams } from "react-router-dom";
import Loading from "../HOC/Loading";
import { useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountry";

const LanuageByName = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, error, data } = useCountry(id);

  const countryResults = data?.language && (
    <div style={{ marginBottom: "15px" }}>
      <b>Name Country:</b> {data.language.name}
    </div>
  );

  return (
    <div>
      <h2>LanuageByName</h2>
      <hr />
      <Loading loading={loading} error={error}>
        {countryResults}
      </Loading>
      <button
        onClick={() => navigate("/countries", { replace: true })}
        style={{ color: "lightsalmon", cursor: "pointer" }}
      >
        Back to Countries
      </button>
    </div>
  );
};

export default LanuageByName;
