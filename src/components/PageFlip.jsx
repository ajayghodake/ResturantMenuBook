import React from "react";
import HTMLFlipBook from "react-pageflip";
import './PageFlip.css';

// Import images from assets folder
import page1 from "../assets/01Page_hare krishna.jpg";
import page2 from "../assets/02Page_hare krishna.jpg";
import page3 from "../assets/03Page_hare krishna.jpg";
import page4 from "../assets/04Page_hare krishna.jpg";
import page5 from "../assets/05Page_hare krishna.jpg";
import page6 from "../assets/06Page_hare krishna.jpg";
import page7 from "../assets/07Page_hare krishna.jpg";
import page8 from "../assets/08Page_hare krishna.jpg";
import page9 from "../assets/09Page_hare krishna.jpg";
import page10 from "../assets/010Page_hare krishna.jpg";

const Book = () => {
    const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10]; // Add more images if needed

    return (
        <div className="book-container">
            <HTMLFlipBook width={window.innerWidth} height={window.innerHeight} className="book" loading="lazy">
                {pages.map((page, index) => (
                    <div key={index} className="page">
                        <img src={page} alt={`Page ${index + 1}`} className="page-image" />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default Book;
