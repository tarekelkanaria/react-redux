/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const UsersContainer = ({ fetchUsersData, usersData }) => {
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>
      {usersData.loading ? (
        <h2>Loading...</h2>
      ) : usersData.error ? (
        <h2>{usersData.error}</h2>
      ) : (
        usersData.users &&
        usersData.users.length > 0 && (
          <>
            <h2>Users List</h2>{" "}
            <div>
              {usersData.users.map((user) => (
                <p key={user.name}>{user.name}</p>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersData: () => dispatch(fetchUsers()),
  };
};

const UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersList;
