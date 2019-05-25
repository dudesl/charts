import React, { PureComponent } from 'react';
import { LineChart } from 'recharts';

export class BLineChart extends PureComponent {
    constructor(props) {
        super(props);

    }

    render = () => (
        <LineChart
            width={this.props.width}
            height={this.props.height}
            data={this.props.data}
            margin={this.props.margin}
        >
            {this.props.children}
        </LineChart>
    );
  }
