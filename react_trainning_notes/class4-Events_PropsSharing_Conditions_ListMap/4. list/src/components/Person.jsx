const Person = () => {
  const names = ["Mark", "John", "Watson", "Albert"];
  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {/* <li>{ names[0] }</li>
                <li>{ names[1] }</li>
                <li>{ names[2] }</li> */}
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Person;
