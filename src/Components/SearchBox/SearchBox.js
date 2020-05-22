import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <div className="pt5">
                <h2>By Country Summary</h2>
            </div>
            <div className='pa2'>
                <input className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='Search Country'
                onChange={searchChange}
                />
            </div>
        </div>
    )
}

export default SearchBox;