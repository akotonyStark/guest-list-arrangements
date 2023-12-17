import React, { useEffect, useState } from "react";
function GuestList({guests}) {

  const [guestList, setguestList] = useState([]);


useEffect(() => {
    setguestList(guests)
}, [])

const  onDragStart = (evt) => {
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
      if (item.id.toString() === guestID.toString()) {
        item.tableID = tableID;
        item.assigned = isAssigned
      }
      return item;
    });
    // console.log(updated)
    setguestList(updated);
  };

 
    // const tasks  = state;
    // console.log("tasks", tasks);
    // let pending = tasks.filter((data) => data.status === "In Progress");
    // let done = tasks.filter((data) => data.status === "Completed");
    // let newOrder = tasks.filter((data) => data.status === "New Order");
    // let waiting = tasks.filter((data) => data.status === "Delivered");

    return (
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
                  <button style={{width:"100%" }}>+</button>
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

        <div
          className="pending small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "1")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Table 1</h4>
                  <button style={{width:"100%", marginBottom: 10  }}>+</button>
                  {guestList?.filter((item) => item.tableID == 1).map((task, idx) => (
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
        </div>
       
        <div
          className="done small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, true, "2")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row" >
                  <h4>Table 2</h4>
                  <button style={{width:"100%", marginBottom: 10 }}>+</button>
              
                  {guestList?.filter((item) => item.tableID == 2).map((task, idx) => (
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
        </div>

        <div
          className="done small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, true, "3")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Table 3</h4>
                  <button style={{width:"100%", marginBottom: 10  }}>+</button>
                  {guestList?.filter((item) => item.tableID == 3).map((task, idx) => (
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
        </div>

      </div>
    );
  }


export default GuestList;
