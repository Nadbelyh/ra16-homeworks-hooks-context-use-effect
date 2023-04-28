import { useState } from "react";
import List from "./list";
import Details from "./details";

function Users() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <div className="container">
      <div className="col">
        <List onUserClick={setUserInfo} activeId={userInfo.id} />
      </div>
      <div className="col">
        {Object.keys(userInfo).length !== 0 && <Details info={userInfo} />}
      </div>
    </div>
  );
}

export default Users;
