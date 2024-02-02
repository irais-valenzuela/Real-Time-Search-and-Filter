const CoffeeTempFilter = ({ handleSelect }) => {
  return (
    <div>
      <label htmlFor="coffeeTemp">Coffee Temp</label>
      <br />
      <select id="coffeeTemp" onChange={handleSelect}>
        <option value="">Select</option>
        <option value="iced">Iced</option>
        <option value="hot">Hot</option>
      </select>
    </div>
  );
};

export default CoffeeTempFilter;
