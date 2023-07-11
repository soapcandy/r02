import { useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}

const ReplyInput = ({ bno,refreshLast }) => {

    const [reply, setReply] = useState({...initState})

    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }

    const handleClickRegister = (e) =>{

        reply.bno = bno;

        // data = {result:223}
        postReply(reply).then(data =>{
            
            console.log(data)

            alert(`${data.result}번 댓글 등록완료`)
            
            refreshLast()
            // inputTag내 데이터들을 삭제
            setReply({...initState})

        })
    }


    return (

        <div className="m-8 bg-gradient-to-r from-red-300 to-amber-400 border-4 ">
            <div className="text-white font-extrabold ">Reply Input</div>
            <div className="m-2">
                <div>  <input type="text"  className="border-2 border-slate-500" name="replyText" value={reply.replyText} onChange={handleChange}></input></div>
                <br></br>
                <div >  <input type="text" className="border-2 border-slate-500" name="replyer" value={reply.replyer} onChange={handleChange}></input></div>
            </div>
            <div >
                <button className=" border-2 border-slate-500 text-white font-semibold" onClick={handleClickRegister}>Register</button>
            </div>
        </div>

    );
}

export default ReplyInput;