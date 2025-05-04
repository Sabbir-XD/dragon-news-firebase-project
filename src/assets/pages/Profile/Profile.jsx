import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Marque from '../../components/Marque/Marque';
import UserCard from '../../components/UserCard/UserCard';
import { AuthContext } from '../../../context/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='w-11/12 mx-auto mt-5 mb-5'>
            <div className='space-y-5'>
            <Header/>
            <Marque/>
            <Navbar/>
            </div>

            <UserCard user={user} />
        </div>
    );
};

export default Profile;