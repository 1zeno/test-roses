import { Routes as RoutesRouter, Route } from "react-router";
import Info from "../pages/profile/info/index.tsx";
import Photos from "../pages/profile/photos/index.tsx";
import Preference from "../pages/profile/preference/index.tsx";
import Home from "../pages/home/index.tsx";
import Edit from "../pages/profile/edit/index.tsx";
import Profile from "../pages/profile/index.tsx";

const Routes = () => {
    return (
        <RoutesRouter>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />}>
                <Route index element={<Info />} />
                <Route path="edit" element={<Edit />} />
                <Route path="photos" element={<Photos />} />
                <Route path="preference" element={<Preference />} />
            </Route>
        </RoutesRouter>
    )
}

export default Routes;