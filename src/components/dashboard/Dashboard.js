import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const Dashboard = ({
  emplist
}) => {
  

  return (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome 
      </p>
       
        <Fragment>
          
        <div className="container">

  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Phone No</th>
        
      </tr>
    </thead>
    <tbody>
      {emplist.map(({id,age,name,gender,phoneNo,email}, index) => {
        return (
      <tr key={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{email}</td>
        <td>{phoneNo}</td>
      </tr> 
        )
      })}
           
  
    </tbody>
  </table>
</div>

        </Fragment>
      
    </Fragment>
  );
};



const mapStateToProps = state => ({
  emplist: state.dashboard.user
});

export default connect(
  mapStateToProps,
)(Dashboard);
