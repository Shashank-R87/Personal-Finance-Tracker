import React from 'react'
import Bookmark from "../assets/bookmark.png"
import BookmarkDisable from "../assets/bookmark-disable.png"
import "../App.css"

function BookmarkButton({ onClick, condition }) {
    return (
        <button onClick={onClick} className='buttonStyle' style={{ border: 0, backgroundColor: 'white', borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }} >
            {
                condition === "true" ?
                    <img style={{ width: 32, height: 32 }} src={Bookmark} />
                    :
                    <img style={{ width: 32, height: 32 }} src={BookmarkDisable} />
            }
        </button>
    )
}

export default BookmarkButton