export function Groce({List,deleteitem,toggle}){
    return(
        
        <div id="divC">
            {List.title}
            <button onClick={()=>(deleteitem(List.id))}>Delete</button>
           
        </div>
        
    )
}