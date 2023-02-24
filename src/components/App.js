import React, { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

import { CATEGORIES, TASKS } from '../data'
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
  let data = TASKS
	const [taskList, setTaskList] = useState(TASKS)
	const [formData, setFormData] = useState({
		text: '',
		category: 'Code'
	})
	const handleDelete = (event) => {
		const newList = taskList.filter((task) => task.text !== event.target.id)
		setTaskList(newList)
	}

	const handleCatButton = (event) => {
		const catFilter =
			event.target.id === 'All'
				? data
				: data.filter((task) => task.category === event.target.id)
		setTaskList(catFilter)
	}

	function onTaskFormSubmit(e) {
		e.preventDefault()

    data.push(formData)
		setTaskList([...data])
	}

	function handleFieldChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	return (
		<div className='App'>
			<h2>My tasks</h2>
			<CategoryFilter
				CATEGORIES={CATEGORIES}
				handleCatButton={handleCatButton}
			/>
			<NewTaskForm
				CATEGORIES={CATEGORIES}
				formData={formData}
				onTaskFormSubmit={onTaskFormSubmit}
				handleFieldChange={handleFieldChange}
			/>
			<TaskList tasks={taskList} onDelete={handleDelete} />
		</div>
	)
}

export default App
