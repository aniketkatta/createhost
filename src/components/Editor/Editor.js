import React, { useEffect, useState } from "react";
import InputControl from "../../Input/InputControl";
import { X } from "react-feather";
import styles from "./Editor.module.css";

function Editor(props) {
    const sections = props.sections;
    const information = props.information;
    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );
    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    )
    const [acticeDetailIndex,setactiveDetailIndex]=useState(0)
    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    )

    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    });

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values };
        if(!Array.isArray(tempValues.points)) tempValues.points=[];
        tempValues.points[index] = value;
        setValues(tempValues);
    }
    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title eg. Frontend developer"
                    value={values.title}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value }))
                    } />
                <InputControl label="Company Name" placeholder="Enter company name eg.amazon"
                    value={values.companyName}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, companyName: e.target.value }))
                    } />
            </div>

            <div className={styles.row}>
                <InputControl label="Certificate Link" placeholder="Enter Certificate link"
                    value={values.certificationLink}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, certificationLink: e.target.value }))
                    } />
                <InputControl label="Location" placeholder="Enter location eg. Remote"
                    value={values.location}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, location: e.target.value }))
                    } />
            </div>

            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter start date of work"
                    value={values.startDate}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, startDate: e.target.value }))
                    } />
                <InputControl label="End Date" type="date" placeholder="Enter end date of work"
                    value={values.endDate}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, endDate: e.target.value }))
                    } />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 0)} />
                <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 1)} />
                <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 2)} />
            </div>
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title eg. chat app"
                    value={values.title}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value }))
                    } />
            </div>
            <InputControl label="Overview" placeholder="Enter basic overview of project"
                value={values.overview}
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, overview: e.target.value }))
                } />

            <div className={styles.row}>
                <InputControl label="Deployed Link" placeholder="Enter deployed link of project"
                    value={values.link}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, link: e.target.value }))
                    } />
                <InputControl label="Github Link" placeholder="Enter Github link of project"
                    value={values.github}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, github: e.target.value }))
                    } />
            </div>

            <div className={styles.column}>
                <label>Enter Project description</label>
                <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 0)} />
                <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 1)} />
                <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 2)} />
                <InputControl placeholder="Line 4" value={values.points ? values.points[3] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 3)} />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title eg. B-Tech"
                    value={values.title}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value }))
                    } />
            </div>
            <InputControl label="College/School Name" placeholder="Enter Name of your college/school"
                value={values.college}
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, college: e.target.value }))
                } />

            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, startDate: e.target.value }))
                    } />
                <InputControl label="End Date" type="date" placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, endDate: e.target.value }))
                    } />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Name" placeholder="Enter your full name eg. Katta"
                    value={values.name}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value }))
                    } />
                <InputControl label="Title" placeholder="Enter your title eg. Frontend Developer"
                    value={values.title}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, title: e.target.value }))
                    } />
            </div>

            <div className={styles.row}>
                <InputControl label="Linkedin Link" placeholder="Enter your linkedin profile link"
                    value={values.linkedin}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, linkedin: e.target.value }))
                    } />
                <InputControl label="Github Link" placeholder="Enter your github  profile link"
                    value={values.github}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, github: e.target.value }))
                    } />
            </div>

            <div className={styles.row}>
                <InputControl label="Email" placeholder="Enter your email"
                    value={values.email}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))
                    } />
                <InputControl label="Enter phone" placeholder="Enter your phone number"
                    value={values.phone}
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, phone: e.target.value }))
                    } />
            </div>
        </div>
    );

    const achievmentsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List Your Achievments</label>
                <InputControl placeholder="Line 1" value={values.points ? values.points[0] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 0)} />
                <InputControl placeholder="Line 2" value={values.points ? values.points[1] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 1)} />
                <InputControl placeholder="Line 3" value={values.points ? values.points[2] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 2)} />
                <InputControl placeholder="Line 4" value={values.points ? values.points[3] : ""}
                    onChange={(e) => handlePointUpdate(e.target.value, 3)} />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl label="Summary" placeholder="Enter your objective/summary"
                value={values.summary}
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, summary: e.target.value }))
                } />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
            <InputControl label="Other" placeholder="Enter something"
                value={values.other}
                onChange={(e) =>
                    setValues((prev) => ({ ...prev, other: e.target.value }))
                } />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievments:
                return achievmentsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default:
                return null;
        }
    };

    const handleSubmission = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:{
                const tempDetail={
                    name:values.name,
                    title:values.title,
                    linkedin:values.linkedin,
                    github:values.github,
                    email:values.email,
                    phone:values.phone,
                };
                props.setInformation((prev)=>({
                    ...prev,
                    [sections.basicInfo]:{
                        ...prev[sections.basicInfo],
                        detail:tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            

            case sections.workExp:{
                const tempDetail={
                    companyName:values.companyName,
                    certificationLink:values.certificationLink,
                    location:values.location,
                    title:values.title,
                    startDate:values.startDate,
                    endDate:values.endDate,
                    points:values.points,    
                };

                const tempDetails=[...information[sections.workExp]?.details];
                tempDetails[acticeDetailIndex]=tempDetail;
                props.setInformation((prev)=>({
                    ...prev,
                    [sections.workExp]:{
                        ...prev[sections.workExp],
                        details:tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }


            case sections.project:{
                const tempDetail={
                    link:values.link,
                    overview:values.overview,
                    title:values.title,
                    github:values.github,
                    points:values.points,    
                };

                const tempDetails=[...information[sections.project]?.details];
                tempDetails[acticeDetailIndex]=tempDetail;
                props.setInformation((prev)=>({
                    ...prev,
                    [sections.project]:{
                        ...prev[sections.project],
                        details:tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }


            case sections.education:{
                const tempDetail={
                    college:values.college,
                    title:values.title,
                    startDate:values.startDate,
                    endDate:values.endDate,    
                };

                const tempDetails=[...information[sections.education]?.details];
                tempDetails[acticeDetailIndex]=tempDetail;
                props.setInformation((prev)=>({
                    ...prev,
                    [sections.education]:{
                        ...prev[sections.education],
                        details:tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }


            case sections.achievments:{
                const tempPoints=values.points;

                props.setInformation((prev)=>({
                    ...prev,
                    [sections.achievments]:{
                        ...prev[sections.achievments],
                        points:tempPoints,
                        sectionTitle,
                    },
                }));
                break;
            }

            case sections.summary:{
                const tempDetail=values.summary;

                props.setInformation((prev)=>({
                    ...prev,
                    [sections.summary]:{
                        ...prev[sections.summary],
                        detail:tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }

            case sections.other:{
                const tempDetail=values.other;

                props.setInformation((prev)=>({
                    ...prev,
                    [sections.other]:{
                        ...prev[sections.other],
                        detail:tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
        }
    }

    const handelAddNew=()=>{
        const details=activeInformation?.details;
        if(!details) return;
        const lastDetail=details.slice(-1)[0];
        if(!Object.keys(lastDetail).length) return;
        details?.push({});

        props.setInformation((prev)=>({
            ...prev,
            [sections[activeSectionKey]]:{
                ...information[sections[activeSectionKey]],
                details:details,
            },
        }));
        setactiveDetailIndex(details?.length-1);
    };

    const handleDeleteDetail=(index)=>{
        const details=activeInformation?.details?[...activeInformation?.details]:"";
        if(!details) return;

        details.splice(index,1);
        props.setInformation((prev)=>({
            ...prev,
            [sections[activeSectionKey]]:{
                ...information[sections[activeSectionKey]],
                details:details,
            },
        }));
        setactiveDetailIndex((prev)=>(prev===index ? 0 : prev-1))
    }
    useEffect(() => {
        const activeInfo = information[sections[activeSectionKey]]
        setActiveInformation(activeInfo)
        setSectionTitle(sections[activeSectionKey])
        setactiveDetailIndex(0)
        setValues({
            name: activeInfo?.detail?.name || "",
            overview:activeInfo?.details? activeInfo.details[0]?.overview || "":"",

            link:activeInfo?.details? activeInfo.details[0]?.link || "":"",
            certificationLink:activeInfo?.details? activeInfo.details[0]?.certificationLink || "":"",

            companyName:activeInfo?.details? activeInfo.details[0]?.companyName || "":"",
            location:activeInfo?.details? activeInfo.details[0]?.location || "":"",


            startDate:activeInfo?.details? activeInfo.details[0]?.startDate || "":"",
            endDate:activeInfo?.details? activeInfo.details[0]?.endDate || "":"",

            points:activeInfo?.details
            ?activeInfo.details[0]?.points
            ?[...activeInfo.details[0]?.points]
            :""
            :activeInfo?.points
            ?[...activeInfo.points]
            :"",

            title: activeInfo?.details? activeInfo?.details[0]?.title || "":
            activeInfo?.detail?.title || "",

            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details? activeInfo?.details[0]?.github || "":
            activeInfo?.detail?.github || "",

            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",

            summary:typeof activeInfo?.detail!==Object?activeInfo.detail:"",
            other:  typeof activeInfo?.detail!==Object?activeInfo.detail:"",      
         }); 
    }, [activeSectionKey]);

    useEffect(()=>{
        setActiveInformation(information[sections[activeSectionKey]])
    },[information])

    useEffect(()=>{
        const details=activeInformation?.details;
        if(!details) return;

        const activeInfo=information[sections[activeSectionKey]];
        setValues({
            overview:activeInfo.details[acticeDetailIndex]?.overview || "",
            link:activeInfo.details[acticeDetailIndex]?.link || "",
            certificationLink:activeInfo.details[acticeDetailIndex]?.certificationLink || "",
            companyName:activeInfo.details[acticeDetailIndex]?.companyName || "",
            location:activeInfo.details[acticeDetailIndex]?.location || "",
            startDate:activeInfo.details[acticeDetailIndex]?.startDate || "",
            endDate:activeInfo.details[acticeDetailIndex]?.endDate || "",
            points:activeInfo.details[acticeDetailIndex]?.points || "",
            title:activeInfo.details[acticeDetailIndex]?.title || "",
            linkedin:activeInfo.details[acticeDetailIndex]?.linkedin || "",
            github:activeInfo.details[acticeDetailIndex]?.github || "",
            college:activeInfo.details[acticeDetailIndex]?.college || "",
        });
    },[acticeDetailIndex]);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    Object.keys(sections)?.map((key) => (
                        <div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""
                            }`} key={key}
                            onClick={() => setActiveSectionKey(key)}
                        >
                            {sections[key]}
                        </div>
                    ))
                }
            </div>
            <div className={styles.body}>
                <InputControl label="Title" placeholder="Enter Section Title"
                    value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)}
                />

                <div className={styles.chips}>
                    {
                        activeInformation?.details ? activeInformation?.details?.map((item, index) => (
                            <div className={`${styles.chip} ${acticeDetailIndex===index ? styles.active:""}`}
                             key={item.title + index}
                             onClick={()=>setactiveDetailIndex(index)}
                             >
                                <p>
                                    {sections[activeSectionKey]}{index + 1}
                                </p>
                                <X onClick={(e)=>{e.stopPropagation();
                                    handleDeleteDetail(index)}}/>
                            </div>
                        ))
                            : ""
                    }
                    {
                        activeInformation?.details && activeInformation?.details?.length>0?(
                            <div className={styles.new} onClick={handelAddNew}>+New</div>
                        ):("")
                    }
                </div>
                {
                    generateBody()
                }

                <button onClick={handleSubmission}>Save</button>
            </div>
        </div>
    )
}

export default Editor