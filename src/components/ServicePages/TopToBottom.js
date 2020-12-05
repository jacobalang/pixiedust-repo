import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
class TopToBottom extends React.Component {
    
    render() {  
       
      return (
        <div>
            <h1>
                Top To Bottom Deluxe Cleaning
            </h1>

            <h2>
                Includes the following:
            </h2>
            <ul className="fa-ul serviceList">
                <li><FontAwesomeIcon icon={faCheckSquare}/> light fixtures (hand washed in place/not removed) (within reach of a 2-step stool)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Blinds & shutters (vacuumed or wiped w/microfiber)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Moldings & woodwork, windowsills, & lock ledges (hand washed or wiped)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Lamps & lampshades (dusted or vacuumed w/ attachment)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Pictures & knick-knacks (hand wiped)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Furniture (polished, fronts, sides, legs)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Top of refrigerator (hand washed or wiped)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Outside of appliances cleaned / inside microwave</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Stovetop & drip pans scrubbed</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All Cabinet fronts (washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All Doors (washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Light switch plates (washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Counter tops & backsplashes (washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All sinks (scrubbed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Mirrors </li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Tub/shower & tiles (scrubbed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All bathroom counters & fixtures (sanitized)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Wastebaskets (emptied/washed/relined)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Beds made; 1 set of sheets changed</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Stairs (vacuumed, wood washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Floors (vacuumed &/or mopped)</li>

            </ul>
            <p>It is presumed that the home will be in order and somewhat picked up to facilitate cleaning the areas describe above.</p>


        </div>
      );
    }
  }
  export default TopToBottom;
  