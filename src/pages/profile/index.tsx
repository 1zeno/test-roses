import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Notification from "../../assets/notification.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import Avatar from "../../components/Avatar";
import "./index.scss";

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const links = [
        {
            path: "/profile",
            title: "INFO",
            end: true,
        },
        {
            path: "/profile/photos",
            title: "PHOTOS",
            end: true,
        },
        {
            path: "/profile/preference",
            title: "PREFERENCE",
            end: true,
        },
    ];

    const onGoHome = () => navigate("/");

    return (
        <div className="profile-container">
            <section className="header">
                <img src={Logo} className="logo" onClick={onGoHome} />
                <div className="right-container">
                    <img src={Notification} width={24} height={24} />
                    <Avatar width={32} height={32} />
                </div>
            </section>
            <section className="content-header">
                <div className="button-back" onClick={onGoHome}>
                    <img src={ArrowLeft} width={24} height={24} />
                </div>
                <div>
                    <p className="title">
                        {location.pathname === "/profile/edit" ? "EDIT PROFILE" : "PROFILE"}
                    </p>
                    <p className="subtitle">Configuration</p>
                </div>
            </section>
            {location.pathname !== "/profile/edit" && (
                <nav className="navbar">
                    {
                        links.map((link, index)=> (
                            <NavLink
                                key={`${link.title}-${index}`}
                                to={link.path}
                                end={link.end}
                                className={({ isActive }) =>
                                    isActive ? "link active" : "link"
                                }
                            >
                                <p>{link.title}</p>
                            </NavLink>
                        ))
                    }
                </nav>
            )}
            <Outlet />
        </div>
    )
}

export default Profile;