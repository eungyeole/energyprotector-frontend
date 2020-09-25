import React from 'react'
function question({ isOpen, close }) {
    return(
        <React.Fragment>
        {
            isOpen ?
            <React.Fragment>
            <div className="modal">
                <div onClick={close} className="modal-overlay"></div>
                <div className="question">
                    <h2>문의하기</h2>
                    <input placeholder="이름을 입력해주세요"></input>
                    <input placeholder="이메일을 입력해주세요"></input>
                    <textarea class="question-m" placeholder="전송할 메세지(버그 및 오류제보/피드백 등)을 입력해주세요."></textarea>
                    <button>문의하기</button>
                </div>
            </div>
            </React.Fragment>
            :null
        }
        </React.Fragment>
    )
}
export default question;