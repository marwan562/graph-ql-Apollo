import { Link } from "react-router-dom";
import WithGuard from "./HOC/WithGuard";

function App() {
  return (
    <div>
      <h1>graph-ql Apollo</h1>
      <WithGuard>
        <Link to="/countries">
          <button
            style={{
              textAlign: "center",
              backgroundColor: "red",
              cursor: "pointer",
            }}
          >
            Click to Go Countries
          </button>
        </Link>
      </WithGuard>
    </div>
  );
}

export default App;
