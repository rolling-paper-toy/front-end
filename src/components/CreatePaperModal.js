import { useState } from "react";
import '../styles/components/PaperModal.css' // CSS 파일 가져오기

const CreatePaperModal = ({ closeModal }) => {

    const [paperContent, setPaperContent] = useState('');
  
    const postPaper = () => {    
        /**
         * 페이퍼를 등록하는 api를 불러오는 기능 필요
        */   
    
        // 등록 성공 후 처리
        alert('페이퍼가 등록되었습니다.')
        setPaperContent(''); // 입력 내용 초기화
        closeModal(); // 모달 닫기
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) { // 배경을 클릭했는지 확인
            closeModal();
        }    
    }

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}> {/* 모달 배경 */}
            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}> {/* 모달 내용 */}
            {/**
             * 이벤트 버블링은 하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상이다.
             * 이벤트는 발생한 요소부터 최상위 부모 요소까지 순차적으로 전달된다.
             * 기본적으로 대부분의 브라우저에서 이벤트는 버블링 방식을 따른다.
             * */}
            
            {/**
             * stopPropagation() 함수는 JavaScript 이벤트 전파를 중지시킨다.
             * 이벤트가 상위 요소로 전달되는 버블링 또는 캡처링 단계를 차단한다.
             * 특정 요소의 이벤트 처리에만 동작을 제한하고 싶을 때 사용된다.
             * */}  
                <input 
                    type="text"
                    value = {paperContent}
                    onChange = {(e) => setPaperContent(e.target.value)}
                    placeholder="내용을 입력하세요"
                /> {/* 롤링페이퍼 작성 */}
                <button 
                    className="paper-create-button" 
                    onClick={postPaper}
                    disabled={!paperContent.trim()} // 내용이 없을 때 버튼 비활성화
                >등록</button>
            </div>
        </div>
    );
};

export default CreatePaperModal;