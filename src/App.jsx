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
    this.state = {
      data: null,
      parts: null,
      values: { areaValue: 0, serviceValue: 0, genreValue: 0, dateValue: 0 }
    }
    this.URI =
      'https://api.nhk.or.jp/v2/pg/genre/' +
      this.state.area +
      '/g1/0000/2021-02-09.json?key=yzrEfoQcuaIhNq54Pls4whL68MiA9fWv'

    this.date = []
    this.today = new Date()
    for (let addDate = 0; addDate < 8; addDate++) {
      this.date.push(
        this.today.getFullYear() +
          '-' +
          (this.today.getMonth() + 1) +
          '-' +
          (this.today.getDate() + addDate)
      )
    }
    this.data = {
      area: [
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
      ],
      service: [
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
        ['g1', 'e1', 'e4', 's1', 's3', 'r1', 'r2', 'r3']
      ],
      genre: [
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
        ],
        [
          '0000',
          '0100',
          '0205',
          '0300',
          '0409',
          '0502',
          '0600',
          '0700',
          '0800',
          '0903',
          '1000',
          '1100'
        ]
      ]
    }
  }

  componentDidMount () {
    window
      .fetch(this.URI)
      .then(res => res.json())
      .then(json => json.list.g1[0].subtitle)
      .then(jsondata => this.setState({ data: jsondata }))
  }

  onAreaChange (event) {
    this.setState({ areValue: event.target.value })
  }

  onServiceChange (event) {
    this.setState({ serviceValue: event.target.value })
  }

  onGenreChange (event) {
    this.setState({ genreValue: event.target.value })
  }

  onDateChange (event) {
    this.setState({ dateValue: event.target.value })
  }

  partsHandleChange (event) {
    this.setState({ areaValue: event.target.value })
  }

  render () {
    return (
      <div>
        <h1>{Title}</h1>
        <Paper>
          <h2>説明</h2>
          <TableView
            state={this.state}
            data={this.data}
            date={this.date}
            onAreaChange={() => this.onAreaChange}
            onServiceChange={() => this.onServiceChange}
            onGenreChange={() => this.GenreChange}
          />
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

const SubmitBottom = props => {
  return (
    <Button variant='contained' color='secondary' onClick={props.handleChange}>
      productURL
    </Button>
  )
}

const TableView = props => {
  const ints = [1, 2, 3, 4]

  const Views = [
    <SelectView
      data={props.data.area[0]}
      onChange={props.onAreaChange}
      value={props.state.values.areaValue}
      key={0}
    />,
    <SelectView
      data={props.data.service[0]}
      onChange={props.onServiceChange}
      value={props.state.values.serviceValue}
      key={1}
    />,
    <SelectView
      data={props.data.genre[0]}
      onChange={props.onServiceChange}
      value={props.state.values.genreValue}
      key={2}
    />,
    <SelectView
      data={props.date}
      onChange={props.onDateChange}
      value={props.state.values.dateValue}
      key={2}
    />
  ]

  return (
    <>
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
    </>
  )
}

const SelectView = props => {
  return (
    <Select
      value={props.value}
      name={props.nameValue}
      onChange={props.onChange}
    >
      {props.data.map((l, i) => (
        <MenuItem value={i} key={i} name={props.name}>
          {l}
        </MenuItem>
      ))}
    </Select>
  )
}

export default App
