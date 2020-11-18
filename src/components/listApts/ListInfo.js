import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";
import Moment from 'react-moment'

class ListInfo extends Component {
    static defaultProps = {
        info: {
            aptId: 0,
            petName: "Fluffy",
            ownerName: "Tracy Westbay",
            aptNotes: "Fluffy has some matted hair that needs to be groomed",
            aptDate: "2018-11-29 14:30"
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if (nextProps.info === this.props.info) {
            return false;
        }
        // 나머지 경우엔 리렌더링함
        return true;
    }

    handleRemove = () => {
        const { info, deleteAppointment } = this.props;
        deleteAppointment(info.aptId);
    }

    render() {
        const { petName, aptDate, ownerName, aptNotes, aptId } = this.props.info;
        const style = {
            paddingTop: '2px'
        }
        return (
            <div className="pet-item col media py-3">
                <div className="mr-3">
                    <button className="pet-delete btn btn-sm btn-danger" style={style}
                        onClick={this.handleRemove}>
                        <FaTimes />
                    </button>
                </div>

                <div className="pet-info media-body">
                    <div className="pet-head d-flex">
                        <span className="pet-name"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => this.props.updateInfo('petName', e.target.innerText, aptId)}
                        >{petName}</span>
                        <span className="apt-date ml-auto"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => this.props.updateInfo('aptDate', e.target.innerText, aptId)}
                        >
                            <Moment
                                date={aptDate}
                                parse="YYYY-MM-dd hh:mm"
                                format="MMM-D h:mma"
                            />
                        </span>
                    </div>

                    <div className="owner-name">
                        <span className="label-item">Owner: </span>
                        <span
                            contentEditable
                            suppressContentEditableWarning
                            onBlur={e => this.props.updateInfo('ownerName', e.target.innerText, aptId)}
                        >{ownerName}</span>
                    </div>
                    <div className="apt-notes"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={e => this.props.updateInfo('aptNotes', e.target.innerText, aptId)}
                    >{aptNotes}</div>
                </div>
            </div >
        )
    }
}
export default ListInfo;