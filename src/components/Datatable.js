import React from 'react'

import names from '../names.json'

const Datatable = () => {
  return (
    <div>
      {JSON.stringify(names)}
    </div>
  )
}

export default Datatable
