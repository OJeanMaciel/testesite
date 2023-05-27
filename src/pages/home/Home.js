import '../home/Home.css';

import logo from '../../assets/logo.png';
import About from "../../pages/about/About";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { WhatsAppOutlined } from '@ant-design/icons';

function Home() {

    return (
        <>
            <Navbar></Navbar>

            <section className="home" id="home">
                <div className="content">
                    <h3 style={{ marginBottom: '110px', color: '#FFBB33' }}><img src={logo} style={{ width: 90, height: 90 }} /> Douglas Marcelo Maciel Advogado</h3>
                    <br />
                    <h3 style={{ textTransform: 'uppercase' }} >Lutamos pelo seu direito de Dirigir</h3>
                    <p style={{ marginTop: '100px' }}>Nós fornecemos a você assistência jurídica direta e especializada para que você possa resolver problemas cedo e amigavelmente.</p>
                </div>
                <a href="https://api.whatsapp.com/send?phone=551994425566" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                    <WhatsAppOutlined className="whatsapp-icon" />
                </a>
            </section>

            <About></About>

            <Footer></Footer>
        </>
    )
}

export default Home;