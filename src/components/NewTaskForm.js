import React from 'react'

function NewTaskForm({ CATEGORIES, formData, handleFieldChange, onTaskFormSubmit }) {
  const catFilter = CATEGORIES.filter(cat => cat !== 'All')
	return (
		<form className='new-task-form' onSubmit={onTaskFormSubmit}>
			<label>
				Details
				<input type='text' name='text' value={formData.text} onChange={handleFieldChange} />
			</label>
			<label>
				Category
				<select name='category' onChange={handleFieldChange}>
					{catFilter.map((cat) => (
						<option key={cat} onChange={handleFieldChange}>{cat}</option>
					))}
				</select>
			</label>
			<input type='submit' value='Add task' />
		</form>
	)
}

export default NewTaskForm
