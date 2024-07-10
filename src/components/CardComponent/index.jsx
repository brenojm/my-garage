import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { cardComponentStyle } from "./styles"
import { fabricBrands } from "../../utils/minis"

export const CardComponent = ({ minis }) => {

    const imageByBrand = (brand) => {
        if(brand === fabricBrands.HotWheels)
            return <img width={90} height={45} src="https://logos-world.net/wp-content/uploads/2021/08/Hot-Wheels-Logo.png" />
        else if(brand === fabricBrands.Matchbox)
            return <img width={90} height={25} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Matchbox-logo-color.svg/2560px-Matchbox-logo-color.svg.png" />
        else
            return brand
    }

    return (
        <>
            {minis.map((mini, index) => (
                <Card key={index} style={cardComponentStyle.card}>
                    <CardActionArea onClick={() => console.log("TESTE")}>
                        <CardMedia
                            style={cardComponentStyle.cardMedia}
                            image={mini.photo}
                            title={mini.name}
                        />
                        <CardContent style={cardComponentStyle.cardContent}>

                            <Typography
                                style={cardComponentStyle.cardTypographyBody}
                                variant="h5"
                            >
                                {}
                            
                                {imageByBrand(mini.fabricBrand)} {mini.carBrand} {mini.model}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    )
}