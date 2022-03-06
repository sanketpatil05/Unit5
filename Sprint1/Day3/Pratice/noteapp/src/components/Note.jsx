export function Note(props){
    const {value} = props;
    console.log(props)
    return (
        <div>
            <h3>{props.value.title}</h3>
             <h3>{value.date}</h3>
             <p>{value.data}</p>
        </div>
    )
}