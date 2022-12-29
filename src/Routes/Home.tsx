import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import styled from "styled-components";
import bannerFrame from '../assets/bannerFrame.png';
import floatingPengGu from '../assets/pengu.png';
import portal from '../assets/portal.png';
import evilAndPengGu from '../assets/tft-set-8-meta-image.jpg';
import blueGhost from '../assets/hauntling.png';
import blueFox from '../assets/hushtail.png';
import miniHorn from '../assets/furyhorn.png';
import upperWrapper from '../assets/upper.png';
import lowerWrapper from '../assets/lower.png';
import newsImg1 from '../assets/newsImg1.jpg';
import newsImg2 from '../assets/newsImg2.jpg';
import newsImg3 from '../assets/newsImg3.jpg';
import eveningCloud from '../assets/layer-background.png'; 
import chessMap from '../assets/layer-2.png';    
import smallCloud from '../assets/layer-3.png';
import appleMarket from '../assets/appstore.png';




const Home = () => {

    
    return (
        <>
            <SectionOne>

                <VideoWrapper>

    <ReactPlayer
      url="https://www.youtube.com/embed/4HPfUrO5fBY&t=1s?showinfo=0&enablejsapi=1&origin=http://localhost:3000"
      playing={true}
      volume={0.3}
      loop={true}
      width={'95%'}
      height={'90%'}
 
      style={{  zIndex: '-4', filter: 'brightness(60%)', margin: '0 auto'}}
    />
    <img src={bannerFrame} style={{position: "absolute",
    width: "95%",
    height: "95%",
    top: "-20px",
    left: "25px",}}/>



<FloatingPengGu src={floatingPengGu} />



    <div style={{position: 'absolute',
    top: '60px',
    right: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}}>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 139.85" style={{ height: '200px', width: '400px',margin: '0 auto' , animation: 'fade-in-slide-in 1.5s ease-in-out'}}>
  <title >Teamfight Tactics Logo</title>
  <g fill="#FDF4EE">
    <path className="cls-1" d="M291,76.75h16.24v62.13H291Z"/>
    <path className="cls-1" d="M291,.18h16.24V62.31H291Z"/>
    <path className="cls-1" d="M376.17,116.76c-2.8,14-13.21,23.21-30.34,23.09-18.29-.13-31.25-13.22-31.25-32s13-32,31.25-32c15.79,0,26.16,8.7,29.85,21.92H359c-2.64-4.09-7-6.48-12.58-6.48-9.14,0-15.26,6.57-15.26,16.6s6.12,16.6,15.26,16.6c6.1,0,10.83-2.9,13.31-7.65Z"/>
    <path className="cls-1" d="M410.9,100.62c18,4.5,26.31,7.81,26.31,19.36s-7.78,19.87-27.65,19.87c-20.06,0-27.78-10.32-27.78-23.09H397.5c0,6.07,4,9.65,12.06,9.65,6.19,0,10.61-2.23,10.61-5.5,0-3-4.95-4.37-12-6.27-16.93-4.54-24.65-8.57-24.65-20,0-9.13,6.09-18.9,26.07-18.9s25.66,9.77,25.66,20.33H419.6c0-3.91-2.35-7-10-7s-9.3,2.9-9.3,5.33c0,3.1,3.63,4.42,10.64,6.17"/>
    <path className="cls-1" d="M117.7,76.74,111.18,91.3H95.64v47.58H79.32V91.3H60.79V76.74Z"/>
    <path className="cls-1" d="M227.52,116.76c-2.8,14-13.2,23.21-30.34,23.09-18.29-.13-31.24-13.22-31.24-32s12.95-32,31.24-32c15.79,0,26.17,8.7,29.85,21.92H210.37c-2.63-4.09-7.05-6.48-12.57-6.48-9.15,0-15.27,6.57-15.27,16.6s6.12,16.6,15.27,16.6c6.1,0,10.82-2.9,13.31-7.65Z"/>
    <path className="cls-1" d="M377.12,32.63V62.31l-13.83-2.43C358.11,62.82,352.94,64,345.77,64c-18.25,0-31.19-13.2-31.19-32S327.52,0,345.77,0c15.62,0,25.93,8.53,29.69,21.53H358.71a14.39,14.39,0,0,0-12.32-6.11c-9.13,0-15.24,6.55-15.24,16.57s6.11,16.56,15.24,16.56c6.73,0,14.79-4,14.79-15.95h15.95Z"/>
    <path className="cls-1" d="M77,14.74v9.78h24.46L95,38.73H77v9h26.12L96.54,62.31H60.79V21.24l2.92-6.5H43v62l-16.32-3v-59H6.53L0,.18H103.07V14.74Z"/>
    <path className="cls-1" d="M140.71.18H126.56l3,7.26L104.92,62.31h16.62L123.7,57l24-4.56L152,62.31h16.6ZM129.82,42.29l-.08,0,6.66-16.24,5.95,13.85Z"/>
    <path className="cls-1" d="M257.18,14.74v9.78h24.45l-6.37,14.21H257.18V62.31H241V.18h42.27V14.74Z"/>
    <path className="cls-1" d="M283.29,76.74V91.3H264.76v47.58H248.44V91.3H232.91l-6.53-14.56Z"/>
    <path className="cls-1" d="M500,.18l-6.52,14.55H473.3v59.1L457,76.74v-62H436.06L439,22V62.31H422.73V36.72l-20.94,4V62.31H385.55V.18h16.24V26.49l20.94-4V.18Z"/>
    <path className="cls-1" d="M233.31.18V62.31H217.42V30.69L203.5,47.22h-1.16L188.5,30.69V62.31h-16V.18h9.33L203,26.9,224.64.18Z"/>
    <path className="cls-1" d="M140.42,76.75H126.27l3,7.25-24.61,54.88h16.61l2.16-5.27,24-4.56,4.23,9.83h16.6Zm-10.9,42.11-.08,0,6.66-16.25,6,13.86Z"/>
    <path className="cls-1" d="M434.44,76.74v.71h1.38v3.79h.87V77.45h1.37v-.71Z"/>
    <path className="cls-1" d="M442.7,76.74l-1.23,3.19-1.22-3.19H439v4.5h.81V77.73h0l1.34,3.51h.61l1.34-3.51h0v3.51H444v-4.5Z"/>
  </g>
</svg>
<div style={{width: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems:'center',marginTop:'50px', animation: 'fade-in-slide-in 1.8s ease-in-out'}}>
   
<PlayBtn>무료로 플래이하기</PlayBtn> 

<h2 style={{marginTop: '30px', fontWeight:'700',fontSize: '25px'}}> 모바일과 PC에서 무료로 플레이하세요</h2>
<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25px',animation: 'fade-in-slide-in 1.5s ease-in-out'}}>
 <svg style={{ height: "60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155 60"><defs><linearGradient id="a" x1="31.8" y1="183.29" x2="15.02" y2="166.51" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00a0ff"/><stop offset=".01" stop-color="#00a1ff"/><stop offset=".26" stop-color="#00beff"/><stop offset=".51" stop-color="#00d2ff"/><stop offset=".76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><linearGradient id="b" x1="43.83" y1="172" x2="19.64" y2="172" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe000"/><stop offset=".41" stop-color="#ffbd00"/><stop offset=".78" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><linearGradient id="c" x1="34.83" y1="169.7" x2="12.07" y2="146.95" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><linearGradient id="d" x1="17.3" y1="191.82" x2="27.46" y2="181.66" gradientTransform="matrix(1 0 0 -1 0 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32a071"/><stop offset=".07" stop-color="#2da771"/><stop offset=".48" stop-color="#15cf74"/><stop offset=".8" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient></defs><title>fil_get</title><path fill="none" d="M0 0h155v60H0z"/><rect x="10" y="10" width="135" height="40" rx="5" ry="5"/><path d="M140 10.8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H15a4.2 4.2 0 0 1-4.2-4.2V15a4.2 4.2 0 0 1 4.2-4.2h125m0-.8H15a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5z" fill="#a6a6a6"/><path d="M57.42 20.24a2.71 2.71 0 0 1-.75 2 2.91 2.91 0 0 1-2.2.89 3.15 3.15 0 0 1-2.21-5.37 3 3 0 0 1 2.21-.9 3.1 3.1 0 0 1 1.23.25 2.47 2.47 0 0 1 .94.67l-.53.53a2 2 0 0 0-1.64-.71 2.32 2.32 0 0 0-2.33 2.4 2.36 2.36 0 0 0 4 1.73 1.89 1.89 0 0 0 .5-1.22h-2.17v-.72h2.91a2.54 2.54 0 0 1 .04.45zM62 17.74h-2.7v1.9h2.46v.72H59.3v1.9H62V23h-3.5v-6H62zM65.28 23h-.77v-5.26h-1.68V17H67v.74h-1.72zM69.94 23v-6h.77v6zM74.13 23h-.77v-5.26h-1.68V17h4.12v.74h-1.67zM83.61 22.22a3.12 3.12 0 0 1-4.4 0 3.24 3.24 0 0 1 0-4.45 3.1 3.1 0 0 1 4.4 0 3.23 3.23 0 0 1 0 4.45zm-3.83-.5a2.31 2.31 0 0 0 3.26 0 2.56 2.56 0 0 0 0-3.44 2.31 2.31 0 0 0-3.26 0 2.56 2.56 0 0 0 0 3.44zM85.58 23v-6h.94l2.92 4.67V17h.77v6h-.8l-3.05-4.89V23z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width=".2"/><path d="M78.14 31.75A4.25 4.25 0 1 0 82.41 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83a2.58 2.58 0 1 1 2.4-2.58 2.46 2.46 0 0 1-2.4 2.58zm-9.31-6.83A4.25 4.25 0 1 0 73.09 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83A2.58 2.58 0 1 1 71.22 36a2.46 2.46 0 0 1-2.4 2.58zm-11.09-5.52v1.8h4.32a3.77 3.77 0 0 1-1 2.27 4.42 4.42 0 0 1-3.33 1.32 4.8 4.8 0 0 1 0-9.6A4.6 4.6 0 0 1 61 30.14l1.27-1.27A6.29 6.29 0 0 0 57.74 27a6.61 6.61 0 1 0 0 13.21 6 6 0 0 0 4.61-1.85 6 6 0 0 0 1.56-4.22 5.87 5.87 0 0 0-.1-1.13zm45.31 1.4a4 4 0 0 0-3.64-2.71 4 4 0 0 0-4 4.25 4.16 4.16 0 0 0 4.22 4.25 4.23 4.23 0 0 0 3.54-1.88l-1.45-1a2.43 2.43 0 0 1-2.09 1.18 2.16 2.16 0 0 1-2.06-1.29l5.69-2.35zm-5.8 1.42a2.33 2.33 0 0 1 2.22-2.48 1.65 1.65 0 0 1 1.58.9zM92.63 40h1.87V27.5h-1.87zm-3.06-7.3h-.07a3 3 0 0 0-2.24-1 4.26 4.26 0 0 0 0 8.51 2.9 2.9 0 0 0 2.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 0 1-2.14-1.51l-1.63.68A4.05 4.05 0 0 0 87.29 44c2.19 0 4-1.29 4-4.43V32h-1.72zm-2.14 5.88a2.59 2.59 0 0 1 0-5.16A2.4 2.4 0 0 1 89.7 36a2.38 2.38 0 0 1-2.28 2.58zm24.38-11.08h-4.47V40h1.87v-4.74h2.61a3.89 3.89 0 1 0 0-7.76zm0 6h-2.61v-4.26h2.65a2.14 2.14 0 1 1 0 4.29zm11.53-1.8a3.5 3.5 0 0 0-3.33 1.91l1.66.69a1.77 1.77 0 0 1 1.7-.92 1.8 1.8 0 0 1 2 1.61v.13a4.13 4.13 0 0 0-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.89 2.89 0 0 0 3.1 2.75 2.63 2.63 0 0 0 2.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 0 1 1.7.42 2.26 2.26 0 0 1-2.19 2zM133.74 32l-2.14 5.42h-.06L129.32 32h-2l3.33 7.58-1.9 4.21h1.95L135.82 32zm-16.81 8h1.87V27.5h-1.87z" fill="#fff"/><path d="M20.44 17.54a2 2 0 0 0-.46 1.4v22.12a2 2 0 0 0 .46 1.4l.07.07L32.9 30.15v-.29L20.51 17.47z" fill="url(#a)"/><path d="M37 34.28l-4.1-4.13v-.29l4.1-4.14.09.05L42 28.56c1.4.79 1.4 2.09 0 2.89l-4.89 2.78z" fill="url(#b)"/><path d="M37.12 34.22L32.9 30 20.44 42.46a1.63 1.63 0 0 0 2.08.06l14.61-8.3" fill="url(#c)"/><path d="M37.12 25.78l-14.61-8.3a1.63 1.63 0 0 0-2.08.06L32.9 30z" fill="url(#d)"/><path d="M37 34.13l-14.49 8.25a1.67 1.67 0 0 1-2 0l-.07.07.07.07a1.66 1.66 0 0 0 2 0l14.61-8.3z"  opacity=".2"/><path d="M20.44 42.32a2 2 0 0 1-.46-1.4v.15a2 2 0 0 0 .46 1.4l.07-.07zM42 31.3l-5 2.83.09.09L42 31.44A1.75 1.75 0 0 0 43 30a1.86 1.86 0 0 1-1 1.3z"  opacity=".12"/><path d="M22.51 17.62L42 28.7a1.86 1.86 0 0 1 1 1.3 1.75 1.75 0 0 0-1-1.44L22.51 17.48c-1.4-.79-2.54-.13-2.54 1.47v.15c.03-1.61 1.15-2.27 2.54-1.48z" fill="#fff" opacity=".25"/></svg>
 <img src={appleMarket} style={{ height: "40px"}}/>
 </div>
</div>


</div>
    

    </VideoWrapper>

    <div style={{display:'flex', justifyContent:'center',height: '80px'}}><span style={{backgroundColor:'white', width:'3px', height: '100%'}}></span><svg width="100" height="100">
  <polygon points="50,0 25,43.301 75,43.301 0,86.602 100,86.602 75,129.903 25,129.903"/>
</svg> </div>


            </SectionOne>
          
            <SectionTwo>

             <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', position: 'relative'}}>  
            <span style={{fontSize: '18px', fontWeight:'700'}}> 최후의</span>
            <p style={{fontSize: '84px',fontWeight:'700'}}>승자가 되세요</p>
            <p style={{fontSize: '18px',fontWeight:'700', marginTop: '20px',color: 'black', maxWidth: '60%'}}>전략적 팀 전투는 정상의 자리에 오르기 위해 경쟁하는 라운드 기반의 전투 게임입니다. 다양한 리그 오브 레전드 챔피언을 선택하고, 배치하고, 업그레이드하세요. 상대를 능가하고 상황에 맞는 적절한 플레이를 펼쳐보세요. 탁월한 전략은 여러분의 손에서 시작됩니다.</p>
            <PlayBtn style={{marginTop: '30px'}}>무료로 플래이하기</PlayBtn>
            <Portal src={portal} /> 
            </div> 


            <div style={{display: 'flex', flexDirection:'row', marginTop: "150px", justifyContent:'center'}} >
                <div style={{display: 'flex', flexDirection:'column', width: '600px' ,justifyContent:'center'}}>
                    <span style={{fontSize: '84px',fontWeight:'700', marginTop: '20px'}}>어디서든</span>
                    <span style={{fontSize: '84px',fontWeight:'700'}}> 플레이하세요</span>
                    <p style={{fontSize: '18px',fontWeight:'700', marginTop: '20px',color: 'black', maxWidth: '60%'}}>서로 다른 플랫폼 간의 플레이를 지원하므로 PC, Mac, 모바일 어디에서든 친구들과 함께 플레이할 수도 있고 적과 싸울 수도 있습니다.</p>
                </div>

                <img src={evilAndPengGu} style={{ height: '350px', border: "6px solid black",  boxShadow: '3px 3px 6px grey', borderRadius:'8px'}}/>               
            </div>

            <div style={{display: 'flex', flexDirection:'row', marginTop: "150px", justifyContent: 'center'}}>
                <div>
                <img src={miniHorn} style={{ width: '300px'}}/> 
                <img src={blueGhost} style={{width: '300px'}}/> 
                <img src={blueFox} style={{ width: '320px'}}/> 
                 </div>
                <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', marginLeft: '80px'}}>
                    <strong style={{fontSize: '84px',fontWeight:'700'}}>스타일을</strong>
                    <strong style={{fontSize: '84px',fontWeight:'700'}}>뽐내세요</strong>
                    <p style={{fontSize: '18px',fontWeight:'700', marginTop: '20px',color: 'black', maxWidth: '60%'}}>춤추고, 감정표현을 사용하고, 자신을 뽐내는 꼬마 전설이로 개성을 표현하세요.</p> </div>
                

            </div>

    
</SectionTwo>




<SectionThree >

    
    <div style={{display: 'flex', flexDirection:'row', justifyContent:'center',  background: `url(${upperWrapper})`}}>
    <div style={{display: 'flex',  flexDirection:'column', justifyContent:'center', maxWidth:'600px', marginTop: '300px'}}>
        <span style={{fontSize: '18px',fontWeight:'700', marginTop: '20px', color: 'black'}}>전략적 팀 전투</span>
        <span style={{fontSize: '84px',fontWeight:'700', marginTop: '20px', color: 'black'}}>괴물 습격!</span>
        <p style={{fontSize: '18px',fontWeight:'700', marginTop: '20px', color: 'black'}}>뒤집개특별시가 공격당하고 있습니다! 다행히 이 도시에 사는 다양한 슈퍼히어로(그리고 안티히어로)들은 싸울 준비가 되어있습니다. 영웅 증강과 모루에서 제련된 아이템을 사용해 투덜이, 수염냥, 남작이 (네, 그 내셔 남작입니다!) 그리고 미니 별 수호자 럭스와 함께 영웅들로 구성된 최고의 팀을 승리로 이끄세요.</p>
    </div>
    <div>
    <img src={evilAndPengGu} style={{ height: '350px', border: "6px solid black",  boxShadow: '3px 3px 6px grey', borderRadius:'8px', marginLeft: "80px",marginTop: '300px'}}/>
    </div>
    </div>


    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background: `url(${lowerWrapper})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover' ,height: '900px'}}>
        <div style={{display: 'flex', width: '1300px'}}>
            <h1 style={{fontSize: '60px' ,fontWeight:'1000', color: 'black',marginTop: '100px',}}>최신 소식</h1></div>
        <div style={{display:'flex', justifyContent:'space-between',marginTop: '100px', width: '1300px', position:'relative'}}>
            <div  style={{padding: '30px',width: '380px', height:'350px', backgroundColor: 'white', display: 'flex', flexDirection:'column',justifyContent: 'center', position: 'relative'}}>
            <img src={bannerFrame} style={{position:'absolute', right: '0', top:'0', width: '100%',height: '100%'}}/>
                 <img src={newsImg1} style={{}}/>
            <h4 style={{fontSize: '18px', fontWeight:'700',marginTop:'18px', color: 'black'}}>돌려돌려 TFT: 히어로vs빌런 이벤트 매치 안내</h4>
            <p style={{fontSize: '12px', fontWeight:'700',marginTop:'18px', color: 'black'}}>히어로 대 빌런 대격돌! 버튜버들과 함께하는 이번 돌려돌려 TFT의 승리팀은 누가 될 것인가!</p>
            </div>
            
            <div  style={{padding: '30px', width: '380px', height:'350px', backgroundColor: 'white', display: 'flex', flexDirection:'column',justifyContent: 'center', position: 'relative'}}>
            <img src={bannerFrame} style={{position:'absolute', right: '0', top:'0', width: '100%',height: '100%'}}/>
                 <img src={newsImg2} style={{}}/>
            <h4 style={{fontSize: '18px', fontWeight:'700',marginTop:'18px', color: 'black', fontFamily: 'sans-serif'         }}>Everything Goes On | 전략적 팀 전투 단편 애니메이션</h4>
            <p style={{fontSize: '12px', fontWeight:'700',marginTop:'18px', color: 'black'}}>그러니 조금마안 더 괜찮은 척하자아아아아...</p>
            </div>
            
            <div  style={{padding: '30px',width: '380px', height:'350px', backgroundColor: 'white', display: 'flex', flexDirection:'column',justifyContent: 'center', position: 'relative'}}>
                 <img src={bannerFrame} style={{position:'absolute', right: '0', top:'0', width: '100%',height: '100%'}}/>
                 <img src={newsImg3} style={{}}/>
            <h4 style={{fontSize: '18px', fontWeight:'700',marginTop:'18px', color: 'black'}}>남작이 | 꼬마 전설이 쇼케이스</h4>
            <p style={{fontSize: '12px', fontWeight:'700',marginTop:'18px', color: 'black'}}>플레이어 여러분의 조합을 완성하고 마음을 빼앗으러 전략적 팀 전투에 등장할 모든 남작이를 자세히 살펴보세요.</p>
            </div>
        
        </div>

    </div>

</SectionThree>

<SectionFour>
    <div style={{zIndex: '',position:'relative', margin: '40px auto'}}>
        <span style={{fontSize: '60px' ,fontWeight:'1000', marginTop: '100px'}}>
        전략적 팀 전투 플레이 방법</span></div>
        <div style={{maxWidth:'600px'}}>
            <p style={{fontSize: '18px', fontWeight:'700',marginTop:'18px', color: 'black'}}>
            전략적 팀 전투 플레이 방법을 알아보세요. 챔피언을 획득하고, 팀을 구성하고, 골드를 모으는 등 다양한 요소에 대해 안내해 드립니다.
            </p>
        </div>


        <div style={{position: 'relative', marginTop: '50px'}}>
        <ReactPlayer
      url="https://www.youtube.com/embed/tgU1D65BZIY&t=120s?showinfo=0&enablejsapi=1&origin=http://localhost:3000"
      playing={true}
      volume={0.3}
      loop={true}
      width={1200}
      height={700}
      style={{margin: '40px auto'}} />

      <img src={bannerFrame} style={{position:'absolute', right: '0', top:'0', width: '100%',height: '100%'}}/>
      </div>

   


</SectionFour>



<SectionFive>
    <header style={{display: 'flex', flexDirection:'column',  alignItems:'center'}}>
        <span style={{fontSize: '18px', fontWeight:'700'}}>지금</span>
        <span style={{fontSize: '60px' ,fontWeight:'1000'}}>시작하세요</span>
        <PlayBtn style={{marginTop:'40px'}}>무료로 플래이하기</PlayBtn> 
    </header>

    <div style={{position: 'relative', height: '800px'}}>
    <img src={chessMap} style={{
    position: 'absolute',
    left: '-5%',
    bottom: '-2%',
    width: '110%'
}}/>
    <img src={smallCloud} style={{position: 'absolute',
    left: '-5%',
    bottom: '-2%',
    width: '110%',
    zIndex: '-1'}}/>

    </div>


    <img src={eveningCloud} style={{zIndex: '-1',position:'absolute', right: '0', bottom:'0', width: '100%',height: '100%'}}/>
    


</SectionFive>


</>



        
    );
}

export default Home;

export const SectionOne = styled.div`


    text-aligns: center;
    margin: 0 auto;
    height: 700px;
    margin-top: 140px;   

`;

export const SectionTwo = styled.div`
    margin-top: 150px;
    text-aligns: center;
`;

export const SectionThree = styled.div`

height: 1400px;

`;


export const SectionFour = styled.div`

height: 1300px;
margin-top: 200px;
display: flex;
flex-direction: column;
justifyContent: center;
align-items: center;

`;

export const SectionFive = styled.div`
position: relative;
height: 1010px;

`




export const VideoWrapper = styled.div`

    margin-top:100px;
    position: relative;
    height: 700px;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 3;
    
`;


export const FloatingPengGu = styled(motion.img)`
position: absolute;
width: 30%;
bottom: -10%;
right: -10%;
animation: fade-in-slide-in 1s ease-in-out, float 5s ease-in-out infinite;

  
@keyframes fade-in-slide-in {
    0% {
    
  
      opacity: 0;
    }
    100% {

      opacity: 1;
    }
  }

    @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }


`;



export const Portal = styled.img`
position: absolute;
width: 300px;
top: 0;
left: 70px;
animation: float 5s ease-in-out infinite;

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
`;






export const PlayBtn = styled(motion.button)`
    border: 2px solid white;
    background-color: #1E2B35;
    border-radius: 8px;
    width: 180px;
    height: 60px;
    font-weight: 800;
    box-shadow: 0 0 22px #07c7d9;
    color: white;
    cursor: pointer;
    transition: all 300ms ease;
    animation: fade-in-slide-in 1.5s ease-in-out;

    &:hover {
        color: white;
        background-color: #07afd9;
        box-shadow: 0 0 12px #07afd9;

    }

    


`;




// export const Loader = styled.div`
//     height: 20vh;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// export const Banner = styled.div<{bgPhoto:string}>`
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     padding: 60px;
//     background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${props => props.bgPhoto});
//     background-size: cover;
// `

// export const Title = styled.h2`
//     font-size: 60px;
//     margin-bottom: 20px;
//     @media (max-width: 750px) {
        
//     }
// `;

// export const Overview = styled.p`
//     font-size: 36px;
//     width: 50%;
//     @media (max-width: 750px) {
//         width: 90%;
//         text-overflow: ellipsis;
//     }
// `;

