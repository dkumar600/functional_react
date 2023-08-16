

// Subchild
import { useContext } from "react";
import { profileContext } from "./context/ProfileContext";

const SubChildD24B = () => {
  const { name, city } = useContext(profileContext);
  return (
    <div>
      <p>
        I am SubChildD D24A : {name} {city}
      </p>
    </div>
  );
};

export default SubChildD24B;
