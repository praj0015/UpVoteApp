import './App.css';
import UpvotesList from './Components/UpVoteList';
// import { FaArrowUp, FaPlus } from "react-icons/fa";
// import { useState, useEffect } from 'react';
// import { Row, Container } from "react-bootstrap";

function App() {
  
  // const [groups, setGroups] = useState(() => {
  //   const savedGroups = localStorage.getItem('groups');
  //   return savedGroups ? JSON.parse(savedGroups) : [
  //     {
  //       id: 1,
  //       name: "group1",
  //       active: false,
  //       activeBackGroundColor : "#E5E8FD",
  //       inActiveBackGroundColor : "#F4F6F8",
  //       activeColor: "#253CF2",
  //       inActiveColor: "#343A40",
  //       upvotes: [
  //         { id: 1 }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: "group2",
  //       active: false,
  //       activeBackGroundColor : "#E5E8FD",
  //       inActiveBackGroundColor : "#F4F6F8",
  //       activeColor: "#253CF2",
  //       inActiveColor: "#343A40",
  //       upvotes: [
  //         { id: 1 }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       name: "group3",
  //       active: false,
  //       activeBackGroundColor : "#E5E8FD",
  //       inActiveBackGroundColor : "#F4F6F8",
  //       activeColor: "#253CF2",
  //       inActiveColor: "#343A40",
  //       upvotes: [
  //         { id: 1 }
  //       ]
  //     },
  //   ]
  // });

  // useEffect(() => {
  //   localStorage.setItem('groups', JSON.stringify(groups));
  // }, [groups]);

  // const arrowState = (groupId) => {
  //   setGroups((prevGroups) =>
  //     prevGroups.map((group) =>
  //       group.id === groupId ? 
  //       { ...group, active: !group.active } 
  //       : group
  //     )
  //   );
  // };

  // const addUpVotes = (groupId) => {
  //   setGroups((prevGroups) => 
  //     prevGroups.map((group) => 
  //       group.id == groupId ? {...group, upvotes: [ ...group.upvotes, { id: group.upvotes.length + 1 } ]} : group
  //     )
  //   );
  // }

  return (
    <>
    <UpvotesList />
     {/* <Container>
        {groups.map((group) => (
          <Row key={group.id} style={{marginBottom : "8px"}}>
            <div style={{ display: "flex", alignItems : "center", justifyContent: "flex-start"}}>
                <div style={{ border: "2px solid #F4F6F8", marginRight: "10px", borderRadius: "16px", width: "500px"}}>
                  {group.upvotes.map((upvote) => (
                      
                  ))}
               </div>
              <div>
                <FaPlus 
                  style={{backgroundColor: "#F4F6F8", padding: "12px", borderRadius: "4px", marginRight: "8px"}}
                  color={"#343A40"} 
                  onClick={() => addUpVotes(group.id)} 
                />
              </div>
            </div>
          </Row>
        ))}
      </Container> */}
    </>
  );
}

export default App;
