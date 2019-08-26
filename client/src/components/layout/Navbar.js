import React from 'react'
const Navbar = () => {
    return (
        <nav>
            <h1><a href="/">Events</a></h1>
            <ul>
                <li><a href="/companies">Компании</a></li>
                <li><a href="/">Мероприятия</a></li>
                <li><a href="/reports">Отчёты</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;