import Child from './Child'
import './styles.css'
const Parent = () => {
    return(
        <div>
            <h1 className='myText'>Parent</h1>
            <Child />
        </div>
    )
}
export default Parent