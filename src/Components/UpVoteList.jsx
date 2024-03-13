import { useState, useEffect } from 'react';
import Upvote from './UpVote';
import { Row, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";


const UpvotesList = () => {
  const [groups, setGroups] = useState(() => {
    const savedGroups = localStorage.getItem('groups');
    return savedGroups ? JSON.parse(savedGroups) : [
        { id: 1, selected: false, upvotes: [1] },
        { id: 2, selected: false, upvotes: [1] },
        { id: 3, selected: false, upvotes: [1] },
    ]
  })

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const handleToggle = (groupId, index, isSelected) => {
    const updatedGroups = [...groups];
    updatedGroups.find(group => group.id === groupId).upvotes[index] = isSelected;
    setGroups(updatedGroups);
  };

  const handleAddUpvote = (groupId) => {
    const updatedGroups = [...groups];
    updatedGroups.find(group => group.id === groupId).upvotes.push(false);
    setGroups(updatedGroups);
  };

  return (
    <Container>
        {groups.map(group => (
            <Row key={group.id} style={{marginBottom : "8px"}}>
                 <div style={{ display: "flex", alignItems : "center", justifyContent: "flex-start"}}>
                    <div style={{ border: "2px solid #F4F6F8", marginRight: "10px", borderRadius: "16px", width: "500px"}}>
                        {group.upvotes.map((isSelected, index) => (
                            <Upvote 
                                key={index} 
                                onToggle={(isSelected) => handleToggle(group.id, index, isSelected)} 
                            />
                        ))}
                    </div>
                    <div>
                        <FaPlus 
                            style={{backgroundColor: "#F4F6F8", padding: "12px", borderRadius: "4px", marginRight: "8px"}}
                            color={"#343A40"} 
                            onClick={() => handleAddUpvote(group.id)} 
                        />
                    </div>
                 </div>
            </Row>
        ))}
    </Container>                
  );
};

export default UpvotesList;