import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
class SmallProjects extends React.Component {
    render() {    
      return (
        <div>
            <h1>
            SMALL ORGANIZING PROJECTS
            </h1>

            <h3 style={{'textAlign': 'center'}}>
            Let Pixie Dust Professional Cleaning help you to tackle that cluttered and unorganized space in home! Organizing things in our home makes us more productive! 
            </h3>

            <ul className="fa-ul serviceList">
               <li><FontAwesomeIcon icon={faCheckSquare}/> Pantry (dispose of expired food and organize food into containers)
               </li>
               <li><FontAwesomeIcon icon={faCheckSquare}/> Closet, Laundry Room, Kitchen and Office (with assistance go through items to organize things into 3 piles: keep, Trash, and Donate) then organize into proper spaces.
               </li>
               <li><FontAwesomeIcon icon={faCheckSquare}/> This service is not to be combined with other cleaning services.
               </li>
      

            </ul>


        </div>
      );
    }
  }
  export default SmallProjects;