import React, { PureComponent, Fragment } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import data from '../fixture';


export default class Example extends PureComponent {

    render() {
      return (
        <Fragment>
            <p>
                La idea fué dividir ese capital en 4 líneas de ahorro (100K cada una), simular cada una de ellas desde Nov 2018 y obtener el resultante al día de hoy de cada línea en USD.
            </p>

            <p>
                Líneas de ahorro:
                <ul>
                    <li>1_ No hacer nada. O sea, mantener los 100K en ARS</li>
                    <li>2_ Hacer todos los meses un plazo fijo en ARS, cada 30 días rehacer el plazo fijo agregando el interes ganado</li>
                    <li>3_ Comprar dolares y no hacer nada. Es decir comprar 100K en dolares y mantenerlos</li>
                    <li>4_ Comprar 100K en bitcoins y mantenerlos</li>
                </ul>

            </p>

            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ars" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="pfijo" stroke="#fc1a4a" />
                <Line type="monotone" dataKey="usd" stroke="#f7b733" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="btc" stroke="#82ca9d" />
            </LineChart>
        </Fragment>
      );
    }
  }
