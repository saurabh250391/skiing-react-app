import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/io/ios-snowy'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow';
import {PropTypes} from 'react'
import {Link} from 'react-router'


export const SkiDayList = ({days,filter})=>{
    const filteredDays= (!filter||
            !filter.match(/powder|backcountry/))?
            days:
            days.filter(day =>day[filter])
return(
    <div className="ski-day-list">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to="/list-days">
                            All Days
                    </Link>
                    <Link to="/list-days/powder">
                         Powder Days
                    </Link>
                    <Link to="/list-days/backcountry">
                            Backcountry Days
                    </Link>
                </td>
            </tr>
        </thead>
        <tbody>
            {filteredDays.map((day,i)=>
                <SkiDayRow key={i}
                            {...day}/>
            )}
        </tbody>
    </table>
    </div>
)}


SkiDayList.propTypes={
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
                "~~~~Days is not an array, while array is required~~~~"
            )
        }else if(!props.days.length){
            return new Error("~~~~ The Aray is Empty~~~")
        }else{
            return null
        }
    }
}