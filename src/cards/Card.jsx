import React, { useState } from "react";
import './Card.css';
import BookmarkOff from '../img/BookmarkOff.png';
import BookmarkOn from '../img/BookmarkOn.png';

export default function Card({ title, date, tags, description, onClick }) {
    const [currentImage, setCurrentImage] = useState(BookmarkOff);

    const handleImageClick = () => {
        if (currentImage === BookmarkOff) {
            setCurrentImage(BookmarkOn);
            onClick(true);  // 모달 열기 함수 호출
        } else {
            setCurrentImage(BookmarkOff);
            onClick(false);  // 모달 닫기 함수 호출
        }
    };
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="header-wrap">
                    <h4>{title}</h4>
                    <div onClick={handleImageClick}>
                        <img className="card-img-top" src={currentImage} alt={title} />
                    </div>
                    <div className="flex flex-col">
                        <time className="text-gray-400">
                            {date}
                        </time>
                        <h6 className="flex items-center gap-x-4">
                            {tags.map((tag) => (
                                <div className="tags relative rounded-lg px-2.5 py-1">
                                    #{tag}
                                </div>
                            ))}
                        </h6>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className="text-para">{description}</p>
            </div>
            <div className="card-footer">
                <ul className="footer-element">
                    <li>
                        <a href="#link">링크 바로가기</a>
                    </li>
                    <li>
                        <a href="/reporting">신고하기</a>
                    </li>
                </ul>
            </div>
        </div>  
    );
}