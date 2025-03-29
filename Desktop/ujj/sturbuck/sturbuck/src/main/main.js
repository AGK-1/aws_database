import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";



const Main = ({ contentType }) => {
    const renderContent = () => {
        switch (contentType) {
            case 'home':
                return (
                    <div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <Card className="border-0 w-100 p-4 h-100" style={{ borderRadius: "50px" }}>
                                <Row className="g-0 align-items-stretch">
                                    <Col md={6}>
                                        <Card.Img
                                            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-97284.jpg"
                                            alt="Card image"
                                            className="img-fluid h-100 w-100 rounded"
                                            style={{ objectFit: "cover", height: "400px" }}
                                        />
                                    </Col>
                                    <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: "#f7f0e4" }}>
                                        <Card.Body
                                            className="d-flex flex-column align-items-center text-center justify-content-center"
                                            style={{ backgroundColor: "#f7f0e4", height: "400px" }}
                                        >
                                            <Card.Title className="fw-bold">Card Title</Card.Title>
                                            <Card.Text>
                                                Small cup, bold flavour
                                                Enjoy the Cortado — a perfect combination of rich Blonde Espresso and steamed milk. Or try the Brown Sugar Oat Cortado.
                                            </Card.Text>
                                            <Button variant="light" className="border border-dark w-25 rounded-pill">
                                                Order now
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            {/* Второй Card */}
                            <Card className="border-0 w-100 p-4 h-100" style={{ borderRadius: "50px" }}>
                                <Row className="g-0 align-items-stretch">
                                    <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: "#f7f0e4" }}>
                                        <Card.Body
                                            className="d-flex flex-column align-items-center text-center justify-content-center"
                                            style={{ backgroundColor: "#f7f0e4", height: "400px" }}
                                        >
                                            <Card.Title className="fw-bold">Card Title</Card.Title>
                                            <Card.Text>
                                                Small cup, bold flavour
                                                Enjoy the Cortado — a perfect combination of rich Blonde Espresso and steamed milk. Or try the Brown Sugar Oat Cortado.
                                            </Card.Text>
                                            <Button variant="light" className="border border-dark w-25 rounded-pill">
                                                Order now
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                    <Col md={6}>
                                        <Card.Img
                                            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-97286.jpg"
                                            alt="Card image"
                                            className="img-fluid h-100 w-100 rounded"
                                            style={{ objectFit: "cover", height: "400px" }}
                                        />
                                    </Col>
                                </Row>
                            </Card>

                            {/* Третий Card */}
                            <Card className="border-0 w-100 p-4 h-100" style={{ borderRadius: "50px" }}>
                                <Row className="g-0 align-items-stretch">
                                    <Col md={6}>
                                        <Card.Img
                                            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-97288.jpg"
                                            alt="Card image"
                                            className="img-fluid h-100 w-100 rounded"
                                            style={{ objectFit: "cover", height: "400px" }}
                                        />
                                    </Col>
                                    <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: "#f7f0e4" }}>
                                        <Card.Body
                                            className="d-flex flex-column align-items-center text-center justify-content-center"
                                            style={{ backgroundColor: "#f7f0e4", height: "400px" }}
                                        >
                                            <Card.Title className="fw-bold">Card Title</Card.Title>
                                            <Card.Text>
                                                Small cup, bold flavour
                                                Enjoy the Cortado — a perfect combination of rich Blonde Espresso and steamed milk. Or try the Brown Sugar Oat Cortado.
                                            </Card.Text>
                                            <Button variant="light" className="border border-dark w-25 rounded-pill">
                                                Order now
                                            </Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </div>

                    </div>
                );
            case 'rewards':
                return (
                    <div className="d-flex flex-column align-items-center text-center">
                        {/* Контейнер с колонками */}
                        <div className="row d-flex align-items-center justify-content-center w-100 m-5" style={{
                            backgroundColor: "#fbf5e8"
                        }}>
                            {/* Текстовый блок */}
                            <div className="col-12 col-md-6 mb-4 mb-md-0 text-start">
                                <h1>It’s a great day for free coffee.</h1>
                                <h3>Sign up and start enjoying the perks of Starbucks® Rewards.</h3>
                                <p>We are a company that loves to deliver the best coffee to you!</p>
                                <Button variant="success" className="border border-dark rounded-pill text-white px-4 py-2">
                                    Join Us
                                </Button>
                            </div>

                            {/* Изображение */}
                            <div className="col-12 col-md-6">
                                <img
                                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-97324.jpg"
                                    alt="Starbucks Promo"
                                    className="img-fluid rounded"
                                    style={{ maxWidth: "750px" }}
                                />
                            </div>
                        </div>

                        {/* Блок с текстом ниже */}
                        <div className="mt-4">
                            <h4>Getting started is easy</h4>
                            <p>Earn Stars and get rewarded in a few easy steps.</p>
                        </div>
                        <div className="container mt-5 m-5">
                            <div className="row">
                                {/* Column 1 */}
                                <div className="col-12 col-md-4 ">
                                    <img src="https://www.starbucks.ca/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" className="m-3" />
                                    <h3>Create an account</h3>
                                    <p>To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
                                </div>

                                {/* Column 2 */}
                                <div className="col-12 col-md-4 ">
                                    <img src="https://www.starbucks.ca/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" className="m-3" />
                                    <h3>Order and pay how you’d like</h3>
                                    <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                                </div>
                                {/* Column 3 */}
                                <div className="col-12 col-md-4 ">
                                    <img src="https://www.starbucks.ca/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" className="m-3" />
                                    <h3>Earn Stars, get Rewards</h3>
                                    <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                                </div>
                            </div>
                        </div>

                    </div>

                );
            case 'gift':
                return (
                    <div className="">
                        <div className="m-4 text-start">
                            <h1>Gift Cards</h1>
                            <h5>Featured</h5>
                        </div>
                        <br></br>

                        <div className="d-flex flex-wrap justify-content-start gap-3 m-5">
                            <img src="https://i.imgur.com/e2X4ZYA.png" className="img-fluid rounded" style={{ width: "300px" }} />
                            <img src="https://i.imgur.com/9k0tqRl.png" className="img-fluid rounded" style={{ width: "300px" }} />
                            <img src="https://i.imgur.com/BKvNRbK.png" className="img-fluid rounded" style={{ width: "300px" }} />
                            <img src="https://i.imgur.com/NhfEBGz.png" className="img-fluid rounded" style={{ width: "300px" }} />
                        </div>

                        <div className="m-4 text-start">
                            <h5>Appreciation</h5>
                        </div>
                        <div className="d-flex flex-wrap justify-content-start gap-3 m-5">
                            <img src="https://i.imgur.com/pMg7qGs.png" className="img-fluid rounded" style={{ width: "300px" }} />
                            <img src="https://i.imgur.com/k2uqdE4.png" className="img-fluid rounded" style={{ width: "300px" }} />
                        </div>

                       
                        <div className="d-flex flex-wrap justify-content-center w-100 mb-5" style={{
                            backgroundColor: "#fbf5e8"
                        }}>
                            <div className='w-100'><h1>About eGift cards</h1></div>
                           

                            <p className="w-75">A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is purchased and sent digitally.For Senders of an eGift, go to eGift History when signed in to view, send, or resend eGifts youve purchased — or, to directly contact Starbucks eGift Support for help with your order.</p>
                        </div>


                    </div>);
            default:
                return (
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h2>Welcome!</h2>
                        {/* Контент по умолчанию */}
                    </div>
                );
        }
    };
    return <div>{renderContent()}</div>;
};



export default Main;