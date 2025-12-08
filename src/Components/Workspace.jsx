import React, { useState } from "react";

import AboutMe from "./Worksheets/AboutMe";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react'
import './workspace.css'

import { Outlet } from "react-router-dom";

export default function Workspace({ tab, width }) {
    const [database, setDatabase] = useState('Choose Database');

    return (
        <div className="p-2" style={{ overflow: "auto" }}>

            <div className="worksheet-container" style={{ maxHeight:"100%" , maxWidth:"100%" }}>

                <Outlet />
            </div>
        </div>
    );
}

