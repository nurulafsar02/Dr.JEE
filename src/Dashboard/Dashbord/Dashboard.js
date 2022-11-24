import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Dashboard = () => {
    const {loading}=useContext(AuthContext);
    if(loading){
        return <progress className="lg:mx-[500px] m-32 lg:my-[250px] progress w-56"></progress>
       }
    return (
        <div>
            <h1>comming soon</h1>
        </div>
    );
};

export default Dashboard;