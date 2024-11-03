const Employee = (props) => {
  const { id, name, age, email } = props.data;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td> {age} </td>
      <td>{email}</td>
    </tr>
  );
};
export default Employee;
