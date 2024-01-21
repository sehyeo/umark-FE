import React from 'react';
import Header from '../components/Header'; // Header 컴포넌트 경로가 맞는지 확인해주세요.
import '../components/Header.css'; // Header 컴포넌트에 필요한 스타일시트
import icon1 from '../img/intro.png';

function Intro() {
  return (
    <div className="flex flex-col h-screen bg-white text-black">
      <Header />
      <div className="flex flex-col items-center mx-auto pt-24 pb-8 px-4 w-full">
        <h1 className="text-4xl font-bold my-4 text-left self-start">umark</h1>
        <div className="text-center my-8">
          <p className="text-xl mb-4 font-bold">대학생을 위한 큐레이션 공간</p>
          <img src={icon1} alt="아이콘" className="mx-auto my-6 h-14 " />
          <p className="text-base mb-4">유마크에서는 대학생이라면 누구나 콘텐츠를 큐레이션하여 제공할 수 있어요.</p>
            <p className="text-base mb-4">물론 큐레이션된 콘텐츠를 열람할 수도 있답니다.</p>
            <p className="text-base mb-4">학교 커뮤니티 내에서만 들기 아까운 정보나, 이야기들, 대학생이라는 이름 아래에서 함께 공유하고싶다면?</p>
            <p className="text-base mb-4">유마커로 활동하며 좋은 컨텐츠를 수집하고 제공해 봐요!</p>
            <p className="text-base mb-4">부담스러운 하트 모양의 좋아요 대신 북마크 아이콘으로 좋아요를 대신할게요</p>
            <p className="text-base mb-4">매일 쌓아두기만 하는 링크들은 이제 그만</p>
            <p className="text-base mb-4">250자 내외 북마크들이 모인 유마크가</p>
            <p className="text-base mb-4">여러분의 기록보관함이 되어줄 거에요.</p>
            <p className="text-base mb-4"></p>
    
        </div>
      </div>
    </div>
  );
}

export default Intro;
