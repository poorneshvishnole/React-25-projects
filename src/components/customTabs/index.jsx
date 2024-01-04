import { useState } from "react";
import "./style.css";

const data = [
  { id: 1, title: "Tab 1", text: "Google extension" },
  { id: 2, title: "Tab 2", text: "Microsoft word" },
  { id: 3, title: "Tab 3", text: "Picsart" },
];

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <div className="tabs">
        {data.map((el) => {
          return (
            <div
              className={`${activeTab === el.id ? "tab active-tab" : "tab"}`}
              key={el.id}
              onClick={() => handleClick(el.id)}
            >
              {el.title}
            </div>
          );
        })}
      </div>
      <p>{data[activeTab - 1].text}</p>
    </>
  );
};

export default CustomTabs;
