import * as React from "react";
import { useState, useEffect } from "react";
import { useDataProvider, Loading, Error } from "react-admin";

const UserProfile = ({ userId }) => {
  const dataProvider = useDataProvider();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getOne("users", { id: userId })
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [dataProvider, userId]);
  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      {!user && null}
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
