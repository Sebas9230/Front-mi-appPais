import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import {auth} from '../Views/firebase';

const NavBar = () => {
    const handleLogout = () => {
        auth.signOut();
    };
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Ejercicio React</a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Button>
        </nav>
    );
}

export default NavBar;