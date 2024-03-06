import ContactUs from "./Contactus/ContactUs";
import Home from "./Home/Home";
import Service from "./Service/Service";

const pagesData=[
    {
        path: "/",
        element: <Home />,
        title: "Home"
    },
    {
        path: "/Service",
        element: <Service/>,
        title: "Service"
    },
    {
        path: "/ContactUs",
        element: <ContactUs/>,
        title: "ContactUs"
    },

];
export default pagesData;