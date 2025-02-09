import React from "react";
import TextInput from "../../../components/TextInput";
import VerifiedDisabled from "../../../assets/verified-disabled.svg";
import "./index.scss";
import Label from "../../../components/Label";
import Button from "../../../components/Button";

const Edit = () => {
    const [username, setUsername] = React.useState("");

    return (
        <div className="profile-edit-container">
            <TextInput
                label="Name"
                imgSrc={VerifiedDisabled}
                placeholder="Digite seu nome"
            />
            <div>
                <TextInput
                    label="Username"
                    placeholder="Digite seu username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p className="info-text">
                    In most cases, you’ll be able to change your name back to <span>{username}</span> for another 14 days.
                </p>
            </div>
            <section className="profile-section">
                <Label>Profile</Label>
                <p className="info-text">
                    https://roses.vip/<span>{username}</span>
                </p>
            </section>
            <section className="identity-section">
                <div className="title-label">
                    <h1>Identity Verification</h1>
                    <img src={VerifiedDisabled} width={24} height={24} />
                </div>
                <p className="content-text">Let’s make sure nobody is trying to impersonate you.</p>
                <Button variant="outlined" text="VERIFY ACCOUNT" />
            </section>
            <Button variant="filled" text="DONE" />
            <Button variant="text" text="CANCEL" />
        </div>
    )
}

export default Edit;