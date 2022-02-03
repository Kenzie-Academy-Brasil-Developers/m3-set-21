const List = ({ countryList }) => {
  /** Em condições aninhadas é interessante tratar os dados antes */

  const filteredcountries = countryList.filter(
    (item) => item.population >= 5000000
  );

  return (
    <>
      <h2>Lista de países</h2>

      <ul>
        {filteredcountries.map((item) => (
          <li key={item.country}>
            País: {item.country} - População: {item.population}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
