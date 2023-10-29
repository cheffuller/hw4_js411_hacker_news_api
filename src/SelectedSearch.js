function SelectedSearch({props}) {

  const changeHandler = async (e) => {
    await props.setSelectedSearch(e.target.value)
  }

  return (
    <label>
      <select name='selectedSearch' className='Dropdown' value={props.selectedSearch} onChange={(e) => changeHandler(e)}>
        <option value=''>All</option>
        <option value='&tags=story'>Stories</option>
        <option value='&tags=comment'>Comments</option>
        <option value='&tags=ask_hn'>Ask HN</option>
        <option value='&tags=show_hn'>Show HN</option>
        <option value='&tags=poll'>Polls</option>
      </select>
    </label>
  );
}

export default SelectedSearch;
