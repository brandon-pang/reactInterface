/* eslint-disable */
import React, { Component } from 'react';
import ListInfo from './ListInfo';

class ListAppointments extends Component {
    static defaultProps = {
        appointments: [],
        deleteAppointment: () => console.warn('deleteAppointment not defined'),
    }

    render() {
        const { appointments, deleteAppointment, updateInfo } = this.props;
        const list = appointments.map(
            info => (
                <ListInfo
                    key={info.aptId}
                    info={info}
                    deleteAppointment={deleteAppointment}
                    updateInfo={updateInfo}
                />)
        );
        return (
            <div className="appointment-list item-list mb-3">
                {list}
            </div>
        )
    }
}
export default ListAppointments;