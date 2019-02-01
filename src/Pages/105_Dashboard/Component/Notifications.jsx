import React from 'react';
import ReactNotification from "react-notifications-component";

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
    }

    addNotification() {
        this.notificationDOMRef.current.addNotification({
            title: "Awesomeness",
            message: "Awesome Notifications!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            // dismiss: { duration: 2000 },
            dismissable: { click: true },

        });

        const count = this.props.count + 1;
        this.setState({ count });
        console.log("hi");

    }

    render() {
        return (
            <section>
                <div className="app-content container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Notifications</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ReactNotification ref={this.notificationDOMRef} />
                            <button onClick={this.addNotification} className="btn btn-primary">
                                Add Awesome Notification
        </button>
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}