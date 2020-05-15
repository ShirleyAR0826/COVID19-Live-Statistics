import React from 'react';
import './Table.css';
import Scroll from '../Scroll/Scroll';


const Table = ({Countries}) => {
    return(
        <div class="pa4">
            <div class="overflow-auto">
                    <div class="f4 w-100 center dt dt--fixed" cellspacing="0">
                        <tr>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tl">Country</th>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tc">New Confirmed</th>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tc">Total Confirmed</th>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tc">New Deaths</th>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tc">Total Deaths</th>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tc">New Recovered</th>
                            <th class="f3 bb b--black-20 pb3 pr3 dtc tc">Total Recovered</th>
                        </tr>
                    </div>
                <Scroll>
                <table class="f4 w-100 center dt dt--fixed" cellspacing="0">
                    <tbody>
                        {Countries.map((entry) => {
                        return(<tr>
                            <td class="pv3 pr3 bb b--black-20 dtc tl">{entry.Country}</td>
                            <td class="pv3 pr3 bb b--black-20 dtc tc">{entry.NewConfirmed.toLocaleString()}</td>
                            <td class="pv3 pr3 bb b--black-20 dtc tc">{entry.TotalConfirmed.toLocaleString()}</td>
                            <td class="pv3 pr3 bb b--black-20 dtc tc">{entry.NewDeaths.toLocaleString()}</td>
                            <td class="pv3 pr3 bb b--black-20 dtc tc">{entry.TotalDeaths.toLocaleString()}</td>
                            <td class="pv3 pr3 bb b--black-20 dtc tc">{entry.NewRecovered.toLocaleString()}</td>
                            <td class="pv3 pr3 bb b--black-20 dtc tc">{entry.TotalRecovered.toLocaleString()}</td>
                        </tr>)}
                        )}
                    </tbody>
                </table>
                </Scroll>
            </div>
        </div>
    )
}

export default Table;