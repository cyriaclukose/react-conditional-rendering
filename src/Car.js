function Car(props){


    return(
<>
<p>We are in the car component</p>

{props.vechicles.length && <p> the no of cars is 
    : {props.vechicles.length}</p>}

</>

    );

}

export default Car;