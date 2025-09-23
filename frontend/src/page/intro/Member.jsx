import React from "react";
import styles from "./Member.module.css"


export default function Member(){
    // Sample member data - replace with your actual data
    const members = [
        {
            id: 1,
            name: "張小明",
            position: "實驗室主任",
            email: "zhang@example.com",
            research: "人工智慧、機器學習",
            image: "/images/member1.jpg" // placeholder path
        },
        {
            id: 2,
            name: "李小華",
            position: "博士生",
            email: "li@example.com",
            research: "感測器系統、物聯網",
            image: "/images/member2.jpg"
        },
        {
            id: 3,
            name: "王小強",
            position: "碩士生",
            email: "wang@example.com",
            research: "嵌入式系統、FPGA",
            image: "/images/member3.jpg"
        },
        {
            id: 4,
            name: "陳小美",
            position: "碩士生",
            email: "chen@example.com",
            research: "訊號處理、數位電路",
            image: "/images/member4.jpg"
        }
    ];

    return(
        <div className={styles.memberPage}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>成員介紹頁面</h1>
                
                <div className={styles.membersGrid}>
                    {members.map(member => (
                        <div key={member.id} className={styles.memberCard}>
                            <div className={styles.memberImage}>
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCA1OEM1Ni42MjU0IDU4IDYyIDUyLjYyNTQgNjIgNDZDNjIgMzkuMzc0NiA1Ni42MjU0IDM0IDUwIDM0QzQzLjM3NDYgMzQgMzggMzkuMzc0NiAzOCA0NkMzOCA1Mi42MjU0IDQzLjM3NDYgNTggNTAgNThaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yOCA3MkMyOCA2NS4zNzI2IDMzLjM3MjYgNjAgNDAgNjBINjBDNjYuNjI3NCA2MCA3MiA2NS4zNzI2IDcyIDcyVjc0SDI4VjcyWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                                    }}
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberPosition}>{member.position}</p>
                                <p className={styles.memberEmail}>
                                    <span className={styles.label}>Email:</span> {member.email}
                                </p>
                                <p className={styles.memberResearch}>
                                    <span className={styles.label}>研究領域:</span> {member.research}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}