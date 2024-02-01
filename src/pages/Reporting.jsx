import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 신고 옵션을 선택하는 라디오 버튼 컴포넌트
const RadioOptions = ({ options, selectedOption, setSelectedOption, onOtherSelected }) => {
  return (
    <>
      {options.map((option, idx) => (
        <label key={idx} className="flex items-center mb-2">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-red-600"
            name="reportReason"
            value={option}
            checked={selectedOption === option}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              onOtherSelected(e.target.value === "기타 (직접 작성하기)");
            }}
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </>
  );
};

// 신고 페이지 컴포넌트
const ReportingPage = () => {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherText, setOtherText] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reportData = {
      reason: selectedOption,
      additionalInfo: isOtherSelected ? otherText : ''
    };

    // API 호출 및 처리
    try {
      // 백엔드로 데이터 전송
      const response = await axios.post('http://localhost:3000/report', reportData);
      
      console.log('신고가 정상적으로 처리되었습니다.', response.data);
      setShowModal(true);

    } catch (error) {
      console.error('신고 제출 중 오류가 발생했습니다:', error);
      // 에러 처리 로직 추가 (예: 상태 업데이트, 사용자에게 메시지 표시 등)
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/recommend'); // 성공 후 처리
  };

  const reportOptions = [
    "스팸/홍보/도배글이에요",
    "혐오발언을 기재했어요",
    "부적절한 내용입니다",
    "기타 (직접 작성하기)"
  ];

  return (
    <div className="flex flex-col h-screen bg-white text-black">
      <nav className="flex items-center justify-between p-6 border-b border-gray-200 h-20">
        <button onClick={() => navigate(-1)} className="text-black">
          <span className="material-icons">back</span>
        </button>
        <h1 className="text-center font-bold text-lg">신고하기</h1>
        <div style={{ width: '24px' }}></div> 
      </nav>

      <div className="flex-grow flex flex-col items-center px-4 py-2">
        <form onSubmit={handleSubmit} className="w-full max-w-md text-center">
          <fieldset className="mb-4">
            <legend className="text-lg mt-4 mb-8 font-bold">해당 게시물을 신고하는 이유를 알려주세요</legend>
            <RadioOptions
              options={reportOptions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              onOtherSelected={setIsOtherSelected}
            />
            {isOtherSelected && (
              <textarea
                rows="4"
                placeholder="내용을 입력해주세요"
                className="mt-2 p-2 border rounded w-full"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
              />
            )}
          </fieldset>
          <button type="submit" className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            제출하기
          </button>
        </form>
      </div>

      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
    <div className="text-white bg-transparent p-4 rounded-lg text-center">
      <p className="text-lg pb-4">신고가 정상적으로 제출되었어요.</p>
      <button 
          onClick={handleCloseModal} 
          className="bg-white text-black font-bold py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
        확인
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default ReportingPage;
