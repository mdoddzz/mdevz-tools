import jsonImage from '../images/homeIcons/jsonformatter.svg'
import passwordImg from '../images/homeIcons/passwordgenerator.svg'
import securityImg from '../images/homeIcons/securityheaders.svg'
import urlImage from '../images/homeIcons/urlshortener.svg'
import dnsImage from '../images/homeIcons/dnschecker.svg'
import { Link } from "react-router-dom";

const items = [
    {
        header: 'Json Formatter',
        description:
        'Format json string to how you require',
        meta: 'v1.2',
        image: jsonImage,
        as: Link,
        to: "/general/jsonformatter",
        color: "teal",
        type: 'General'
    },
    {
        header: 'URL Shortener',
        description:
        'Create short urls for when characters are limited or you want a sleeker looking url.',
        meta: 'v1',
        image: urlImage,
        as: Link,
        to: "/general/urlshortener",
        color: "teal",
        type: 'General'
    },
    {
        header: 'DNS Checker',
        description:
        'Check a hostnames DNS on multiple DNS servers.',
        meta: 'v1',
        image: dnsImage,
        as: Link,
        to: "/general/dnschecker",
        color: "teal",
        type: 'General'
    },
    {
        header: 'Password Generator',
        description:
        'Create a secure password with adjustable settings',
        meta: 'v1',
        image: passwordImg,
        as: Link,
        to: "/security/passwordgenerator",
        color: "red",
        type: 'Security'
    },
    {
        header: 'Security Headers',
        description:
        'Check the security headers of your website and see where security could be improved',
        meta: 'v1',
        image: securityImg,
        as: Link,
        to: "/security/securityheaders",
        color: "red",
        type: 'Security'
    },
]

export {
    items
};