import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {
            results.map((result)=>(
                <div key={result.key}>
                    <h2>{result.original_title}</h2>
                </div>
            ))
        }
    </div>
  )
}
