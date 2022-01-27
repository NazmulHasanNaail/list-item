import { useState } from 'react';
import ListItem from './ListItem';
function Lists() {

  const [item, setItem] = useState({
    lists : [],
    inputData : '',
  })

  function inputhandle (event) {
    setItem({
      lists : [...item.lists],
      inputData : event.target.value,
    })
  }

  function submithandle(event){
    event.preventDefault();
    let prevItem = item.lists;

    setItem({
      lists : [...prevItem, item.inputData],
      inputData : '',
    })

  }

  function deleteHandle (id){
    let delteItem = item.lists.filter((item, index)=> id !== index );
    setItem({
        lists : [...delteItem],
        inputData : '',
      })
  }


  return (
    <>
      <div className="list-container">
        <form className='list-header' onSubmit={submithandle} >
            <input type='text' placeholder='type your list'value={item.inputData} onChange={inputhandle} />
            <button type='submit'>Add</button>
        </form>
        <ListItem data={item.lists} deleteHandle={deleteHandle} />
      </div>
    </>
  );
}

export default Lists;