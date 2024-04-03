import React from "react";
import '../style/youtube/Grid.css'

export const GridExercises: React.FC = () => {
    return (
     <div className="grid-container">
         <div className="container-2">col1</div>
         <div className="container-2">col2</div>
         <div className="container-2">col3</div>
         <div className="container-2">col4</div>
         <div className="container-2">col1</div>
         <div className="container-2">col2</div>
         <div className="container-2">col3</div>
         <div className="container-2">col4</div>
     </div>
    );
}

export default GridExercises;