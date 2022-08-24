import React from "react";
import { useSelector } from "react-redux";
import Formation from "../Formation";

const FormationList = () => {
  const formations = useSelector((state) => state.formationReducer.formations);
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",margin:"20px"}}>
      {formations.map((el) => (
        <Formation el={el} key={el._id} />
      ))}
    </div>
  );
};

export default FormationList;