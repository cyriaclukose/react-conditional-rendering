function App (props){


  if(props.isScored){

    return (<Scored />);
  }else{

    return (<Missed />);
  }

}


function Missed(){


  return <p>Goal missed</p>;
}

function Scored(){

  return <p>Goal Is Scored</p>;
}


export  {App};