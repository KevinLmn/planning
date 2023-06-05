<<<<<<< HEAD
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> dev

const Board = () => {
  const [isChecked, setIsChecked] = useState<(boolean | undefined)[][]>([]);
  const boardX = [
    "Jour",
    "Tache 1",
    "Tache 2",
    "Tache 3",
    "Tache 4",
    "Tache 5",
    "Tache 6",
    "Tache 7",
    "Tache 8",
  ];
  const boardY = [
    "Tache",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const board = [];
  for (let i = 0; i < boardY.length; i++) {
    for (let j = 0; j < boardX.length; j++) {
      if (i === 0 && j === 0) {
        board.push(<span className="tasksAndDays">Days\Tasks</span>);
      } else if (i === 0) {
        board.push(<span className="tasksAndDays">{boardX[j]}</span>);
      } else if (j === 0) {
        board.push(<span className="tasksAndDays">{boardY[i]}</span>);
      } else {
        console.log(isChecked);
        const isCellChecked = isChecked[i] && isChecked[i][j];
        const toggleCellChecked = () => {
          const updatedChecked: (boolean | undefined)[][] = [...isChecked];
          updatedChecked[i] = updatedChecked[i] || [];
          updatedChecked[i][j] = !updatedChecked[i][j];
          setIsChecked(updatedChecked);
        };
        const cellClassName = isCellChecked
          ? "greenBox"
          : (i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)
          ? "blackBox"
          : "whiteBox";
        board.push(
          <span className={cellClassName} onClick={toggleCellChecked}></span>
        );
      }
    }
  }

  return <div id="checkBoard">{board}</div>;
};

export default Board;
