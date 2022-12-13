
import { Menu } from "antd"

const AppHeader = () => {

  return (

    <div className="container-fluid">
        <div className="header1">
            <h1>Header</h1>
        </div>
        <div className="header">
            <div className="logo">
                <i class="fas fa-bolt"></i>
                <a>Tech</a>
            </div>  
            <Menu mode="horizontal" defaultSelectedKeys={['Home']}
                        breakpoint="lg"
                        collapsedWidth="0">
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
            <Menu.Item key="feature">Features</Menu.Item>
            </Menu>
        </div>
     
   </div>
  )
}

export default AppHeader
