function ListRender(){
    const items=["apple","Banana","Orange"];
    return(
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default ListRender;