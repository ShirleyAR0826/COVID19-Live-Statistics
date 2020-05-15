import React from 'react';

const Global = ({globalSummary}) => {
    return(
            <div>
                <h2>Global Summary</h2>
                {Object.keys(globalSummary).map((key) =>{
                   return(
                    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>  
                    <h1>{globalSummary[key].toLocaleString()}</h1>
                    <p>{key}</p>
                    </div>
                   )
                })
                }
            </div>
    );
}

export default Global;