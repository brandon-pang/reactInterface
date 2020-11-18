import React, { Component } from 'react';

class AddAptForm extends Component {
    state = {
        petName: "",
        ownerName: "",
        aptDate: "",
        aptTime: "",
        aptNotes: ""
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleAdd = (e) => {
        e.preventDefault();

        const { petName, ownerName, aptDate, aptTime, aptNotes } = this.state;
        let tempApt = {
            petName,
            ownerName,
            aptDate: `${aptDate} ${aptTime}`,
            aptNotes
        }

        this.props.addAppointment(tempApt);

        this.setState({
            petName: "",
            ownerName: "",
            aptDate: "",
            aptTime: "",
            aptNotes: ""
        })

        this.props.toggleForm();
    }

    render() {
        const { petName, ownerName, aptDate, aptTime, aptNotes } = this.state;
        return (
            <form id="aptForm" onSubmit={this.handleAdd} noValidate>
                <div className="form-group form-row">
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="petName"
                        readOnly
                    >Pet Name</label>
                    <div className="col-md-10">
                        <input
                            type="text"
                            className="form-control"
                            name="petName"
                            placeholder="Pet's Name"
                            value={petName}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="ownerName"
                    >Pet Owner</label>
                    <div className="col-md-10">
                        <input
                            type="text"
                            className="form-control"
                            name="ownerName"
                            placeholder="Owner's Name"
                            value={ownerName}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="aptDate"
                    >Date</label>
                    <div className="col-md-4">
                        <input
                            type="date"
                            className="form-control"
                            name="aptDate"
                            id="aptDate"
                            value={aptDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="aptTime"
                    >Time</label>
                    <div className="col-md-4">
                        <input
                            type="time"
                            className="form-control"
                            name="aptTime"
                            id="aptTime"
                            value={aptTime}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-md-2 text-md-right" htmlFor="aptNotes">Apt. Notes</label>
                    <div className="col-md-10">
                        <textarea
                            className="form-control"
                            rows="4"
                            cols="50"
                            name="aptNotes"
                            id="aptNotes"
                            placeholder="Appointment Notes"
                            value={aptNotes}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="form-group form-row mb-0">
                    <div className="offset-md-2 col-md-10">
                        <button
                            type="submit"
                            className="btn btn-primary d-block ml-auto"
                        >Add Appointment</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddAptForm;