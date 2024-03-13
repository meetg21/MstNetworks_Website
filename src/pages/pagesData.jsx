import ContactUs from "./Contactus/ContactUs";
import Home from "./Home/Home";
import Service from "./Service/Service";
import RedTeamServices from "./RedTeamServices/RedTeamServices";

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

    {
        path: "/RedTeamServices",
        element: <RedTeamServices/>,
        title: "RedTeamServices"
    },

];
export default pagesData;