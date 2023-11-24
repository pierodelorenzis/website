import {Container} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>

                <img src={headerImg} alt="Header Img"/>
                <h1>software developer</h1>
                <p>Information engigneer</p>

            </Container>
        </section>
    )
}
