import React from "react";
import styles from "./EventIntro.module.css"
import main_pic from "../../media/active-eecamp-1.jpg"

export default function EventIntro(){

    return(
        <div className = {styles.eventIntroPage}>
            <img src = {main_pic} className = {styles.main_pic}/>
            <h1> 活動簡介頁面 </h1>
        </div>
    )
}