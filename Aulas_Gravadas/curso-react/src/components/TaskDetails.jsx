import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button';

const TaskDetails = () => {
    const params = useParams()

    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero, nesciunt facilis voluptate a cum.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;