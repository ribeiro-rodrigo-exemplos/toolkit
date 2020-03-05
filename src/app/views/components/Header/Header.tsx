import * as React from 'react';
import {
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends React.Component {

    sidebarToggle(e: React.MouseEvent) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    sidebarMinimize(e: React.MouseEvent) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-minimized');
    }

    mobileSidebarToggle(e: React.MouseEvent) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    asideToggle(e: React.MouseEvent) {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    }

    render() {
        return (
            <header className="app-header navbar">
                <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
                    <span className="navbar-toggler-icon" />
                </NavbarToggler>
                <NavbarBrand href="#" />
                <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
                    <span className="navbar-toggler-icon" />
                </NavbarToggler>
                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink href="#">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <NavLink href="#">Configurações</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar />
            </header>
        );
    }
}

export default Header;
