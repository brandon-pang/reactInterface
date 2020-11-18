import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './addApts/AddAppointments';
import ListAppointments from './listApts/ListAppointments';
import SearchAppointments from './searchApts/SearchAppointments';
class App extends Component {

  state = {
    myAppointments: [],
    lastIndex: 0,
    formDisplay: false,
    orderBy: 'petName',
    orderDir: 'asc',
    queryText: '',
  }

  changeOrder = (order, dir) => {
    this.setState({
      orderBy: order,
      orderDir: dir
    })
  }

  searchApts = query => {
    this.setState({
      queryText: query
    })
  }

  updateInfo = (name, value, id) => {
    const { myAppointments } = this.state;
    let tempApts = myAppointments
    let aptIndex = myAppointments.findIndex(data => data.aptId === id);
    tempApts[aptIndex][name] = value;

    this.setState({
      myAppointments: tempApts
    })
  }

  addAppointment = (apt) => {
    const { myAppointments, lastIndex } = this.state;
    this.setState({
      myAppointments: myAppointments.concat({ aptId: lastIndex + 1, ...apt })
    })
  }

  deleteAppointment = (id) => {
    console.log("delete = ", id)
    const { myAppointments } = this.state;
    this.setState({
      myAppointments: myAppointments.filter(info => info.aptId !== id)
    })
  }

  toggleForm = () => {
    const { formDisplay } = this.state;
    this.setState({
      formDisplay: !formDisplay
    })
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({ myAppointments: apts })
      })
  }

  render() {
    const { myAppointments, formDisplay, orderDir, orderBy, queryText } = this.state;
    let order;
    let filteredApts = myAppointments;

    if (orderDir === 'asc') {
      order = 1
    } else {
      order = -1
    }

    filteredApts = filteredApts.sort((a, b) => {
      if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (
        eachItem['petName']
          .toLowerCase()
          .includes(queryText.toLowerCase()) ||
        eachItem['ownerName']
          .toLowerCase()
          .includes(queryText.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(queryText.toLowerCase())
      );
    });

    return (
      <main className="page bg-white" id="petratings" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointment={this.addAppointment}
                />
                <SearchAppointments
                  orderBy={orderBy}
                  orderDir={orderDir}
                  changeOrder={this.changeOrder}
                  searchApts={this.searchApts}
                />
                <ListAppointments
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

}

export default App;
