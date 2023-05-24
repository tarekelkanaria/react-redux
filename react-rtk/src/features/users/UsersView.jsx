import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UsersView = () => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {usersData.loading ? (
        <p>Loading...</p>
      ) : usersData.error ? (
        <p>{usersData.error}</p>
      ) : (
        usersData.users.length > 0 && (
          <ul>
            {usersData.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default UsersView;
