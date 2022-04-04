import React from 'react'; 
// 이모션 적용 ver2
// import { css, jsx} from '@emotion/react'

// css
import classes from './Card.module.css'
// 카드 컴포넌트
const Card = props => {
    // `` <- 템플릿 리터럴 이용 AddUser내에서의 css를 여기서 선언해줌.
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;
