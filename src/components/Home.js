import React from "react";
import {Container, Card, Button} from "react-bootstrap"

const Home = () => {
    return(        
        <Container>   
            <div >
                <Card className="mt-2">
                    <Card.Header>Použíjte náš blog</Card.Header>
                    <Card.Body>
                        <Card.Title>Připojte se k online světu dnes hned !</Card.Title>
                            <Card.Text>
                                Duis pulvinar. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Quisque porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam erat volutpat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Donec iaculis gravida nulla. Maecenas libero. Pellentesque ipsum.
                            </Card.Text>
                        <Button href="/blog" variant="primary">Blog</Button>
                    </Card.Body>
                </Card>

                <Card className="mt-2">
                    <Card.Header>Registrujte se třeba hned !</Card.Header>
                    <Card.Body>
                        <Card.Title>Vyberte si své informace, a jste in</Card.Title>
                            <Card.Text>
                                Duis pulvinar. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Quisque porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam erat volutpat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Donec iaculis gravida nulla. Maecenas libero. Pellentesque ipsum.
                            </Card.Text>
                        <Button href="/register" variant="primary">Register</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Home;