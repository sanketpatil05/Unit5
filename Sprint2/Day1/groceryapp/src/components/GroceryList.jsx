export function Groce({List,deleteitem}){
    return(
        
        <div id="divC">
            {List.title}
            <button onClick={()=>(deleteitem(List.id))}>Delete</button>
           
        </div>
        
    )
}