import { Row } from "react-bootstrap";
import "./App.css";
import logo from "./assets/hot-wheels-vector-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { minis } from "./utils/minis";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { HeaderComponent } from "./components/HeaderComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <Row>
                {minis.map((mini) => (
                    <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={mini.image}
                            title={mini.name}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {mini.carBrand + " " + mini.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {mini.fabricBrand}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                    </Card>
                ))}
            </Row>
        </div>
    );
}

export default App;
