import React from "react";
import SelectInput from "../../../components/SelectInput";
import AirplaneIcon from "../../../assets/airplane.svg";
import LanguageIcon from "../../../assets/language.svg";
import Logo from "../../../assets/logo-grey.png";
import "./index.scss";
import RedirectItem from "../../../components/RedirectItem";
import Button from "../../../components/Button";
import Switch from "../../../components/Switch";
import { useNavigate } from 'react-router-dom';

const Preference = () => {
    const [images, setImages] = React.useState([]);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const redirectItems = [
        {
            path: "/profile/photos",
            text: "Connect & Chat",
            rightContent: () => (<p>FREE</p>)
        },
        {
            path: "/profile/photos",
            text: "Photos",
            rightContent: () => (<p>50</p>)
        },
        {
            path: "/profile/photos",
            text: "Packs",
            rightContent: () => (<p>100</p>)
        },
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const acceptedTypes = ["image/png"];

        if (file && acceptedTypes.includes(file.type)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64Image = e.target?.result as string;
                localStorage.setItem('profileImages', JSON.stringify([...images, { url :base64Image }]));
            };

            reader.readAsDataURL(file);
            navigate("/profile/photos");
        } else {
            alert("Selecione um arquivo PNG válido.");
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    React.useEffect(() => {
        const savedImages = localStorage.getItem('profileImages');
        if (savedImages) {
            setImages(JSON.parse(savedImages));
        }
    }, []);

    return (
        <div className="profile-preference-container">
            <SelectInput
                label="Location"
                options={["Dubai, UAE", "São Paulo, BR"]}
                leftIcon={AirplaneIcon}
                disabled
            />
            <SelectInput
                label="Language"
                options={["Portuguese", "English"]}
                leftIcon={LanguageIcon}
            />
            {
                redirectItems.map((item, index) => (
                    <RedirectItem key={index} text={item.text} path={item.path}>
                        {item.rightContent()}
                    </RedirectItem>
                ))
            }
            <input
                type="file"
                accept=".png"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <Button variant="default" text="ADD CONTENT" onClick={handleButtonClick} />
            <section className="identity-section">
                <div className="content">
                    <img src={Logo} width={36} height={36} />
                    <div>
                        <div className="title-label">
                            <h1>Allow Requests</h1>
                        </div>
                        <p className="content-text">Accept roses requests from everyone</p>
                    </div>
                </div>
                <Switch />
            </section>
        </div>
    )
}

export default Preference;