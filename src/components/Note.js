import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <div className="note">
            <span>Hello! this is our First Note! Hurray!!!</span>
            <div className="note-footer">
                <small>01/09/21</small>
                <MdDeleteForever className="delete-icon" size="1.3em " />
            </div>
        </div>
    )
}
export default Note;