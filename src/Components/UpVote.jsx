import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from "react-icons/fa";

const Upvote = ({ onToggle }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onToggle(!selected);
  };

  return (
    <FaArrowUp
      style={{
        backgroundColor: selected ? "#E5E8FD" : "#F4F6F8",
        padding: "8px",
        borderRadius: "4px",
        margin: "8px",
      }}
      onClick={handleClick}
      color={selected ? "#253CF2" : "#343A40" }
    />
  );
};

Upvote.propTypes = {
    onToggle: PropTypes.func.isRequired,
  };

export default Upvote;

// import { useState } from 'react';

// const UpVoteComponent = () => {
//     const [selected, setSelected] = useState(false);

//   return (
//     <div>
//       <FaArrowUp
//         style={{
//           backgroundColor: group.active
//             ? group.activeBackGroundColor
//             : group.inActiveBackGroundColor,
//           padding: "8px",
//           borderRadius: "4px",
//           margin: "8px",
//         }}
//         key={upvote.id}
//         onClick={() => arrowState(group.id)}
//         color={group.active ? group.activeColor : group.inActiveColor}
//       />
//     </div>
//   );
// };

// export default UpVoteComponent;