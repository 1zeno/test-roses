import "./index.scss";
import Photo1 from "../../../assets/mock/red-rose.jpg";
import Photo2 from "../../../assets/mock/white-rose.jpg";
import Camera from "../../../assets/camera.svg";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const Photos = () => {
    const navigate = useNavigate();
    const photos = [
        {
            url: Photo2,
        },
        {
            url: Photo1,
        },
        {
            url: Photo2,
        },
    ];
    const onGoToPreference = () => {
        navigate("/profile/preference");
    }
    return (
        <div className="photos-page">
            <div className="first-row">
                <img className="left-photo" src={Photo1} />
                <div className="cover-button">
                    <Button variant="default" text="Cover" style={{ borderRadius: 4 }} />
                </div>
                <div className="right-content">
                    <img className="photo" src={Photo2} />
                    <img className="photo" src={Photo2} />
                </div>
            </div>
            <div className="photos-list">
                {
                    photos.map((value, index) => (
                        <div key={index} className="photo-item">
                            <img className="photo" src={value.url} />
                        </div>
                    ))
                }
                <div className="add-photo-item" onClick={onGoToPreference}>
                    <img src={Camera} width={32} height={32} />
                </div>
                <div className="add-photo-item" onClick={onGoToPreference}>
                    <img src={Camera} width={32} height={32} />
                </div>
                <div className="add-photo-item" onClick={onGoToPreference}>
                    <img src={Camera} width={32} height={32} />
                </div>
            </div>
        </div>
    )
}

export default Photos;