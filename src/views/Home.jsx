import "../css/home.scss"
import VerticalLinearStepper from "../components/VerticalLinearStepper";

export function Home() {
    const academic = [
        "FPT university: graphic design",
        "FPT university: web design",
        "FPT university: front end developer"
    ]
    const work = [
        "FPT software",
        "sun group",
        "audience serv"
    ]
    const content = [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    ]
    return (
        <div className="main-content">
            <div className="left">
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fas fa-dragon"></i> personal information
                    </h1>
                    <div className="info-user">
                        <div className="left">
                            <img src="https://cdn.dribbble.com/users/2660249/screenshots/6664064/comp_1.gif" alt=""/>
                        </div>
                        <div className="right">
                            <h1>Trinh Huu Hung</h1>
                            <ul>
                                <li><i className="fas fa-calendar-alt"></i> 22-10-2002</li>
                                <li><i className="fas fa-envelope"></i> example@gmail.com</li>
                                <li><i className="fas fa-phone-alt"></i> 000-123-456-789</li>
                                <li><i className="fas fa-map-marker-alt"></i> Bac Tu Liem, Ha Noi</li>
                                <li><i className="fas fa-heart"></i> Breaking Heart</li>
                            </ul>
                        </div>

                    </div>
                    <div className="contact-user">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti eos explicabo
                            inventore
                            nulla quas, repellat sapiente! Animi assumenda delectus eius error excepturi in laudantium
                            nisi
                            numquam obcaecati, provident quasi repellendus sequi similique sit tempora veniam
                            voluptatibus.
                            Inventore, labore, quos?
                        </p>
                        <div>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-github-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fas fa-dragon"></i> personal skills
                    </h1>
                    <div className="skills">
                        <div className="item">
                            <h4>
                                <i className="fab fa-html5"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-css3-alt"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-js"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-sass"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-react"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-vuejs"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-github-alt"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </h5>
                        </div>
                        <div className="item">
                            <h4>
                                <i className="fab fa-figma"></i>
                            </h4>
                            <h5>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </h5>
                        </div>

                    </div>
                </div>
            </div>
            <div className="right">
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fas fa-dragon"></i> academic level
                    </h1>
                    <div className="stepper">
                        <VerticalLinearStepper title={academic} content={content}/>
                    </div>


                </div>
                <div className="box-primary">
                    <h1 className="title">
                        <i className="fas fa-dragon"></i> work experience
                    </h1>
                    <div className="stepper">
                        <VerticalLinearStepper title={work} content={content}/>
                    </div>


                </div>
            </div>
        </div>
    )
}