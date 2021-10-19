import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Statistics from '../Statistics/Statistics';
import TopHome from '../TopHome/TopHome';

const Home = () => {
    return (
        <div>
            <TopHome></TopHome>
            <Services></Services>
            <Doctors></Doctors>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;