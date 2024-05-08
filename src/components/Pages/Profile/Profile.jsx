import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthProvider } from '../../../UserContext/UserContext';
import WaveStart from '../../Shares/Wave/Wave';

const Profile = () => {
    const { user } = useContext(AuthProvider);
    return (
        <>
            <Helmet><title>Profile</title></Helmet>

            <div className="card w-96 bg-base-200 shadow-xl text-primary mx-auto my-10 py-10">
                <figure>  <img src={user?.photoURL} alt="user" className='userImage' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       Information
                    </h2>
                    <p>Here is your Information!!</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">          <h2> Name : {user?.fullName ? user?.fullName : "name not found"}</h2> </div>
                        <div className="badge badge-outline">          <h2> Email : {user?.email ? user?.email : "name not found"}</h2></div>
                    </div>
                </div>
            </div>

            <WaveStart></WaveStart>
        </>
    );
};

export default Profile;