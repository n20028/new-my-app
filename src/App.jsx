import React from 'react'
import './App.css'
import {
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Tab,
  Select,
  MenuItem
} from '@material-ui/core'
import { TabContext, TabList, TabPanel } from '@material-ui/lab'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: null }
    this.URI =
      'https://api.nhk.or.jp/v2/pg/genre/130/g1/0000/2021-02-08.json?key=yzrEfoQcuaIhNq54Pls4whL68MiA9fWv'
  }

  componentDedMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(date => this.setState({ date: date }))
  }

  render () {
    return (
      <div>
        <h1>{Title}</h1>
        <Paper>
          <h2>説明</h2>
          <TableView />
        </Paper>
        <uriView date={this.state} />
      </div>
    )
  }
}

const Title = <h1>Title</h1>

const uriView = props => {
  console.log(props.date)

  return <p>{props.date}</p>
}

const TableView = props => {
  const [value, setValue] = React.useState(0)
  const ints = [1, 2, 3, 4, 5]
  const date = [
    [
      '札幌',
      '函館',
      '旭川',
      '帯広',
      '釧路',
      '北見',
      '室蘭',
      '青森',
      '盛岡',
      '仙台',
      '秋田',
      '山形',
      '福島',
      '水戸',
      '宇都宮',
      '前橋',
      'さいたま',
      '千葉',
      '東京',
      '横浜',
      '新潟',
      '富山',
      '金沢',
      '福井',
      '甲府',
      '長野',
      '岐阜',
      '静岡',
      '名古屋',
      '津',
      '大津',
      '京都',
      '大阪',
      '神戸',
      '奈良',
      '和歌山',
      '鳥取',
      '松江',
      '岡山',
      '広島',
      '山口',
      '徳島',
      '高松',
      '松山',
      '高知',
      '福岡',
      '北九州',
      '佐賀',
      '長崎',
      '熊本',
      '大分',
      '宮崎',
      '鹿児島',
      '沖縄'
    ],
    [
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      110,
      120,
      130,
      140,
      150,
      160,
      170,
      180,
      190,
      200,
      210,
      220,
      230,
      240,
      250,
      260,
      270,
      280,
      290,
      300,
      310,
      320,
      330,
      340,
      350,
      360,
      370,
      380,
      390,
      400,
      410,
      420,
      430,
      440,
      450,
      460,
      470
    ]
  ]

  const handleChange = (event, newValue) => {
    setValue(event.target.value)
  }

  const Views = [
    <SelectView date={date[0]} onChange={handleChange} value={value} key={0} />,
    <DemoView date={date[1]} key={1} />
  ]

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>説明</TableCell>
          <TableCell>値</TableCell>
        </TableRow>
      </TableHead>
      {ints.map((l, i) => (
        <TableRow key={i}>
          <TableCell>{l}</TableCell>
          <TableCell>{Views[i]}</TableCell>
        </TableRow>
      ))}
    </Table>
  )
}
const SelectView = props => {
  return (
    <Select value={props.value} onChange={props.onChange}>
      {props.date.map((l, i) => (
        <MenuItem value={i} key={i}>
          {l}
        </MenuItem>
      ))}
    </Select>
  )
}

const DemoView = props => {
  return (
    <Select value={0}>
      {props.date.map((l, i) => (
        <MenuItem value={i} key={i}>
          {l}
        </MenuItem>
      ))}
    </Select>
  )
}
export default App
