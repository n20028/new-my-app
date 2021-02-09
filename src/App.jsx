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
    this.state = { data: null }
    this.URI =
      'https://api.nhk.or.jp/v2/pg/genre/' +
      this.state.area +
      '/g1/0000/2021-02-09.json?key=yzrEfoQcuaIhNq54Pls4whL68MiA9fWv'
  }

  componentDidMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(json => json.list.g1[0].subtitle)
      .then(jsondata => this.setState({ data: jsondata }))
  }

  render () {
    return (
      <div>
        <h1>{Title}</h1>
        <Paper>
          <h2>説明</h2>
          <TableView />
          <URIView state={this.state} />
          <dataProducter />
        </Paper>
      </div>
    )
  }
}

const Title = <h1>Title</h1>

const URIView = props => {
  console.log(props.state.data)

  return (
    <div>
      <h2>aaaaaaaaaa</h2>
      <p>{props.state.data}</p>
    </div>
  )
}

const TableView = props => {
  const [areaValue, setAreaValue] = React.useState(0)
  const [serviceValue, setServiceValue] = React.useState(0)
  const [genreValue, setGenreValue] = React.useState(0)
  const [dateValue, setDateValue] = React.useState(0)
  const ints = [1, 2, 3, 4]
  const today = new Date()
  const date = []
  for (let addDate = 0; addDate < 8; addDate++) {
    date.push(
      today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        (today.getDate() + addDate)
    )
  }

  const data = [
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
    ],
    [
      'NHK総合',
      'NHKEテレ',
      'NHKワンセグ2',
      'NHKBS',
      'NHKBSプレミアム',
      'NHKラジオ第1',
      'NHKラジオ第2',
      'NHKFM'
    ],
    [
      'ニュース/報道（定時・総合）',
      'スポーツ（スポーツニュース）',
      '情報/ワイドショー（グルメ・料理）',
      'ドラマ（国内ドラマ）',
      '音楽（童話・キッズ）',
      'バラエティ（トークバラエティ）',
      '映画（洋画）',
      'アニメ/特撮（国内アニメ）',
      'ドキュメンタリー/共用（社会・時事）',
      '趣味/教育（旅・釣り・アウトドア）',
      '福祉（高齢者）'
    ]
  ]

  const areaHandleChange = (event, newValue) => {
    setAreaValue(event.target.value)
  }
  const serviceHandleChange = (event, newValue) => {
    setServiceValue(event.target.value)
  }
  const genreHandleChange = (event, newValue) => {
    setGenreValue(event.target.value)
  }
  const dateHandleChange = (event, newValue) => {
    setDateValue(event.target.value)
  }

  const Views = [
    <SelectView
      data={data[0]}
      name={data[1]}
      onChange={areaHandleChange}
      value={areaValue}
      key={0}
    />,
    <SelectView
      data={data[2]}
      name={data[1]}
      onChange={serviceHandleChange}
      value={serviceValue}
      key={1}
    />,
    <SelectView
      data={data[3]}
      name={data[1]}
      onChange={genreHandleChange}
      value={genreValue}
      key={2}
    />,
    <SelectView
      data={date}
      name={data[1]}
      onChange={dateHandleChange}
      value={dateValue}
      key={2}
    />
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
      {props.data.map((l, i) => (
        <MenuItem value={i} key={i}>
          {l}
        </MenuItem>
      ))}
    </Select>
  )
}

export default App
