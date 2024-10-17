import React from "react";
import RollingPaperDetail from "../components/RollingPaperDetail";
import '../styles/pages/RollingPaperPage.css'

const RollingPaperPage = () => {
    const handleAddPaper = () => {
        // 페이퍼 추가하는 로직을 여기에 작성
    }

    return (
        <div>
            <div className="header">
                <p className="className">OO초등학교 4-1</p>
                <button className="add-paper-button" onClick={handleAddPaper}>페이퍼 작성</button>
            </div>
            <RollingPaperDetail />
        </div>
    )
    
}

export default RollingPaperPage;