import useJsonFetch from "../../hooks/useJsonFetch";

function ErrorData() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && <div>Data: {JSON.stringify(data)}</div>}
    </>
  );
}

export default ErrorData;
