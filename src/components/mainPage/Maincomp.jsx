import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/update.css";

const MainComp = () => {
    
    return (
        <div className={'notice'}>
            <h3>냥가왈부 업데이트</h3>
            <div className={'updateList'}>
                <div className="upL">
                    <Link to="/update/1" className="upList">
                        <span className="upL1">첫번째 업데이트🐶</span>
                    </Link>
                    <hr className="updateHr"/>
                    <Link to="/update/2" className="upList">
                        <span className="upL2">두번째 업데이트🐶</span>
                    </Link>
                    <hr className="updateHr"/>
                    <Link to="/update/3" className="upList">
                        <span className="upL3">세번째 업데이트🐶</span>
                    </Link>
                    <hr className="updateHr"/>
                    <Link to="/update/4" className="upList">
                        <span className="upL4">네번째 업데이트🐶</span>
                    </Link>
                    <hr className="updateHr"/>
                    <Link to="/update/5" className="upList">
                        <span className="upL5">다섯번째 업데이트🐶</span>
                    </Link>
                    <hr className="updateHr"/>
                </div>
                <Link to="/updateList" className={"updateButton"}>더보기</Link>
            </div>
        </div>
    );
};

export default MainComp;