import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
class MoveinMoveOut extends React.Component {
    render() {    
      return (
        <div>
            <h2>
                 MOVE-IN & MOVE-OUT CLEANING
            </h2>

            <h3 style={{'textAlign': 'center'}}>
                Let Pixie Dust Professional Cleaning clean your old home and make your new home move-in amazing!
            </h3>
            <ul className="fa-ul serviceList">
                <li><FontAwesomeIcon icon={faCheckSquare}/> Blinds & shutters (vacuumed or wiped w/ microfiber</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Moldings & woodwork, windowsills, & lock ledges (hand washed or wiped)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Baseboards (hand washed or wiped, reachable w/out moving furniture)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Top of refrigerator (hand washed or wiped)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Outside of appliances cleaned / inside microwave</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Stovetop & drip pans scrubbed</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All Cabinet fronts (washed) FOR EMPTY HOUSES, OPEN ALL CABINETS & DRAWERS WIPE OUT</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All Doors (washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Counter tops & backsplashes (washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All sinks (scrubbed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Mirrors cleaned</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Tub/shower & tiles (scrubbed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Toilets (scrubbed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> All bathroom counters & fixtures (sanitized) FOR EMPTY HOUSES, WIPE OUT ALL DRAWERS AND CABINETS</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Stairs (vacuumed, wood washed)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Floors (vacuumed &/or mopped)</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Front and back door glass</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Refrigerator cleaning</li>
                <li><FontAwesomeIcon icon={faCheckSquare}/> Oven cleaning</li>
            </ul>

        </div>
      );
    }
  }
  export default MoveinMoveOut;
  