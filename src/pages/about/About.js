import './About.css';
import home from '../../assets/home.png';
import traffic from '../../assets/traffic.png';
import jus from '../../assets/jus.png';
import rui from '../../assets/logoRui.png';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function About() {

    return (
        <>
            <section className="about" id="atuacao">

                <h1 className="heading"> <span>Áreas de</span> atuação </h1>

                <div className="row">

                    <div className="image">
                        <img src={traffic} />
                    </div>

                    <div className="content">
                        <h3 style={{ color: '#FFBB33' }}>Direito de Trânsito</h3>
                        <p style={{ fontSize: 18, textAlign: 'justify' }}>Trabalhamos em estreita colaboração com nossos clientes em todas as etapas para que possam ter resguardados o seu direito de dirigir. Atuamos tanto na esfera administrativa como judicial com fito na obtenção do melhor resultado. Assim, você pode ter certeza que nossa atuação será diligente, objetivando atender às suas necessidades.</p>
                    </div>

                </div>

            </section>

            <section className="about">

                <div className="row">

                    <div className="image">
                        <img src={jus} />
                    </div>

                    <div className="content">
                        <h3 style={{ color: '#FFBB33' }}>Nosso Foco! </h3>
                        <p style={{ color: '#d3ad7f', fontSize: 18 }}>É trazer o melhor resultado para você.</p>
                        <li style={{ color: '#fff', fontSize: 18, textAlign: 'justify' }}>Ação de Transferência de Pontos.</li>
                        <li style={{ color: '#fff', fontSize: 18, textAlign: 'justify' }}>Recusa em fazer o teste do bafômetro.</li>
                        <li style={{ color: '#fff', fontSize: 18, textAlign: 'justify' }}>Recurso de cassação e suspensão de CNH.</li>
                        <li style={{ color: '#fff', fontSize: 18, textAlign: 'justify' }}>Recurso de multas vencidas.</li>
                    </div>

                </div>

            </section>

            <section className="about">

                <h1 className="heading"> <span>Nosso</span> pensamento </h1>

                <div className="row">

                    <div className="image">
                        <img src={rui} />
                    </div>

                    <div className="content">
                        <h1 className="heading"> <span>Rui Barbosa</span></h1>
                        <p style={{ fontSize: 18, textAlign: 'justify' }}>
                            Onde quer que haja um direito individual violado, há de haver um recurso judicial para a debelação da injustiça; este, o princípio fundamental de todas as Constituições livres.
                        </p>
                    </div>

                </div>

            </section>

            <section className="about" id="about">

                <h1 className="heading"> <span>Contato</span></h1>

                <div className="row">

                    <div className="image">
                        <img src={home} />
                    </div>

                    <div className="content">
                        <h3>Telefone</h3>
                        <p>(51) 99442-5566</p>
                        <h3>E-mail</h3>
                        <Link to={'mailto:douglasmacieladvogado@gmail.com'}>
                            <p>douglasmacieladvogado@gmail.com</p>
                        </Link>
                        <h3>Social</h3>
                        <p>
                            <Link to={'https://www.instagram.com/dmadvocacia4/'} target="_blank">
                                <InstagramOutlined />
                            </Link>

                            <Link to={'/'}>
                                <TwitterOutlined />
                            </Link>

                            <Link to={'https://www.facebook.com/douglasmarcelo.maciel'} target="_blank">
                                <FacebookOutlined />
                            </Link>

                        </p>
                    </div>

                </div>

            </section>

            <section className="about" id="location">

                <h1 className="heading"> <span>Localização</span></h1>

                <div className="row">

                    <div className="mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13861.706063070076!2d-51.4834774!3d-29.70740215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951be52fd77a0227%3A0xc0a2db5d9e6d27f0!2sR.%20Jos%C3%A9%20Nerci%20Mombach%20-%20Timba%C3%BAva%2C%20Montenegro%20-%20RS%2C%2095780-000!5e0!3m2!1spt-BR!2sbr!4v1685216019651!5m2!1spt-BR!2sbr" />
                    </div>
                    <div className="content">
                        <p style={{ textAlign: 'justify' }}>Endereço: José Nerci Mombach, 66, Sala 1</p>
                        <p style={{ textAlign: 'justify' }}>Timbaúva, Montenegro - RS, 95780-000</p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default About;