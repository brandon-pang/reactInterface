import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchAppointments extends Component {
    render() {
        const { orderBy, orderDir, changeOrder, searchApts } = this.props
        return (
            <div className="search-appointments row justify-content-center my-4">
                <div className="col-md-6">
                    <SearchBar
                        orderBy={orderBy}
                        orderDir={orderDir}
                        changeOrder={changeOrder}
                        searchApts={searchApts}
                    />
                </div>
            </div>
        )
    }
}
export default SearchAppointments;