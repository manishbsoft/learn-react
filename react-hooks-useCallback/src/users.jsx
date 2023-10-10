
const Users = (props) => {
    const { users } = props;
    // console.log('users-rendered!!!')
    return (
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
    )
}

export default Users;