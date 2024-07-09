import { Col, Row } from "react-bootstrap";
import logoMG from "../../assets/logo-mg.jpg";


export const HeaderComponent = () => {
    return (
        <Row style={{backgroundColor: "red"}}>
            <Col><img src={logoMG} height={80} width={80} alt="logo" /></Col>
            <Col>Magrani's Garage</Col>
        </Row>
    )
}