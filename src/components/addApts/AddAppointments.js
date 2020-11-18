/* eslint-disable */

import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import AddAptForm from './AddAptForm';
class AddAppointments extends Component {
    render() {
        const { formDisplay, toggleForm, addAppointment } = this.props;
        return (
            <div className={'card textcenter mt-3' + (formDisplay ? '' : ' add-appointment')}>
                <div className="apt-addheading card-header bg-primary text-white"
                    onClick={toggleForm}><FaPlus /> Add Appointment</div>

                <div className="card-body">
                    <AddAptForm
                        toggleForm={toggleForm}
                        addAppointment={addAppointment}
                    />
                </div>
            </div>
        );
    }
}
export default AddAppointments;