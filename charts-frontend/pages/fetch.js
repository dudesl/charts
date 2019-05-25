import Layout from '../components/Layout.js'
import {
    Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush
} from 'recharts';
import { BLineChart } from '../components/LineChart'
import { localRateUSD } from '../services/bcra'

const FOUR_YEARS = 1460;

const Index = ({ rates }) => (
  <Layout>
            <h1> ARSUSD Rate </h1>

            <BLineChart
                width={800}
                height={600}
                data={rates}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="d" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Brush
                    dataKey="d"
                    height={30}
                    stroke="#8884d8"
                    gap={10}
                    startIndex={rates.length - 365}
                />
                <Line type="natural" dataKey="v" dot={false} />

                {/* <Line type="monotone" dataKey="ars" stroke="#8884d8" activeDot={{ r: 4 }}>
                    <LabelList dataKey="ars" position="insideTop" angle="45"  />
                </Line>
                <Line type="monotone" dataKey="pfijo" stroke="#fc1a4a" activeDot={{ r: 4 }}>
                    <LabelList dataKey="pfijo" position="insideTop" angle="45"  />
                </Line>
                <Line type="monotone" dataKey="usd" stroke="#f7b733" activeDot={{ r: 4 }}>
                    <LabelList dataKey="usd" position="insideTop" angle="45"  />
                </Line>
                <Line type="monotone" dataKey="btc" stroke="#82ca9d" activeDot={{ r: 4 }}>
                    <LabelList dataKey="btc" position="insideTop" angle="45"  />
                </Line> */}
            </BLineChart>
  </Layout>
)

Index.getInitialProps = async function() {

  const rates = await localRateUSD()

  console.log(`Show rates fetched. ${rates.length}`)

  console.log(`Slicing rates to last 4 years ${rates.slice(0, FOUR_YEARS).length}`)

  const output =
  console.log(`Show rates fetched. ${rates.length}`)

  return { rates }
}

export default Index