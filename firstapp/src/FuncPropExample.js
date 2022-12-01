function FuncPropExample(props){
    console.log(props)
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}
export default FuncPropExample