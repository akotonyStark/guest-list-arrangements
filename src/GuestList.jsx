import React, { useEffect, useRef, useState } from "react";
import { FaBeer, FaPencilAlt, FaSave, FaTrash } from "react-icons/fa";

const styles = {
  input: {
    background: 'none', border: 'none', marginBottom: 10, padding: 5,
    color: '#416183', textAlign: 'center', textTransform: 'uppercase',
    marginRight: 10, fontWeight: 700, width: '80%'
  }
}
function GuestList({ guests }) {

  const [guestList, setguestList] = useState([]);
  const [tablesList, setTables] = useState([{ tableID: 1, name: `Groom's Family`, isEdit: false }, { tableID: 2, name: `Bride's Family`, isEdit: false }])


  useEffect(() => {
    setguestList(guests)
  }, [])

  const onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };


  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = (evt, value, tableID, isAssigned = true) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let guestID = evt.dataTransfer.getData("text/plain");
    console.log(guestID, "Guest ID")
    console.log(tableID, "Destination Table")
    let list = [...guestList];
    console.log(list, 'List')

    let updated = list.map((item) => {
      if (item.id == guestID) {
        item.tableID = tableID;
        item.assigned = isAssigned
      }
      return item;
    });
    // console.log(updated)
    setguestList(updated);
  };

  const handleAddTable = () => {
    let newTable = { tableID: tablesList.length + 1, name: '' }
    setTables([...tablesList, newTable])
  }

  const handleTableEdit = (e, tableID, index) => {

    let list = [...tablesList];
    list[index][e.target.name] = e.target.value

    let updated = list.map((item) => {
      if (item.tableID == tableID) {
        item.isEdit = true;
      }
      return item;
    });
    //console.log(updated)
    setTables(updated);
  }

  const handleSaveData = (tableID, index) => {
    // console.log(tableID, index)
    let list = [...tablesList];
    let updated = list.map((item) => {
      if (item.tableID == tableID) {
        item.isEdit = false;
      }
      return item;
    });
    console.log(updated)
    setTables(updated);
  }

  const deleteTable = (table) => {
    if(tablesList.length > 1){
      let filtered = tablesList.filter((x) => x.tableID != table.tableID)
      setTables(filtered)
    }
    else{
      alert('You can not delete all your tables. You need at least one table for your guests')
    }

  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gap: 50, }}>

      {/* Overall guest List  */}
      <div className="container">
        <div
          className="order small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "New Order", false)}
        >
          <section className="drag_container ">
            <div className="container">

              <div className="drag_column">

                <div className=" main-list">
                  <h4>Guest List</h4>
                  <button style={{ width: "100%", }}>Reset</button>
                  <div className="main-list">
                    {guestList?.filter((item) => item.assigned == false).map((task, idx) => (
                      <div
                        className="card"
                        key={idx}
                        id={task.id}
                        draggable
                        onDragStart={(e) => onDragStart(e)}
                        onDragEnd={(e) => onDragEnd(e)}
                      >
                        <div className="img">
                          <img src={task.image()} alt="box" />
                        </div>
                        <div className="card_right">
                          <div className="status">{task.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="tables-section">
        {tablesList.map((table, index) => (
          <div
            key={table.tableID}
            className="done small-box"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, true, table.tableID)}
          >
            <section className="drag_container">
              <div className="container">
                <div className="drag_column">
                  <div className="drag_row" >
                    <div>
                      <input name="name" type="text" value={table.name || `Table ${table.tableID}`}
                        style={styles.input} onChange={(e) => handleTableEdit(e, table.tableID, index)} />
                      {table?.isEdit == true ? <FaSave style={{ cursor: 'pointer' }} color="green" onClick={() => handleSaveData(table.tableID, index)} /> :
                       <><FaPencilAlt htmlFor="table_name"
                       color="#416183" onClick={(e) => handleTableEdit(e, table.tableID, index)} style={{ cursor: 'pointer', marginRight: 10 }} title="Click to Edit Table Name" />
                       <FaTrash color="darkred" onClick={() => deleteTable(table)} style={{cursor:'pointer'}}/></>  }
                    </div>

                    <button style={{ width: "100%", marginBottom: 10 }} onClick={handleAddTable}>+</button>

                    {guestList?.filter((item) => item.tableID == table.tableID).map((task, idx) => (
                      <div
                        className="card"
                        key={idx}
                        id={task.id}
                        draggable
                        onDragStart={(e) => onDragStart(e)}
                        onDragEnd={(e) => onDragEnd(e)}
                      >
                        <div className="img">
                          <img src={task.image()} alt="box" />
                        </div>
                        <div className="card_right">
                          <div className="status">{task.name}</div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </section>
          </div>))}


      </div>

    </div>

  );
}


export default GuestList;
