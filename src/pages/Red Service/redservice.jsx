// import React from 'react';
// import './redservice.css';

// const RedService = () => {
//     return (
//         <div className="red-service-container">
//             <h1 className="red-service-heading">Red Team Service</h1>
//             <p className="red-service-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet leo vitae
//                 mauris suscipit, eu vehicula tortor volutpat. Sed feugiat arcu ac nisi consequat,
//                 vitae hendrerit eros condimentum. Maecenas in lacus nulla. Duis sit amet felis eu
//                 elit laoreet placerat.
//             </p>
//             <h2 className="sub-heading">Your Expert Cyber security solutions tailored to fortify ytour digital defences</h2>
//             <p className="sub-heading-content">
//                 Nulla vitae lectus in ex aliquam malesuada. Pellentesque non velit et nulla bibendum
//                 aliquam. Aliquam erat volutpat. Donec consectetur lectus sit amet semper tincidunt.
//                 Duis eget dolor in felis maximus sodales.
//             </p>
//         </div>
//     );
// }

// export default RedService;

import ser3 from '../../assets/ser3.png'
import ser4 from '../../assets/ser4.png'
import ser5 from '../../assets/ser5.png'

import React from 'react';
import './redservice.css';

const RedService = () => {
    return (
        <div className="red-service-container">
            <h1 className="red-service-heading">Red Team Service</h1>
            <p className="red-service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet leo vitae
                mauris suscipit, eu vehicula tortor volutpat. Sed feugiat arcu ac nisi consequat,
                vitae hendrerit eros condimentum. Maecenas in lacus nulla. Duis sit amet felis eu
                elit laoreet placerat.
            </p>
            <h2 className="sub-heading">Your Expert Cyber security solutions tailored to fortify your digital defences</h2>
            <p className="sub-heading-content">
                Nulla vitae lectus in ex aliquam malesuada. Pellentesque non velit et nulla bibendum
                aliquam. Aliquam erat volutpat. Donec consectetur lectus sit amet semper tincidunt.
                Duis eget dolor in felis maximus sodales.
            </p>
            <div className="card-container-red">
                <div className="card-red">
                    <img src={ser3} alt="Logo 1" />
                    <h3>Physical Security</h3>
                    <p>We evaluate and fortfiy physical security measures ,conduct comprehensive audits to uncover vulnerabilities , suggest improvements aligned with industry standards, and mitigate potential threats through a blend of technology and employees training</p>
                </div>
                <div className="card-red">
                    <img src={ser4} alt="Logo 2" />
                    <h3>Mobile Red Team Services</h3>
                    <p>We assess and enhance mobile device,app,and network security,utilizing penetration testing and threat modeling to uncove vulnerabilities, and recommend secure development practices and tools to mitigate potential security breaches and attacks.</p>
                </div>
                <div className="card-red">
                    <img src={ser5} alt="Logo 3" />
                    <h3>Digital/Infrastructure Red Team Services</h3>
                    <p>MST Networks Digital/Infrastructure Red Team Services offer thorough assessments and advanced penetration testing to fortify digital infrastructures,identifying vulnerabilities and ensuring industry-leading security measures against evolving cyber threats</p>
                </div>
            </div>
        </div>
    );
}

export default RedService;

