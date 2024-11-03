import Employee from "./Employee";

const Employees = () => {
  const data = [
    { id: 1, name: "John", age: 30, email: "james@gmail.com" },
    { id: 2, name: "Paul", age: 30, email: "paul@gmail.com" },
    { id: 3, name: "Watson", age: 30, email: "watson@gmail.com" },
  ];

  return (
    <div>
      <h2 className="text-center">All Employees</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <Employee data={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Employees;
