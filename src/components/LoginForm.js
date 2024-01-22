import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const LoginForm = ()=>{
    return(
            <div className="login">

                <Col>
                    <div className="back">
                        <Link to="/">←</Link>
                    </div>
                    <Row>
                        <h1>Login</h1>
                    </Row>

                    <Row>
                        <form>
                            <input type="text" name="username" placeholder="Username"/>
                            <input type="password" name="password" placeholder="Password"/>
                        </form>
                    </Row>

                    <Row>
                        <button>Login</button>
                    </Row>
                </Col>


            </div>

    )
}