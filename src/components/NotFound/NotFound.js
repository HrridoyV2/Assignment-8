import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
const NotFound = () => {
    return (
        <div style={{textAlign:'center', color:'red'}}>
           <h2 style={{textAlign:'center', color:'red'}}>Page is not available</h2>
           <Link to='/home'><Button color="primary" variant="contained">Go to Home Page</Button></Link>
        </div>
    );
};

export default NotFound;