import React from "react";
import { Component } from "react";

export const Context = React.createContext();


export default class HeaderContext extends Component {
    state = {
        userRole: 1,
        data: [],
        currentStudentData: {}
    }

    setData = (data) => {
        this.setState({ data: data })
    }
    setCurrentData = (data) => {
        this.setState({ currentStudentData: data })
    }

    setUserRole = (role) => {
        this.setState({ userRole: role })
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setData: this.setData,
                setCurrentData: this.setCurrentData,
                setUserRole: this.setUserRole
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
