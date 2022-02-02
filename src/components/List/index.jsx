const List = ({ list, logName }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.name} onClick={() => logName(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
