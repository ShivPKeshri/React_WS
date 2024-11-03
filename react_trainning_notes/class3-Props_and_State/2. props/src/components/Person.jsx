const Person = (props) => {
    console.log(props)
    let a = "hello"
    return(
        <div>
            <h1>My name is { props.name }</h1>
        </div>
    )
}
export default Person;