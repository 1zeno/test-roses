import SelectInput from "../../../components/SelectInput";
import AirplaneIcon from "../../../assets/airplane.svg";
import LanguageIcon from "../../../assets/language.svg";
import Logo from "../../../assets/logo-grey.png";
import "./index.scss";
import RedirectItem from "../../../components/RedirectItem";
import Button from "../../../components/Button";
import Switch from "../../../components/Switch";

const Preference = () => {
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
            <Button variant="default" text="ADD CONTENT" />
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