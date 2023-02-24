import React from 'react'

function CategoryFilter({ CATEGORIES, handleCatButton }) {
	// const [buttonClass, setButtonClass] = useState('')

  function handleClick(e) {
    
    handleCatButton(e)
    let wantedButton = arrayOfButtons.find(button => button.key === e.target.id)
    console.log(wantedButton)
    
    // console.log(selectedButton)
  
    // setButtonClass({
    //   className: 'selected',
    //   onClick: {handleClick},
    //   id: wantedButton.id,
    //   key: wantedButton.key
    // })
  
  }
  
  let arrayOfButtons = CATEGORIES.map((cat) => (
    <button
      // className={buttonClass}
      onClick={handleClick}
      id={cat}
      key={cat}
    >
      {cat}
    </button>))

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{arrayOfButtons}
		</div>
	)
}

export default CategoryFilter
