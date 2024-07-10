import { Col, Row } from "react-bootstrap";
import logoMG from "../../assets/logo-mg.jpg";


export const HeaderComponent = () => {
    return (
        <Row style={{ backgroundColor: '#3e0d10' }}>
            <Col sm={6} >
                <img src={logoMG} height={80} width={80} alt="logo" />
            </Col>
            <Col sm={6} style={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Magrani's Garage
            </Col>
        </Row>
    )
}