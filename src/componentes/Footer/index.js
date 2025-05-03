import './Footer.css'

const Footer = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='https://www.instagram.com/'>
                        <img src='imagens/ig.png' alt='logo instagram'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/'>
                        <img src='imagens/fb.png' alt='logo facebook'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com/'>
                        <img src='imagens/tw.png' alt='logo X'/>
                    </a>
                </li>          
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <img  src='imagens/logo.png' alt='logo organo'/>
                </li>
            </ul>
        </section>
            <p>Desenvolvido por <a href='https://www.alura.com.br/'>Alura</a>
            </p>
    </footer>
        
)}

export default Footer