import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class Maintenance extends React.Component {
    render() {    
      return (
        <div>
            <h1>
                PERFECT CLEANING MAINTENANCE
            </h1>

            <h2>
                For ongoing, weekly, bi-weekly, or monthly services
            </h2>
            <ul className="fa-ul serviceList">
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Ceiling fans & light fixtures within reach of 2 step stool (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Cobwebs removed</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Blinds, windowsills, & lock ledges (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Moldings & woodwork (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Baseboards (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Lamps & lampshades (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Pictures & knick-knacks (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Furniture (dusted & polished)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Top of refrigerator (dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Outside of appliances cleaned</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Stovetop & drip pans scrubbed</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Counter tops & backsplashes (washed)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> All sinks (scrubbed/disinfected)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Mirrors </li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Tub/shower & tiles (scrubbed)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> All bathroom counters & fixtures (sanitized)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Wastebaskets (emptied/washed/relined)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Beds made; sheets are changed if sheets are provided </li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Stairs (vacuumed, wood dusted)</li>
                 <li><FontAwesomeIcon icon={faCheckSquare}/> Floors (vacuumed &/or mopped)</li>

            </ul>

            <p>It is presumed that the home will be in order and somewhat picked up to facilitate cleaning the areas describe above.</p>

            <p> This service is not recommended for move in / move out cleans, or first time initial cleans.</p>


        </div>
      );
    }
  }
  export default Maintenance;
  