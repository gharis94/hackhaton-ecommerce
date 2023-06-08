import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <section>
        <h2>Update</h2>
        {children}
    </section>
  )
}

export default layout