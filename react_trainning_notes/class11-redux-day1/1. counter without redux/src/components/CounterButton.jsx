const CounterButton = (props) => {
  return (
    <div>
      <button onClick={props.handleIncrement} className="btn btn-primary">
        Increment
      </button>
      <button onClick={props.handleDecrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};
export default CounterButton;
