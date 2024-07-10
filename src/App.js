import React from 'react';
import { Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { minis } from "./utils/minis";
import { HeaderComponent } from "./components/HeaderComponent";
import { CardComponent } from './components/CardComponent';

const appStyle = {
    app: {
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh'
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
    }
};

const App = () => (
    <div style={appStyle.app}>
        <HeaderComponent />
        <Row style={appStyle.row}>
            <CardComponent minis={minis} />
        </Row>
    </div>
);

export default App;
