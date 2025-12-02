import React, { useState } from "react";

import AboutMe from "./Worksheets/AboutMe";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Outlet } from "react-router-dom";

export default function Workspace({ tab }) {
    return (
        <div className="flex-grow-1 p-2" style={{ overflow: "auto" }}>

            <div style={{ minWidth: "800px", width: "1000px", maxWidth: "1200px" }}>
                <Outlet />
            </div>
        </div>
    );
}

