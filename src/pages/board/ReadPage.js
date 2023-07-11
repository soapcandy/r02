import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

    const {queryObj,moveList} = useQueryObj()
    const {bno} = useParams()
    
    
    console.log(bno)
    console.log(queryObj)

    return (  
        <div>

            <ReadComponent bno={bno}></ReadComponent>

            <button className="border-2 border-gray-400 text-xl font-bold m-2" onClick={e => moveList()}> List</button>

            <ReplyWrapper bno={bno}></ReplyWrapper>
        </div>
    );
}
 
export default ReadPage;