import riotLogo from '../assets/riotLogo.png';
import TFTLogo from '../assets/TFTLogo.png';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion} from "framer-motion";





const Header = () => {


  return (
    <Nav>
        <Col>
        <Link to="/">
        <Logo src={riotLogo} />
        </Link>

        <Link to="/">
        <Logo src={TFTLogo} />
        </Link>
                

                <Items>
                    <Link to="/">
                    <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>새소식</Item>
                    </Link>
                    
                    <Link to="/">
                    <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>세트 개요</Item>
                    </Link>
                    <Link to="/">
                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>연구소</Item>
                    </Link>
                    <Link to="/">
                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>날먹덱</Item>
                    </Link>

                </Items>
            </Col>

    </Nav>
    

  );
};

export default Header;

const Nav = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 10px;
    background: black;
    height: 80px;
    font-size: 14px;
    padding: 20px 60px;
    z-index: 1000000000;
    border-radius: 10px;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled(motion.img)`
    margin-right: 50px;
    width: 35px;
    height: 35px;
    &:hover {
        filter: brightness(170%);
        scale: 1.2;
    }

`;

const Items = styled.ul`
    display: flex;
    align-items: center;
    position: relative;

`;

const Item = styled(motion.li)`
    margin-right: 20px;
    color: white;
    border-radius: 15px;
    white-space: nowrap;
    font-size: 18px;
    padding: 15px;
    font-weight: 600;
    transition: color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;


`;

