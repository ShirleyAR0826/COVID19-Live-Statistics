import React from 'react';
import './Table.css';

const Table = ({Countries}) => {
    return(
        <div class="pa4">
            <div class="overflow-auto">
                <table>
                    <thead cellspacing="0">
                        <tr className="dt dt--fixed w-100">
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tl">Country</th>
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tc">New Confirmed</th>
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tc">Total Confirmed</th>
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tc">New Deaths</th>
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tc">Total Deaths</th>
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tc">New Recovered</th>
                            <th class="f3 bb b--black-20 pb3 pr2 dtc tc">Total Recovered</th>
                        </tr>
                    </thead>
                    <tbody cellspacing="0">
                        {Countries.map((entry) => {
                        return(<tr className="dt dt--fixed w-100">
                            <td class="pv3 pr3 bb b--black-20 dtc tl">{entry.Country}</td>
                            <td class="pv3 pr5 bb b--black-20 dtc tr">{entry.NewConfirmed.toLocaleString()}</td>
                            <td class="pv3 pr5 bb b--black-20 dtc tr">{entry.TotalConfirmed.toLocaleString()}</td>
                            <td class="pv3 pr5 bb b--black-20 dtc tr">{entry.NewDeaths.toLocaleString()}</td>
                            <td class="pv3 pr5 bb b--black-20 dtc tr">{entry.TotalDeaths.toLocaleString()}</td>
                            <td class="pv3 pr5 bb b--black-20 dtc tr">{entry.NewRecovered.toLocaleString()}</td>
                            <td class="pv3 pr5 bb b--black-20 dtc tr">{entry.TotalRecovered.toLocaleString()}</td>
                        </tr>)}
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;