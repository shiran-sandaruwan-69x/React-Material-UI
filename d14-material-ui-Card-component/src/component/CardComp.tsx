import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography} from "@mui/material";


class CardComp extends React.Component {
    render() {
        return (
            <Box width='300px'>
                <Card>
                    <CardMedia
                    component='img'
                    height='300px'
                    image='https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg'
                    alt='unsplash image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            React
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit ipsam iste,
                                magni provident quo unde? Accusamus culpa dicta dolore, excepturi mollitia natus
                                necessitatibus officia quam sit soluta ullam velit?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained'>share</Button>
                        <Button variant='contained'>learn more</Button>
                    </CardActions>
                </Card>
            </Box>
        );
    }
}

export default CardComp;