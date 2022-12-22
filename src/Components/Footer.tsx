import riotLogoWhite from '../assets/riot-games-log-white.png';
import TFTLogo from '../assets/TFTLogo.png';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion} from "framer-motion";
import KrRating from '../assets/kr-rating.png';







const Footer = () => {


  return (
<footer style={{backgroundColor: 'black', width: '100%', height: '650px', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
    <div>
        <Logo src={riotLogoWhite} />

    </div>

    <div>
        <p style={{maxWidth:'800px', color: 'gray'}}>
        © 2022 Riot Games, Inc. League of Legends, Teamfight Tactics and all related logos, characters, names and distinctive likenesses thereof are the exclusive property of Riot Games, Inc. All rights reserved.

        </p>
        <div>
        <p style={{maxWidth:'600px', color: 'gray', marginTop: '40px'}}>
            라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층(삼성동, 파르나스타워)
            <br />
            대표자: 조혁진 | 대표전화: 02-3454- 1560 | FAX: 02-3454-1565
            <br />
            사업자등록번호: 120-87-68488|통신판매업신고: 2011-서울강남-0218

       

        </p>
        
            
        </div>
    </div>

    <div>
    <Items>
                  
                    <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>서비스 약관</Item>
                    
                    
                  
                    <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>개인정보 처리방침</Item>
                    
                  
                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>서비스 상태</Item>
                    
                  
                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>게임시간 선택제</Item>

                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>사회공헌</Item>

                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>사업자정보확인</Item>

                        <Item whileHover={{backgroundColor: '#495579', borderBottom: '2px solid orange'}}>쿠키 설정</Item>
                    

                </Items>

    </div>

    <div style={{ marginTop: '30px', backgroundColor: 'gray',display: 'flex', padding: '5px', borderRadius:' 7px'}}>
    <img src={KrRating} style={{ height: '100px'}}/>


    </div>




</footer>
    

  );
};

export default Footer;

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

    height: 200px;

    &:hover {
        filter: brightness(170%);
        scale: 1.2;
    }

`;

const Items = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 50px;

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



