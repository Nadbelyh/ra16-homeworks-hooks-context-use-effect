import useJsonFetch from "../../hooks/useJsonFetch";

export function LoadingData() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && <div>Data: {JSON.stringify(data)}</div>}
    </>
  );
}

export default LoadingData;
