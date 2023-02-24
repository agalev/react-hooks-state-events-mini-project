import React, { useState } from 'react'

function CategoryFilter({ CATEGORIES, handleCatButton }) {
	const [buttonClass, setButtonClass] = useState('')

	function handleClick(e) {
		let wantedButton = arrayOfButtons.find(
			(button) => button.key === e.target.id
		)
		setButtonClass(wantedButton.key)
		handleCatButton(e)
	}
	let arrayOfButtons = CATEGORIES.map((cat) => (
		<button
			className={cat === buttonClass ? 'selected' : null}
			onClick={handleClick}
			id={cat}
			key={cat}
		>
			{cat}
		</button>
	))

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{arrayOfButtons}
		</div>
	)
}
export default CategoryFilter
