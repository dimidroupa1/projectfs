import React, { useState } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Apartment, Computer, Group } from '@material-ui/icons';
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typed from "react-typed"


const Main = (props) => {

    const [showModal, setShowModal] = useState("close");
    const [textOfPlan, setTextOfPlan] = useState("Ви зв'язуєтеся з нами залишаючи заявку або по телефону, після цього ми починаемо обговорення проекту");
    const [titleOfPlan, setTitleOfPlan] = useState("Звʼязок з нами");
    const [showPrices, setShowPrices] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickNav = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }
        switch (showModal) {
            case "open":
                setShowModal("close");
                console.log('vfd')
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    }

    const handleShowPrices = () => {
        setShowPrices(!showPrices);
    }

    const handleChangeTextOfPlan = (type) => {
        switch (type) {
            case "zviazok":
                setTitleOfPlan("Звʼязок з нами");
                setTextOfPlan(props.plan[0].plan1);
                break;
            case "ckl_dogovor":
                setTitleOfPlan("Складання плану та обговорення");
                setTextOfPlan(props.plan[0].plan2);
                break;
            case "pidp_zviazok":
                setTitleOfPlan("Підписання договору");
                setTextOfPlan(props.plan[0].plan3);
                break;
            case "demka":
                setTitleOfPlan("Демонстрація сайту та його обговорення");
                setTextOfPlan(props.plan[0].plan4);
                break;
            case "zdaza_robotu":
                setTitleOfPlan("Здача роботи");
                setTextOfPlan(props.plan[0].plan5);
                break;
        }
    }
    if (typeof window !== "undefined") {
        let bodyScroll = document.getElementsByClassName('findJsMenu')[0];
        let phoneappear = document.getElementsByClassName('phonenumberforjs')[0];

        window.onscroll = function (event) {
            let scrollBody = window.pageYOffset;
            if (scrollBody > 150) {
                bodyScroll.classList.remove('scrolled')
                bodyScroll.classList.add('menu-scroll')
                phoneappear.classList.add('phonenumberli')
                phoneappear.classList.remove('phonenumberlinon')
            } else {
                bodyScroll.classList.add('scrolled')
                bodyScroll.classList.remove('menu-scroll')
                phoneappear.classList.remove('phonenumberli')
                phoneappear.classList.add('phonenumberlinon')
            }
        }
    }

    return (
        <Container>
            <ContentMain>
                <ContainerHeader id="home">
                    <ContainerNavBar className='findJsMenu scrolled'>
                        <LeftSideNavBar>
                            <h2>Project<span>FS</span></h2>
                        </LeftSideNavBar>
                        <RightSideNavBar>
                            <IconButton className="listIcon" onClick={handleClickNav}>
                                <FormatListBulletedIcon />
                            </IconButton>
                            <NavList className="navList" >
                                <NavListLi>
                                    <a href="#about">Про нас</a>
                                </NavListLi>
                                <NavListLi>
                                    <a href="#plan">Послідовність роботи</a>
                                </NavListLi>
                                <NavListLi>
                                    <a href="#technology">Технології</a>
                                </NavListLi>
                                <NavListLi>
                                    <a href="#services">Послуги</a>
                                </NavListLi>
                                <NavListLi>
                                    <p className='phonenumberlinon phonenumberforjs'>+38(097)-120-6205</p>
                                </NavListLi>
                            </NavList>
                            {
                                isOpen == true ? (
                                    <NavListModal className="navList">
                                        <NavListLiModal>
                                            <a href="#home">Додому</a>
                                        </NavListLiModal>
                                        <NavListLiModal>
                                            <a href="#about">Про нас</a>
                                        </NavListLiModal>
                                        <NavListLiModal>
                                            <a href="#plan">Послідовність роботи</a>
                                        </NavListLiModal>
                                        <NavListLiModal>
                                            <a href="#technology">Технології</a>
                                        </NavListLiModal>
                                        <NavListLiModal>
                                            <a href="#services">Послуги</a>
                                        </NavListLiModal>
                                    </NavListModal>
                                ) : (<></>)
                            }

                        </RightSideNavBar>
                    </ContainerNavBar>
                    <ContentHeader>
                        <svg className='svgDiv' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#fff" fillOpacity="1" d="M0,288L40,282.7C80,277,160,267,240,256C320,245,400,235,480,224C560,213,640,203,720,202.7C800,203,880,213,960,192C1040,171,1120,117,1200,85.3C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                        </svg>
                        <LeftSideOfContentHeader>       
                            <h1 id="typedText">
                                {props.headerInfo[0].h1}
                            </h1>
                            <h2>
                                <Typed
                                    strings={[
                                        props.headerInfo[0].typed1,
                                        props.headerInfo[0].typed2,
                                        props.headerInfo[0].typed3,
                                        props.headerInfo[0].typed4
                                    ]}
                                    typeSpeed={150}
                                    backSpeed={100}
                                    loop
                                       
                                />
                                <br></br><br></br>
                                {props.headerInfo[0].h2}
                            </h2>
                            <a href='#about'>Дізнатися більше <ExpandMoreIcon /></a>
                        </LeftSideOfContentHeader>
                        <RightSideIfContentHeader>
                            <img src="./imac.png" alt="" />
                        </RightSideIfContentHeader>
                    </ContentHeader>
                </ContainerHeader>
                <AboutUs id="about">

                    <RightSideOfAboutUs>
                        <img src='./phoneabout.png'></img>
                    </RightSideOfAboutUs>
                    <LeftSideOfAboutUs>
                        <TitleOfAboutUs>
                            <h2>{props.aboutUs[0].h2}<span>{props.aboutUs[0].h2span}</span></h2>
                        </TitleOfAboutUs>
                        <p>
                            <span>{props.aboutUs[0].pspan1}</span>
                            <br /><br /><span>{props.aboutUs[0].pspan2}</span>
                            <br /><br /><span>{props.aboutUs[0].pspan3}</span>
                        </p>

                        <button onClick={handleClick}>Залишити заявку</button>

                        <div className="blocks">
                            <ContainerBlock>

                                <h3><Apartment className="icon" /> - {props.aboutUs[0].experience1}</h3>
                                <span>Років у сфері</span>
                            </ContainerBlock>
                            <ContainerBlock>

                                <h3><Computer className="icon" /> - {props.aboutUs[0].experience2}</h3>
                                <span>Вдалих наших проектів</span>
                            </ContainerBlock>
                            <ContainerBlock>

                                <h3><Group className="icon" /> - {props.aboutUs[0].experience3}</h3>
                                <span>Відгуків про нас</span>
                            </ContainerBlock>
                        </div>
                    </LeftSideOfAboutUs>

                </AboutUs>
                <Plan id="plan">
                    <LeftSideofPlan>
                        <img src="./build.png" alt="" />
                        <h2>Послідовність <br />роботи</h2>
                    </LeftSideofPlan>
                    <RightSideSideofPlan>
                        <p>
                            {titleOfPlan}
                        </p>
                        <h3>
                            {textOfPlan}
                        </h3>
                        <div>
                            <SectionOfPlan>
                                <div onClick={() => handleChangeTextOfPlan("zviazok")}>
                                    <img src="./mobila.png" alt="" />
                                    <p>Звʼязок з нами</p>
                                </div>
                                <div onClick={() => handleChangeTextOfPlan("ckl_dogovor")}>
                                    <img src="./hands.png" alt="" />
                                    <p>Складання плану та обговорення</p>
                                </div>
                            </SectionOfPlan>
                            <SectionOfPlan>
                                <div onClick={() => handleChangeTextOfPlan("pidp_zviazok")}>
                                    <img src="./dogovor.png" alt="" />
                                    <p>Підписання договору</p>
                                </div>
                                <div onClick={() => handleChangeTextOfPlan("demka")}>
                                    <img src="./comp.png" alt="" />
                                    <p>Демонстрація сайту та його обговорення</p>
                                </div>
                            </SectionOfPlan>
                            <SectionOfPlan>
                                <div onClick={() => handleChangeTextOfPlan("zdaza_robotu")}>
                                    <img src="./tik.png" alt="" />
                                    <p>Здача роботи</p>
                                </div>
                            </SectionOfPlan>
                        </div>
                    </RightSideSideofPlan>
                </Plan>
                <Technology id="technology">
                    <svg xmlns="http://www.w3.org/2000/svg" className='wave1' viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,32L60,26.7C120,21,240,11,360,32C480,53,600,107,720,128C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                    <BodyOfTechnology>
                        <LeftSideOfTechnology>
                            <div>
                                <h2>
                                    <span>Технології</span>, які ми використовуємо
                                </h2>
                                <div>
                                    <p>Ми працюємо з усім спектром технологій, які дозволяють html, css та javascript <br></br>Наприклад:</p>
                                    <ul>
                                        <li><TaskAltIcon className="iconTech" />html, css, javascript</li>
                                        <li><TaskAltIcon className="iconTech" />bootstrap, jQuery</li>
                                        <li><TaskAltIcon className="iconTech" />react, next, expo</li>
                                    </ul>
                                </div>
                            </div>
                        </LeftSideOfTechnology>
                        <RightSideOfTechnology>
                            <div className='parallax-obj'>

                                <img src="./bootstrap.svg.png" className='img1' alt="" />
                                <img src="./react.svg.png" className='img2' alt="" />
                                <img src="./jquery.svg" className='img3' alt="" />
                                <img src="./next.svg.png" className='img4' alt="" />
                                <img src="./node.svg.png" className='img5' alt="" />
                            </div>

                        </RightSideOfTechnology>
                    </BodyOfTechnology>
                    <svg xmlns="http://www.w3.org/2000/svg" className='wave2' viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,112C480,139,600,213,720,229.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>


                </Technology>
                <Items>

                    <div className='ItemsDesc'>
                        <h2>Послуги</h2>
                        <p>Надаємо повний спектор послуг з розробки сайту під ключ, ми створюємо: логотип, назву, стиль та дизайн сайту, створюємо сам сайт</p>
                    </div>
                    <div className='ItemsWhoJustStayingNotOpened' onClick={handleShowPrices}>
                        <div>
                            <img src="./1.png" className='firstimg'></img>
                            <img src="./2.png" className='secondimg'></img>
                            <img src="./3.png" className='thirdimg'></img>
                        </div>
                        <p><span>☝</span> Натисни щоб побачити більше нашого асортименту ;)</p>
                    </div>
                </Items>
                <Services id="services">
                    {
                        showPrices && (
                            <>
                                {/* <ServiceHeader>
                                    <img src="./poslygu.png" alt="" />
                                    <h2>Досліджуйте наші <span>послуги</span></h2>
                                    <h3>Ми надаємо повний спектор послуг з розробки сайту під ключ, <br />ми створюємо: логотип, назву, стиль та дизайн сайту, створюємо сам сайт</h3>
                                </ServiceHeader> */}
                                <ServiceBody>
                                    <TemplateOfSite>
                                        <div>
                                            <img src="./single.png" alt="" />
                                        </div>
                                        <div>
                                            <PriceOfTemplate>
                                                {props.prices[0].prices1}
                                            </PriceOfTemplate>
                                            <div>
                                                <HeaderOfTemplate>
                                                    <TitleOfSite>
                                                        Односторінкой сайт
                                                    </TitleOfSite>
                                                    <div>
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                    </div>
                                                </HeaderOfTemplate>
                                                <BodyOfTemplate>
                                                    <p>
                                                        Швидко | Недорого | Чудовий результат
                                                    </p>
                                                    <div>
                                                        <button onClick={handleClick}>Залишити заявку</button>
                                                    </div>
                                                </BodyOfTemplate>
                                            </div>
                                        </div>
                                    </TemplateOfSite>
                                    <TemplateOfSite>
                                        <div>
                                            <img src="./multi.png" alt="" />
                                        </div>
                                        <div>
                                            <PriceOfTemplate>
                                                {props.prices[0].prices2}
                                            </PriceOfTemplate>
                                            <div>
                                                <HeaderOfTemplate>
                                                    <TitleOfSite>
                                                        Багатосторінкой сайт
                                                    </TitleOfSite>
                                                    <div>
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                    </div>
                                                </HeaderOfTemplate>
                                                <BodyOfTemplate>
                                                    <p>
                                                        Більше часу на розробку | Ідеальний результат
                                                    </p>
                                                    <div>
                                                        <button onClick={handleClick}>Залишити заявку</button>
                                                    </div>
                                                </BodyOfTemplate>
                                            </div>
                                        </div>
                                    </TemplateOfSite>
                                    <TemplateOfSite>
                                        <div>
                                            <img src="./react3.png" alt="" />
                                        </div>
                                        <div>
                                            <PriceOfTemplate>
                                                {props.prices[0].prices3}
                                            </PriceOfTemplate>
                                            <div>
                                                <HeaderOfTemplate>
                                                    <TitleOfSite>
                                                        Сайт на нових технологіях
                                                    </TitleOfSite>
                                                    <div>
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                    </div>
                                                </HeaderOfTemplate>
                                                <BodyOfTemplate>
                                                    <p>
                                                        Швидкий | Зручний | Багато можливостей
                                                    </p>
                                                    <div>
                                                        <button onClick={handleClick}>Залишити заявку</button>
                                                    </div>
                                                </BodyOfTemplate>
                                            </div>
                                        </div>
                                    </TemplateOfSite>
                                </ServiceBody>

                                <ServiceBody className='secondServiceBody '>
                                    <TemplateOfSite className='templatejs notgoingtoshow'>
                                        <div>
                                            <img src="./shop.png" alt="" />
                                        </div>
                                        <div>
                                            <PriceOfTemplate>
                                                {props.prices[0].prices4}
                                            </PriceOfTemplate>
                                            <div>
                                                <HeaderOfTemplate>
                                                    <TitleOfSite>
                                                        Інтернет магазин
                                                    </TitleOfSite>
                                                    <div>
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                        <StarOutlinedIcon className="iconStar" />
                                                    </div>
                                                </HeaderOfTemplate>
                                                <BodyOfTemplate>
                                                    <p>
                                                        Зручно | Своя база даних | Чудовий результат
                                                    </p>
                                                    <div>
                                                        <button onClick={handleClick}>Залишити заявку</button>
                                                    </div>
                                                </BodyOfTemplate>
                                            </div>
                                        </div>
                                    </TemplateOfSite>
                                </ServiceBody>
                                {/* <ServiceButton className='productsbutton'>
                                    <button className='templatejsclick'>Show more</button>
                                </ServiceButton> */}
                            </>
                        )
                    }

                </Services>
                <Footer>
                    <svg className='svgFooter' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,234.7C213.3,235,267,245,320,224C373.3,203,427,149,480,133.3C533.3,117,587,139,640,149.3C693.3,160,747,160,800,154.7C853.3,149,907,139,960,122.7C1013.3,107,1067,85,1120,80C1173.3,75,1227,85,1280,80C1333.3,75,1387,53,1413,42.7L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                    </svg>
                    <Partners>
                        {/* <h2>Наші партнери та не байдужі люди:</h2>
                        <div><img src='./visa.png'></img><img src='./mastercard.png'></img><img src='./reactblack.png'></img></div> */}
                        <p>Наш сайт це самостійний проект та повністью захищений компанією ProjectFS&trade;</p>
                    </Partners>
                    <RigthSideOfFooter>
                        <h2>ProjectForSale&trade;</h2>

                        <Phones>
                            <h3>Зв’яжіться з нами:</h3>
                            <p>+38(097)-120-6205</p>
                            <p>
                                @DimidrouPa
                            </p>
                            <p>projectforsale24@gmail.com</p>

                        </Phones>
                        <DaysWorking>
                            <h4>Пн-Пт: 8.00-20.00</h4><h4>Сб-Вс: 9.00-21.00</h4>
                        </DaysWorking>
                    </RigthSideOfFooter>
                </Footer>
            </ContentMain>
            <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    color: #000;
  
`;

const ContentMain = styled.div``;



const AboutUs = styled.div`
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    padding: 70px 100px;
    margin-top: -20px;
    position: relative;
    .svgAbout{
        position: absolute;
        bottom: -375px;
        left: 0;
        z-index: 0;
    }
    @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        justify-content: none;
        padding: 20px;
    }
`;

const LeftSideOfAboutUs = styled.div`
    flex: 0.5;
    text-align: center;
    justify-content: center;
    .blocks {
        display: flex;
        justify-content: center;
        flex-direction: row;
        text-align: left;
        margin-top: 20px;
        @media (max-width: 620px) {
            display: block  ;
            width: 100%;
        }
    }
    > span {
        color: #0095d2;
        position: relative;
        top: 20px;
        ::after {
            position: absolute;
            content: "";
            width: 45px;
            height: 2px;
            top: 50%;
            right: -55px;
            margin-top: -1px;
            background: #0095d2;
        }
    }
    > p {
        color: rgba(0, 0, 0, .6);
        font-weight: 600;
        margin-bottom: 50px;
    }
    
    > button {
        background-color: #0095d2;
        padding: 20px 25px;
        color: #fff;
        font-weight: 500;
        display: block;
        margin: 0 auto;
        border-radius:10px;
        font-family: 'EUkraineLogo';
        font-size: 16px;
        border: none;
        outline: none;

        :hover{
            cursor: pointer;      
        }
    }
`;

const RightSideOfAboutUs = styled.div`
    flex: 0.5;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > img {
        width: 100%;
        @media (max-width: 760px) {
            width: 100%;
        }
        @media (max-width: 500px) {
        display: none;
    }
    }
    @media (max-width: 1300px) {
        margin-top: 140px;
    }
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

`;

const TitleOfAboutUs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    > h2 {
        font-size: 40px;
        font-family:'EUkraineLogo';
        > span {
            color: #0095d2;
        }
    }
`;

const Plan = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    padding: 0 100px;
    margin-top: 50px;
    @media (max-width: 1250px) {
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 760px) {
        padding: 0;
    }
`;

const LeftSideofPlan = styled.div`
    flex: 0.4;
    background-image: url('./bgrobota.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    > h2 {
        font-weight: 600;
        font-size: 30px;
        text-align: center;
    }
    @media (max-width: 1250px) {
        flex: 0;
        padding-top: 30px;
    }
    @media (max-width: 620px) {
        background-size: cover;
    }
`;

const RightSideSideofPlan = styled.div`
    flex: 0.6;
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    padding-top: 70px;

    > p {
        color: #0095d2;
        position: relative;
        ::after {
            position: absolute;
            content: "";
            width: 45px;
            height: 2px;
            top: 150%;
            left: 0;
            margin-top: -1px;
            background: #0095d2;
        }
    }
    > h3 {
        width: auto;
        font-weight: 500;
        overflow-wrap: break-word;
        height: 60px;
    }
    @media (max-width: 1250px) {
        min-height: 600px;
    }
    
`;

const SectionOfPlan = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    > div {
        display: flex;
        align-items: center;
        overflow-wrap: break-word;
        position: relative;
        top: 150px;
        width: 300px;
        > img {
            width: 40px;
        }
        > p {
            margin-left: 10px;
        }
        :hover {
            cursor: pointer;
        }
        @media (max-width: 760px) {
            top: 100px;
        }
    }
    @media (max-width: 760px) {
        padding: 0;
    }
`;

const Items = styled.div`
    display: flex;
    padding: 0 100px;
    height: 600px;
    justify-content: space-between;
    flex-direction: row-reverse;
    @media(max-width:600px){
                padding: 0;
                justify-content: center;
                display: block;
                text-align: center;
            }
    >  .ItemsWhoJustStayingNotOpened{
        position: relative;
        flex:0.5;
        @media(max-width:600px){
                margin: 0 auto;
                
            }
        > p{
                position: absolute;
                font-size: 15px;
                display: block;
                bottom: -20px;
                z-index: 3;
                > span{
                    font-size: 50px;
                }
            }
        >div{
            position: relative;
            height: 100;
            left: 0px;
            @media(max-width:600px){
                    padding: 0 10px;
                    
                    .firstimg,.thirdimg{
                        display: none;
                    }
                    .secondimg{
                        position: static;
                        width: 100%;
                    }
                }
            >img{
                transition: .5s;
                box-shadow: 0px 0px 5px #ccc;
                height: 400px;
                position: absolute;
                
            }
            
            :hover .firstimg{
                transform: rotate(-15deg) translateX(-100px) translateY(-20px);
            }
            :hover .secondimg{
            }
            :hover .thirdimg{
                transform: rotate(15deg) translateX(100px) translateY(-20px);
            }
            
            >.firstimg{
                z-index: 2;
                left: 50px;
                top: 120px;
            }
            >.secondimg{
                z-index: 3;
                left: 110px;
                top: 80px;
            }
            >.thirdimg{
                z-index: 1;
                left: 180px;
                top: 120px;
            }
        }
    }
    > .ItemsDesc{
        @media(max-width:600px){
                margin: 0 auto;
                padding: 0 10px;
            }
        flex:0.5;
        margin-right: 50px;
        text-align: center;
        >h2{
            margin-top: 100px;
            font-size: 50px;
            text-align: center;
            font-family: "EUkraineLogo";

        }
        >p{
            font-size: 20px;
            font-weight:600;
        }
    }

`;

const Services = styled.div`
    display: flex;
    z-index: 2;
    position: relative;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    padding: 0 100px;
    .secondServiceBody {
        margin-top: -50px;
        @media (max-width: 1120px) {
            margin-top: 470px;
        }
    
    }
    @media (max-width: 1250px){
        margin-top: 100px;
    }
    @media (max-width: 760px){
        margin-top: 100px;
        padding: 0;
    }
    
`;
const ServiceButton = styled.div`
    .templatejsclick{
        text-align: center;
        border: none;
        display: block;
        font-size: 24px;
        padding: 20px;
        background-color: #0095d2;
        border-radius: 5px;
        color:#fff;
        margin: 0 auto;
        :hover{
            cursor: pointer;
        }
    }
    
`;

const ServiceHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    > img {
        width: 180px;
        margin: 0 auto;
    }
    > h2 {
        margin-top: 3px;
        > span {
            color: #0095d2;
        }
    }
    > h3 {
        text-align: center;
        margin-top: -10px;
        width: auto;
        overflow-wrap: break-word;
    }
`;

const ServiceBody = styled.div`
    border-radius: 10px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 600px;
    > div {
        > div {
            padding: 0 40px;
            margin-top: -20px;
            padding-bottom: 20px;
        }
    }
    @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;
        margin-top: 520px;
    }
`;

const TemplateOfSite = styled.div`
    width: 31.7%;
    height: fit-content;
    margin-top: 20px;

    background-color: whitesmoke;
    transition: .5s;
    :hover{
        box-shadow: 0px 3px 5px #ccc;
        transform: translateY(-10px) scale(1.01);
    }
    > div {
        :first-child{
            height: 273px;
            padding: 0;
            margin: 0;
            background-color: #0094cf;
            > img {
                background-size: contain;
                height: 273px;
                display: block;
                margin: 0 auto;
            }
        }
    }
    @media (max-width: 1120px) {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 40%;
    }
    @media (max-width: 920px) {
        width: 50%;
    }
    @media (max-width: 776px) {
        width: 70%;
    }
    @media (max-width: 630px) {
        width: 100%;
    }
`;

const PriceOfTemplate = styled.div`
    background-color: #0094cf;
    padding: 1px 7px;
    width: fit-content;
    color: #fff;
    position: relative;
    z-index: 2;
    top: 5px;
`;

const HeaderOfTemplate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconStar {
        color: #0095d2;
        font-size: 17px;
    }
`;

const TitleOfSite = styled.h3`
    font-size: 17px;
`;

const BodyOfTemplate = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 150px;
    > div {
        > button {
            border: none;
            outline: none;
            background-color: #0095d2;
            color: white;
            padding: 7px 12px;
            font-size: 16px;
            :hover {
                cursor: pointer;
            }
        }
    }
`;

const Technology = styled.div`
    background:linear-gradient(45deg, #0e1747, #4968c7);
    display: flex;
    width: 100%;
    height: 1100px;
    padding: 0 100px;
    color: white;
    margin: 80px 0 80px 0;
    position: relative;
    .wave1,.wave2{
        position: absolute;
        left: 0;
        z-index: 1;
    }
    .wave1{
        top:-1px;     
    }
    .wave2{
        bottom:-1px;     
    }
    @media (max-width: 1200px) {
        margin-top: 500px;
    }
    @media (max-width: 1000px) {
        margin-top: 400px;
    }
    @media (max-width: 890px) {
        height: 800px;
    }
    @media (max-width: 550px) {
        height: 800px;
        padding: 0;
    }
`;

const BodyOfTechnology = styled.div`
    height: 1000px;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 890px) {
        flex-direction: column;
    }
    @media (max-width: 620px) {
        padding: 0 20px;
    }
`;

const LeftSideOfTechnology = styled.div`
    flex: 0.5;
    height: 65%;
    @media (max-width: 620px) {
        flex: 1;
        text-align: center;
    }
    h2{
        font-size: 40px;
        margin-bottom:100px;
        display: block;
        span{
            font-family: "EUkraineLogo";
        }
        
    }
    
    /* > p {
        color: #0095d2;
        position: relative;
        top: 20px;
        ::after {
            position: absolute;
            content: "";
            width: 45px;
            height: 2px;
            top: 150%;
            left: 0;
            margin-top: -1px;
            background: #0095d2;
        }
    } */
    > div {
        
        font-size: 23px;
        font-weight: 600;
        
        position: relative;
        top: 0px;
        > div {
            > p {
                margin-bottom: 40px;
                line-height: 33px;
            }
            > ul {
                list-style: none;
                position: relative;
                left: -40px;
                @media (max-width: 620px) {
                        
                    }
                > li {
                    margin: 20px 0;
                    display: flex;
                    align-items: center;
                    @media (max-width: 620px) {
                      justify-content: center;  
                    }
        
                    .iconTech {
                        margin-right: 7px;
                        color: #0095d2;
                    }
                }
            }
        }
        @media (max-width: 1120px) {
            top: -50px;
        }
        @media (max-width: 730px) {
            top: 0px;
        }
        @media (max-width: 580px) {
            top: 50px;
        }
    }
`;

const RightSideOfTechnology = styled.div`
    flex: 0.5;
    height: 65%;
    position: relative;
    .parallax-obj{
        @media (max-width: 620px) {
                display: none;
            }
        > p {
            font-family: 'EUkraineLogo';
            font-size: 50px;
            position: relative;
            transform: translateY(-50%);
            z-index:2;
            display:block;
            text-align: center;
            margin: 50% 0 50% 0;
        }
        > img {
            object-fit: cover;
            position:absolute;
            height: 130px;
            @media (max-width: 1200px) {
                height: 130px;
            }
            @media (max-width: 1100px) {
                height: 120px;
            }
            @media (max-width: 950px) {
                height: 110px;
            }
            @media (max-width: 890px) {
                height: 100px;
            }
            @media (max-width: 680px) {
                height: 89px;
            }
            
        } 
        > .img1{
            top:40px;
            left: 20px;
        }
        > .img2{
            top:90px;
            right: 20px;
        }
        > .img3{
            top:320px;
            left: 20px;
        }
        > .img4{
            top:170px;
            left: 200px;
        }
        > .img5{
            top:390px;
            right: 40px;
        }
    }
    
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    background: linear-gradient(45deg,#0095d2, #5f00c1, #ee7752, #e73c7e);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    width: 100%;
    height: 100%;
    position: relative;
    @media (max-width: 620px) {
        text-align: center;
        height: 100%;
        justify-content: center;
        flex-direction: column;
    }
    .svgFooter{
        position: absolute;
        top:-20px;
        left:0;
        z-index: 1;
        @media (max-width: 620px) {
            display: none;
        }
    }
`;

const Partners = styled.div`
    color: #fff;
    z-index: 2;
    flex: 0.5;
    margin-top: 250px;
    > div{
        >img{
            height: 60px;
            margin: 0 30px;
        }
        
    }
    >p{
            margin-top: 50px;
            font-weight: 600;
        }
        @media (max-width: 620px) {
        margin-top: 10px;
    }
`;

const DaysWorking = styled.div`
@media (max-width: 620px) {
        font-size: 15px;
    }
`;

const RigthSideOfFooter = styled.div`
    flex: 0.5;
    z-index: 2;
    margin-top:120px;
    width: 100%;
    text-align:right;
    color: #fff;
    font-family: 'EUkraineLogo';
    display: flex;
    text-align: right;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    h2{
        font-size: 50px;
    }
    @media (max-width: 620px) {
        margin-top: 30px;
        h2{
            font-size: 22px;
        }
    }
`;

const Phones = styled.div`
    @media (max-width: 620px) {
        font-size: 16px;
    }
`;


const ContainerBlock = styled.div`
    width: 250px;
    padding: 10px;
    font-family: 'EUkraineLogo';
    margin: 0 20px;
    height: 130px;
    width: 250px;
    border: none;
    background: linear-gradient(45deg, #4193cd, #4968c7);
    color: white;
    border-radius: 10px;
    transition: .5s;
    :hover{
        cursor: pointer;
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0px 1px 5px black;
    }
    >h3{
        display: flex;
        align-items: center;
    }
    .icon {
        color: #fff;
        margin-right: 5px;
    }
    > span {
        color: #fff;
        font-size: 16px;
    }
    @media (max-width: 620px) {
        display: block;
        >h3{
            justify-content: center;
        }
        text-align: center;
        font-size: 16px;
        margin: 10px 0;
            width: 100%;
    }
`;

const ContainerHeader = styled.div`
height:100vh;
.scrolled{
    background-color: transparent;
    padding: 0 40px;
    transition: .7s;
    height: 80px;
    @media(max-width: 620px){
        background-color: #fff;
        
    }
    a{
        color: #fff;
        font-size: 18px;
        transition: .7s;
        @media(max-width: 620px){
        color: #000;
        }
    }
    h2{
    color: #fff;
    font-size: 30px;
    transition: .7s;
    @media(max-width: 620px){
        color: #000;
        }
    }
    span{
        color: #fff;
        transition: .3s;
        @media(max-width: 620px){
        color: #000;
        }
    }
  }
  
  .menu-scroll{
    padding: 0px;
    transition: .7s;
    height: 60px;
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #ccc;
    a{
        color: #363636;
        font-size: 16px;
        transition: .7s;
    }
    h2{
        color: #00658f;
        font-size:24px;
        transition: .7s;
    }
    span{
        color: #e6b944;
        transition: .7s;
    }
    
  }
`;

const ContentHeader = styled.div`
    background: linear-gradient(125deg,#0095d2, #5f00c1, #ee7752, #e73c7e);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    color: red;
    position: relative;
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 0 100px;
    align-items: center;
    .svgDiv{
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        @media (max-width: 640px) {

            display: none;
        
    }
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: none;
    }
    @media (max-width: 740px) {
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
`;

const LeftSideOfContentHeader = styled.div`
    color: #fff;
    z-index: 2;
    > h1 {
        max-width: 700px;
        font-size: 40px;
        font-weight: 800;
        font-family: 'EUkraineLogo';
    }
    > h2{
        margin-top:50px;
        max-width: 600px;
        font-size: 21px;
        font-weight: 500;
        > span {
            > span {
                :first-child {
                    font-size: 25px;
                    font-family: "EUkrainelogo";
                }
            }
        }
    }
    
        >a{
            width: 230px;
            padding: 15px;
            transition: .4s;
            background-color: #0095d2;
            border: none;
            display: flex;
            align-items:center;
            justify-content: center;
            font-size: 16px;
            font-family:'EUkraineLogo';
            border-radius: 5px;
            :hover{
                cursor: pointer;
                background-color: #00b7e5;
            }
        }
        
    
    @media (max-width: 1200px) {
        width: 80%;
    }
`;

const RightSideIfContentHeader = styled.div`
    > img {
        width: 600px;
        transform: translateY(65px);
    }
    @media (max-width: 640px) {

            display: none;
        
    }
`;


const ContainerNavBar = styled.div`
  position: fixed;
  width: 100%;
  font-family: "EUkraineLogo";
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
  top: 0;
  left: 0;
  
`;

const LeftSideNavBar = styled.div`
  > h2{
    color: #00658f;
    > span{
        color: #e6b944;
    }
  }
`;

const RightSideNavBar = styled.div`
  flex: 0.6;
  .listIcon {
    display: none;
  }
  @media (max-width: 1200px) {
    flex: 0.9;
  }
  @media (max-width: 900px) {
    .listIcon {
      margin-left: auto;
      display: flex;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavListModal = styled.ul`
  display: none;
  list-style: none;
  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    background-color: rgba(255, 255, 255, .95);
  }
`;

const NavListLi = styled.li`
    .phonenumberforjs{
        transition: .7s;
    }
    .phonenumberlinon{
       font-size: 0px;
       margin-left: 0;
        
    }
    .phonenumberli{
        margin-left: 50px;
        background: linear-gradient(125deg, #0095d2, #5f00c1);
        padding: 10px 15px;
        color: #fff;
        border-radius: 15px;
        font-weight: 500;
        font-size: 16px;
        border: none;
        outline: none;
    }

    
  > a {
    color: rgba(0, 0, 0, .6);
    ::after {
      background-color: #0095d2; /* Цвет линии при наведении на нее курсора мыши */
      display: block;
      content: "";
      height: 2px; /* Высота линии */
      width: 0%;
      -webkit-transition: width .3s ease-in-out;
      -moz--transition: width .3s ease-in-out;
      transition: width .3s ease-in-out;
    }

    :hover:after, :focus:after {
      width: 100%;
    }
    
}
`;

const NavListLiModal = styled.li`
  margin-bottom: 10px;
  > a {
    color: #000;
    ::after {
      background-color: #0095d2; /* Цвет линии при наведении на нее курсора мыши */
      display: block;
      content: "";
      height: 2px; /* Высота линии */
      width: 0%;
      -webkit-transition: width .3s ease-in-out;
      -moz--transition: width .3s ease-in-out;
      transition: width .3s ease-in-out;
    }
    :hover:after, :focus:after {
      width: 100%;
    }
}
`;

export default Main;