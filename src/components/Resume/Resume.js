import React, { useEffect, useState } from "react";
import {AtSign,Calendar,GitHub,Linkedin,MapPin,Paperclip,Phone} from "react-feather";
import styles from "./Resume.module.css";

function Resume(){
    const [columns,setcolumns]=useState([[],[]]);

    const workExpSection=(
        <div key={"workexp"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Full Stack developer</p>
                    <p className={styles.subTitle}>company Name</p>
                    <a className={styles.link}>
                        <Paperclip />
                        https://kshhsf.com/kjdhsd
                    </a>
                    <div className={styles.date}>
                        <Calendar/>17/12/2022 - 20/01/2023
                    </div>
                    
                    <p className={styles.date}>
                       <MapPin/> Remote
                    </p>
                    <ul className={styles.points}>
                        <li className={styles.point}>It is point one</li>
                        <li className={styles.point}>It is point two</li>
                        <li className={styles.point}>It is point three</li>
                        <li className={styles.point}>It is point four</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const projectSection=(
        <div key={"project"} className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>Project</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>project 1</p>
                    <a className={styles.link}>
                        <Paperclip />
                        https://kshhsf.com/kjdhsd
                    </a>
                    <a className={styles.link}>
                        <GitHub />
                        https://github.com/jdsfhdf
                    </a>
                    <p className={styles.overview}>
                       this project is a dummy project.
                    </p>
                    <ul className={styles.points}>
                        <li className={styles.point}>It is point one</li>
                        <li className={styles.point}>It is point two</li>
                        <li className={styles.point}>It is point three</li>
                        <li className={styles.point}>It is point four</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const educationSection=(
        <div key={"education"} className={`${styles.section} ${styles.education}`}>
            <div className={styles.sectionTitle}>Education</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Eduaction 1</p>
                    <p className={styles.subTitle}>some college Name</p>
                    <div className={styles.date}>
                        <Calendar/>17/12/2022 - 20/01/2023
                    </div>
                    
                </div>
            </div>
        </div>
    );

    const achievementSection=(
        <div key={"achievement"} className={`${styles.section} ${styles.achievement}`}>
            <div className={styles.sectionTitle}>Achievement</div>
            <ul className={styles.numbered}>
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
                <li>Achievement 4</li>
            </ul>
        </div>
    );

    const summarySection=(
        <div key={"summary"} className={`${styles.section} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Summary</div>
            <div className={styles.content}>
                <p className={styles.overview}>This is dummy basic summary</p>
            </div>
        </div>
    );

    const otherSection=(
        <div key={"other"} className={`${styles.section} ${styles.other}`}>
            <div className={styles.sectionTitle}>Other</div>
            <div className={styles.content}>
                <p className={styles.overview}>This is dummy basic data.....</p>
            </div>
        </div>
    );

    useEffect(()=>{
        setcolumns([
            [projectSection,educationSection,summarySection],
            [workExpSection,achievementSection,otherSection],
        ]);
    },[]);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.heading}>Name</p>
                <p className={styles.subheading}>Front-End Developer</p>

                <div className={styles.links}>
                    <a className={styles.link}><AtSign/> Email@gmail.com</a>
                    <a className={styles.link}><Phone/> 83644897</a>
                    <a className={styles.link}><Linkedin/> https://linkedin.in/ndsdh</a>
                    <a className={styles.link}><GitHub/> https://github.in/ksdsdg</a>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.col1}>{columns[0]}</div>
                <div className={styles.col2}>{columns[1]}</div>
            </div>
        </div>
    )
}

export default Resume;