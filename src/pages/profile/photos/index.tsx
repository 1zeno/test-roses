import React from "react";
import { useNavigate } from "react-router-dom";
import Photo1 from "../../../assets/mock/red-rose.jpg";
import Photo2 from "../../../assets/mock/white-rose.jpg";
import Camera from "../../../assets/camera.svg";
import Button from "../../../components/Button";
import "./index.scss";

const Photos = () => {
    const [images, setImages] = React.useState([
        {
            url: Photo2,
        },
        {
            url: Photo1,
        },
        {
            url: Photo2,
        },
    ]);
    const navigate = useNavigate();

    const onGoToPreference = () => {
        navigate("/profile/preference");
    }

    React.useEffect(() => {
        const savedImages = localStorage.getItem('profileImages');
        if (savedImages) {
            setImages([...images, ...JSON.parse(savedImages) as []]);
            
        }
    }, []);

    return (
        <div className="photos-page">
            <section className="first-row">
                <img className="left-photo" src={Photo1} />
                <div className="cover-button">
                    <Button variant="default" text="Cover" style={{ borderRadius: 4 }} />
                </div>
                <div className="right-content">
                    <img className="photo" src={Photo2} />
                    <img className="photo" src={Photo2} />
                </div>
            </section>
            <section className="photos-list">
                {
                    images.map((value, index) => (
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
            </section>
        </div>
    )
}

export default Photos;