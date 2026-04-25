import React from "react";
import { Link } from "react-router-dom";

export const DashboardServiciosNavBar = () => {
    return(
        <>
            <nav>
                <ul className="flex gap-[20px]">
                    <li>
                        <Link to="amazon">Amazon</Link>
                    </li>
                    <li>
                        <Link to="spotify">Spotify</Link>
                    </li>
                    <li>
                        <Link to="netflix">Netflix</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}