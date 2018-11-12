import { faListUl, faLaptop, faWrench, faFolder } from '@fortawesome/free-solid-svg-icons'

export const formConfig = [
    {
        label: "FirtsName",
        isRequired: true,
        errorText: "Please write down your first name",
        placeholder: "Your name..."
    },{
        label: "LastName",
        isRequired: true,
        errorText: "Please write down your last name",
        placeholder: "Your lastname..."
    },{
        label: "Email",
        isRequired: true,
        errorText: "Don’t forget to tell us what your email address is",
        placeholder: "Your email address..."
    },{
        label: "Subject",
        isRequired: true,
        errorText: "Don’t forget to write something to use!",
        placeholder: "Let us know your concerns!",
    }
];

export const menuButtonsConf = [
    {
        btnName: "Home",
        to: "./",
        disable: "true"
    },{
        btnName: "Products",
        to: "./products",
        disable: "false"
    },{
        btnName: "Clients",
        to: "./clients",
        disable: "true"
    },{
        btnName: "Contact",
        to: "./contact",
        disable: "false"
    }
];

export const filterConf = [
    {
        label: "All",
        hasDivider: true,
        icon: faListUl
    },{
        label: "Tech",
        hasDivider: false,
        icon: faLaptop
    },{
        label: "Services",
        hasDivider: false,
        icon: faWrench
    },{
        label: "Office",
        hasDivider: false,
        icon: faFolder
    },

];