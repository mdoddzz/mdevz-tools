import { NavLink } from "react-router-dom"

const leftItems = [
    { as: NavLink, content: "General Tools", to: '/general', key: "security", dropdown: [
        { as: NavLink, content: "Json Formatter", to: '/jsonformatter', key: "jsongormatter" },
        { as: NavLink, content: "URL Shortener", to: '/urlshortener', key: "urlshortener" },
        { as: NavLink, content: "DNS Checker", to: '/dnschecker', key: "dnschecker" },
    ]},
    { as: NavLink, content: "Security Tools", to: '/security', key: "security", dropdown: [
        { as: NavLink, content: 'Password Generator', to: '/passwordgenerator', key: "passwordgenerator" },
        { as: NavLink, content: 'Security Headers', to: '/securityheaders', key: "securityheaders" }
    ]},
    { as: NavLink, content: 'Contact', to: '/contact', key: "contact" }
];
const rightItems = [
    //{ as: NavLink, content: "Login", to: '/login', key: "login" },
    //{ as: NavLink, content: "Register", to: '/register', key: "register" }
];

export {
    leftItems,
    rightItems
};