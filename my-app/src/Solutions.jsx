import { useState } from "react";

const Solution = ({ menuConfig }) => {
  const [listExpand, setListExpand] = useState(
    Array(menuConfig.length).fill(true)
  );

  return (
    <>
      {menuConfig.map((menu, index) => {
        return (
          <FirstLevel
            menu={menu}
            key={index}
            listExpand={listExpand}
            setListExpand={setListExpand}
            currentIndex={index}
          />
        );
      })}
    </>
  );
};

const FirstLevel = ({ menu, listExpand, setListExpand, currentIndex }) => {
  const handleClick = (currentIndex) => {
    setListExpand(
      listExpand.map((item, index) => {
        if (index === currentIndex) return !item;
        else return true;
      })
    );
  };

  return (
    <div>
      {menu.title + " "}{" "}
      {menu.subItems != undefined && (
        <>
          <button
            onClick={() => {
              handleClick(currentIndex);
            }}
          >
            {listExpand[currentIndex] ? "Expand" : "Hide"}
          </button>
          <ul>
            {!listExpand[currentIndex] &&
              menu.subItems.map((subItem, index) => {
                return <li key={index}>{subItem}</li>;
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Solution;
