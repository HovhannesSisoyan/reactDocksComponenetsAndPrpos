import React from 'react';
import ReactDOM from 'react-dom';
/*
function Welcome(props){

    return <h1> Hello, {props.name}</h1>;
}
*/
class Welcome extends React.Component{
 
    render(){
        return <h1>Hello, {this.props.name}</h1> 
    }

}


function formatDate(date){
    return date.toLocaleDateString();
}


const comment = {
    date: new Date(),
    text: 'very beautiful picture',
    
    author: {
        name: 'John',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
    
};

function Avatar(props){

    return(
        <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
        />
    );
}


function UserInfo(props){
    return(
               <div className="UserInfo">
                    <Avatar author={props.author}/>
                     <div className="UserInfo-name">
                     {props.author.name}
                     </div> 
                </div>

    );
}





function Comment(props){
    return(
            <div className="Comment">
               <Avatar author={props.author}/>
                <div className="Comment-text">
                   {props.text} 
                </div>
                <div className="Comment-date">
                {formatDate(props.date)}
                </div>
            </div>
    );


}


ReactDOM.render(
    <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
    
     />,
     document.getElementById('root') 
    );







