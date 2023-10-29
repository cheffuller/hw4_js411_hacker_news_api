function SelectedBy({ props }) {
  return (
    <label>
      <select name='selectedBy' className='Dropdown' value={props.selectedBy} onChange={(e) => props.setSelectedBy(e.target.value)}>
        <option value=''>Popularity</option>
        <option value='_by_date'>Date</option>
      </select>
    </label>
  );
}

export default SelectedBy;
