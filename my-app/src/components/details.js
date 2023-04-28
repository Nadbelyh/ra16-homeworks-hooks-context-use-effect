import { useState, useEffect } from "react";

function Details({ info }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      ` https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, [info.id]);

  return (
    <div className="info">
      {!loading && data && (
        <div style={{ width: "18rem" }}>
          <img src={data.avatar} alt="avatar" className="avatar" />
          <div>
            <div className="info-row">{data.name}</div>
            <div className="info-row">City: {data.details.city}</div>
            <div className="info-row">Company: {data.details.company}</div>
            <div className="info-row">Position: {data.details.position}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
