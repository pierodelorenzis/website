import {Banner} from "../components/Banner";
import {Skills} from "../components/Skills";
import {Contact} from "../components/Contact";
import {NavBar} from "../components/NavBar";

export const Home = ()=>{
    return(
        <div>
            <NavBar />
            <Banner />
            <Skills />
            {/*<Projects />*/}
            <Contact />
        </div>
    )
}