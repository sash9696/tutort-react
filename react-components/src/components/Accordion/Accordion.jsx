import { useState } from "react";
import "./Accordion.css";
import { RiAddLine } from "react-icons/ri";

let accordionData = [
  {
    id: 1,
    title: "React is not a framework",
    accordionContent:
      "Even professional react developers say that React is a javascript framework but as per react's docs it is not true.",
  },
  {
    id: 2,
    title: "React has a strong community",
    accordionContent: "This is a dummy data",
  },
  {
    id: 3,
    title: "Supports large ecosystem of libraries",
    accordionContent: "This is a dummy data two",
  },
];

// let array = [10,20,30];

// let arrayMultipliedBy2 = array.map(function(item, index, array){

//     console.log(`item ${item} is present at index: ${index} in array ${array}`)

//     return item * 2;
// })

// console.log(array);
// console.log(arrayMultipliedBy2);

function Accordion() {
  const [accActiveId, setActiveId] = useState();

  console.log(accActiveId);
  function handleClick(id) {
    if (accActiveId === id) {
      setActiveId();
    }
    setActiveId(id);
  }

  console.log("According rendered");

  return (
    <div className="accordionContainer">
      {accordionData.map(function (acc) {
        return (
          <div
            className="accordion"
            key={acc.id}
            onClick={() => handleClick(acc.id)}
          >
            <div className="accordionHeading">
              <span className="addIcon" style={{
                transform: `${
                    accActiveId === acc.id ? "rotate(45deg)" : "rotate(0deg)"
                }`
              }} >
                <RiAddLine size={25} />
              </span>
              <h3>{acc.title}</h3>
            </div>
            {accActiveId === acc.id ? (
              <div className="accordionContent">{acc.accordionContent}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
