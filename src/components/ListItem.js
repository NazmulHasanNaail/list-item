function ListItem({data, deleteHandle}) {

  return (
    <ul className='list-box'>
    {data.map((item, index)=> <li key={index} > {item} <button  onClick={()=>deleteHandle(index)} >delete</button> </li>)}
    </ul>
  );
}

export default ListItem;