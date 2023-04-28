import Users from "./components/users";
import SuccessfulData from "./components/jsonFetch/successfulData";
import ErrorData from "./components/jsonFetch/errorData";
import LoadingData from "./components/jsonFetch/loadingData";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Users />
      <div>
        <SuccessfulData />
        <ErrorData />
        <LoadingData />
      </div>
    </div>
  );
}

export default App;
