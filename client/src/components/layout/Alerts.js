import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
    const { alerts } = useContext(AlertContext);

    return (
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div key={alert.id} className='alert'>
                <i className='fas fa-info-circle alert-icon'></i> {alert.msg}
            </div>
        ))
    );
};

export default Alerts;
