import React from 'react';
import ReactNotification from "react-notifications-component";

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="online-users">
                        {notifications && notifications.map(item => {
                            return <li key={item.id}>
                                <span className="pink-text">{item.user} </span>
                                <span>{item.content}</span>
                                {/* <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div> */}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
//     <section>
//         <div className="app-content container">
//             <div className="row">
//                 <div className="col-12">
//                     <h4>Notifications</h4>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-12">
//                     <ReactNotification ref={this.notificationDOMRef} />
//                     <button onClick={this.addNotification} className="btn btn-primary">
//                         Add Awesome Notification
// </button>
//                 </div>
//             </div>
//         </div>
//     </section >


export default Notifications