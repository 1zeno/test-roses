import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import RedirectItem from "../../../components/RedirectItem";
import Verified from "../../../assets/verified.svg";
import "./index.scss";

const Info = () => {
    const redirectItems = [
        {
            path: "edit",
            text: "Profile",
            rightContent: () => (
                <>
                    <p>Scarlet</p>
                    <img src={Verified} alt="verified"/>
                </>
            )
        },
        {
            path: "edit",
            text: "Bio",
            rightContent: () => (<p>Edit</p>)
        },
        {
            path: "edit",
            text: "Gender",
            rightContent: () => (<p className="disabled">add</p>)
        },
        {
            path: "edit",
            text: "Age",
            rightContent: () => (<p className="disabled">add</p>)
        },
        {
            path: "edit",
            text: "Ethinicity",
            rightContent: () => (<p>Caucasian</p>)
        },
        {
            path: "edit",
            text: "Height",
            rightContent: () => (<p>5'9" / 1,82m</p>)
        },
        {
            path: "edit",
            text: "Weight",
            rightContent: () => (<p>75kg / 165lb</p>)
        },
        {
            path: "edit",
            text: "Language",
            rightContent: () => (<p>English, Spanish, Portuguese</p>)
        },
    ];
    return (
        <div className="info-page-container">
            <section className="profile-picture">
                <div>
                    <Avatar width={58} height={58} />
                </div>
                <Button variant="default" text="PROFILE PICTURE" />
            </section>
            {
                redirectItems.map((item) => (
                    <RedirectItem text={item.text} path={item.path}>
                        {item.rightContent()}
                    </RedirectItem>
                ))
            }
        </div>
    )
}

export default Info;