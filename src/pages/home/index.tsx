import Button from "../../components/Button";
import "./index.scss";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onGoToProfile = () => {
        navigate("/profile");
    }

    return (
        <div className="home-container">
            <div>
                <img src={Logo} className="logo" />
            </div>
            <h1 className="title">{"Bem vindo(a) ao Roses!"}</h1>
            <Button variant="filled" text="VISUALIZAR PERFIL"  onClick={onGoToProfile}/>
        </div>
    )
}

export default Home;