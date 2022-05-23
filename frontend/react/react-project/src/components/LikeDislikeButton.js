// TODO: answer here
import React, { useState } from "react"
import { getSession, auth } from "../api/auth"

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    const [like, setLike] = useState(likeCount)
    const [dislike, setDislike] = useState(dislikeCount)
    const [isLikedState, setIsLiked] = useState(isLiked)
    const [isDisLikedState, setIsDisliked] = useState(isDisliked)

    var formData = {
        id: id,
        isLiked: isLikedState,
        isDisliked: isDisLikedState,
        likeCount: like,
        dislikeCount: dislike
    }
    fetch("https://rg-km.riegan.my.id/post/list", {

        method: 'POST', 
        body: formData 

    })
    return(
        <div>
            <div >
                <button aria-label="Like Button" onClick={()=>{
                    if (isLikedState) {
                        setIsLiked(false)
                        setLike(like-1)

                    } else if(isDisLikedState) {
                        setIsLiked(true)
                        setLike(like+1)
                        setIsDisliked(false)
                        setDislike(dislike-1)
                        
                    } else{
                        setIsLiked(true)
                        setLike(like+1)
                        
                    }
                }}>
                    Like
                </button>
                <span aria-label="Like Count">{like}</span> 
            </div>
            <div>
                <button aria-label="Dislike Button" onClick={()=>{
                    if (isDisLikedState) {
                        setIsDisliked(false)
                        setDislike(dislike-1)
                    } else if(isLikedState){
                        setIsDisliked(true)
                        setDislike(dislike+1)
                        setIsLiked(false)
                        setLike(like-1)
                    } else {
                        setIsDisliked(true)
                        setDislike(dislike+1)
                    }
                }}>
                    Dislike
                </button>
                <span aria-label="Dislike Count">{dislike}</span>
                
            </div>
        </div>
    )
    // ldData = {
    //     id: id, // ID dari post
    //     image: , // URL post image
    //     isLiked: isLiked, // flag apakah sudah di-like oleh user
    //     isDisliked: isDisliked, // flag apakah sudah di-dislike oleh user
    //     likeCount: likeCount, // jumlah like
    //     dislikeCount:  dislikeCount// jumlah dislike
    // }
}