import MenuItem from "./item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, i) => <MenuItem item={listItem} key={i} />)
        : null}
    </ul>
  );
};

export default MenuList;
