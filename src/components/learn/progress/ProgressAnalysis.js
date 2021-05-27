import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../../shared/navBar/NavBar';
import progressData from './progress.json'
import { useParams } from 'react-router';
import ProgressHeader from './progressHeader/ProgressHeader';

const ProgressAnalysis = () => {
    const {id} = useParams()
    const progressDetails = progressData.find( progress => progress.id == id)
    return (
        <div className="row">
            <NavBar />
            <div className="col-sm-3 col-md-3 col-lg-3">
            <SideBar />
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9">
            <ProgressHeader />
            <p>{progressDetails.activity}</p>
            <p>{progressDetails.activity}</p>
            </div>
        </div>
    );
};

export default ProgressAnalysis;