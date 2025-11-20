import PropTypes from 'prop-types';
import { useState } from 'react';

// function Course({ name = "Thambi's Course", price = "Fixed Price", image = defimg, rating=4.5 }) {
function Course(props) {

    // let purchased = false;
    const [purchased, setPurchased] = useState('false');

    function BuyCourse(discount) {
        console.log(props.name, "Purchased with", discount, "% discount");
        // purchased = true;
        setPurchased('true');
    }



    // if (props.show === true) {
    return (
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            {/* <span>{props.rating}</span> */}
            {/* <button onClick={(event) => { BuyCourse(20, event)}}>Buy now</button> */}
            <button onClick={() => { BuyCourse(20)}}>Buy now</button>
            <button onClick={()=> props.delete(props.id)} >Delete</button>
            {/* <p>{purchased ? "Already Purchased" : "Get it Now"}</p> */}
            <p>{purchased}</p>
        </div>
    );
    // }
    // else{
    //     return (
    //         <div className="card">Course is not available</div>
    //     );
    // }

}

Course.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    show: PropTypes.bool
}


export default Course;

