import React, { useState } from "react";

const Example1 = () => {
  const [games, setGames] = useState([
    {
      id: 0,
      game: "cricket",
      checkboxStatus: false,
      deleteOption: false,
    },
    {
      id: 1,
      game: "hockey",
      checkboxStatus: false,
      deleteOption: false,
    },
    {
      id: 2,
      game: "football",
      checkboxStatus: false,
      deleteOption: false,
    },
  ]);

  const handleCheck = (e, currIndex) => {
    setGames(
      games.map((game, gmIndex) => {
        if (gmIndex === currIndex) {
          return {
            ...game,
            checkboxStatus: !game.checkboxStatus,
            deleteOption: !game.deleteOption,
          };
        } else return { ...game };
      })
    );
  };

  const handleDelete = (e, currIndex) => {
    setGames(games.filter((game, index) => currIndex !== index));
  };

  return (
    <div>
      {games.map((item, index) => (
        <div key={item?.id}>
          <input
            type="checkbox"
            onChange={(e) => handleCheck(e, index)}
            value={item.checkboxStatus}
          />
          <span>{item?.game}</span>
          {item?.deleteOption ? (
            <button onClick={(e) => handleDelete(e, index)}>delete</button>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Example1;
