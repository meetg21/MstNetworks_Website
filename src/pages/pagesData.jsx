import ContactUs from "./Contactus/ContactUs";
import Home from "./Home/Home";
import Service from "./Service/Service";
import RedTeamServices from "./RedTeamServices/RedTeamServices";
import CloudSecurityServices from "./CloudSecurityServices/CloudSecurityServices";
import PaymentAppServices from "./PaymentAppServices/PaymentAppServices";
import IotServices from "./IotServices/IotServices";

const pagesData = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/Service",
    element: <Service />,
    title: "Service",
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
    title: "ContactUs",
  },

  {
    path: "/RedTeamServices",
    element: <RedTeamServices />,
    title: "RedTeamServices",
  },

  {
    path: "/CloudSecurityServices",
    element: <CloudSecurityServices />,
    title: "CloudSecurityServices",
  },

  {
    path: "/PaymentAppServices",
    element: <PaymentAppServices />,
    title: "PaymentAppServices",
  },
  {
    path: "/IotServices",
    element: <IotServices />,
    title: "IotServices",
  },
];
export default pagesData;
