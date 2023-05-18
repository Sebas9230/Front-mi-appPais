import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { authFirebase } from '../Views/firebase';
//Para navegar en las rutas
import { useNavigate } from 'react-router-dom';

const NavBar = () => {


    const handleLogout = () => {
        authFirebase.signOut();
    };

    const handleHome = () => {
        window.location.href = `/homeAdmin`;
       
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Button type="primary" icon={<LogoutOutlined />} onClick={handleHome}>
                Home
            </Button>

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