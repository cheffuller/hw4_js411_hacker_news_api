function SelectedFor({ props }) {
  return (
    <label>
      <select name='selectedFor' className='Dropdown'  value={props.selectedFor} onChange={(e) => props.setSelectedFor(e.target.value)}>
        <option value=''>All time</option>
        <option value={86400}>Last 24h</option>
        <option value={604800}>Past Week</option>
        <option value={2628000}>Past Month</option>
        <option value={31556952}>Past Year</option>
      </select>
    </label>
  );
}

export default SelectedFor;
