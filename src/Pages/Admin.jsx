import React from 'react'
import SideBar from '../Components/Admin/SideBar'
import Content from '../Components/Admin/Content'

const Admin = () => {
  return (
    <main className=' admin-page'>
        <SideBar/>
        <Content/>
    </main>
  )
}

export default Admin