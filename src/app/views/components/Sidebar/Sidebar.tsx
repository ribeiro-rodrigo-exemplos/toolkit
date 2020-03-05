import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';

class Sidebar extends React.Component {
    handleClick(e: any) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
    }

    activeRoute(routeName: any, props: any) {
        return props.location.pathname.indexOf(routeName) > -1
            ? 'nav-item nav-dropdown open'
            : 'nav-item nav-dropdown';
    }

    render() {
        const props = this.props;
        const activeRoute = this.activeRoute;
        const handleClick = this.handleClick;

        // badge addon to NavItem
        const badge = (badge: any) => {
            if (badge) {
                const classes = classNames(badge.class);
                return (
                    <Badge className={classes} color={badge.variant}>
                        {badge.text}
                    </Badge>
                );
            }

            return null;
        };

        // simple wrapper for nav-title item
        const wrapper = (item: any) => {
            return item.wrapper && item.wrapper.element
                ? React.createElement(
                    item.wrapper.element,
                    item.wrapper.attributes,
                    item.name,
                )
                : item.name;
        };

        // nav list section title
        const title = (title: any, key: number) => {
            const classes = classNames('nav-title', title.class);
            return (
                <li key={key} className={classes}>
                    {wrapper(title)}{' '}
                </li>
            );
        };

        // nav list divider
        const divider = (divider: any, key: number) => {
            const classes = classNames('divider', divider.class);
            return <li key={key} className={classes} />;
        };

        // nav item with nav link
        const navItem = (item: any, key: number) => {
            const classes = {
                item: classNames(item.class),
                link: classNames(
                    'nav-link',
                    item.variant ? `nav-link-${item.variant}` : '',
                ),
                icon: classNames(item.icon),
            };
            return navLink(item, key, classes);
        };

        // nav link
        const navLink = (item: any, key: any, classes: any) => {
            const url = item.url ? item.url : '';
            return (
                <NavItem key={key} className={classes.item}>
                    {isExternal(url) ? (
                        <RsNavLink href={url} className={classes.link} active>
                            <i className={classes.icon} />
                            {item.name}
                            {badge(item.badge)}
                        </RsNavLink>
                    ) : (
                            <NavLink to={url} className={classes.link} activeClassName="active">
                                <i className={classes.icon} />
                                {item.name}
                                {badge(item.badge)}
                            </NavLink>
                        )}
                </NavItem>
            );
        };

        // nav dropdown
        const navDropdown = (item: any, key: any) => {
            return (
                <li key={key} className={activeRoute(item.url, props)}>
                    <a
                        className="nav-link nav-dropdown-toggle"
                        href={`#${key}`}
                        onClick={handleClick.bind(this)}
                    >
                        <i className={item.icon} />
                        {item.name}
                    </a>
                    <ul className="nav-dropdown-items">{navList(item.children)}</ul>
                </li>
            );
        };

        // nav type
        const navType = (item: any, idx: any) =>
            item.title
                ? title(item, idx)
                : item.divider
                    ? divider(item, idx)
                    : item.children ? navDropdown(item, idx) : navItem(item, idx);

        // nav list
        const navList = (items: any) => {
            return items.map((item: any, index: number) => navType(item, index));
        };

        const isExternal = (url: string) => {
            const link = url ? url.substring(0, 4) : '';
            return link === 'http';
        };

        // sidebar-nav root
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <Nav>{navList(nav.items)}</Nav>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
