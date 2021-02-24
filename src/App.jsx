import React from 'react'
import './App.css'
import {
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: null }
  }

  render () {
    return (
      <div>
        <div className='heder'>
          {Title}
          {Description}
        </div>
        <TableView />
      </div>
    )
  }
}

const Title = <h1>NHK番組紹介</h1>
const Description = <h2>NHKの番組を表示します</h2>

const TableView = props => {
  const data = {
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
        11,
        12,
        13,
        14,
        15,
        16,
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
        401,
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
        '劇場/公演（落語・演芸）',
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
  const [data2, setData2] = React.useState(0)
  React.useEffect(() => {
    window
      .fetch('http://localhost:8080/data.json')
      .then(res => res.json())
      .then(json => setData2(json))
  }, [])
  const [areaValue, setAreaValue] = React.useState(0)
  const [serviceValue, setServiceValue] = React.useState(0)
  const [genreValue, setGenreValue] = React.useState(0)
  const [dateValue, setDateValue] = React.useState(0)
  const [areaParts, setAreaParts] = React.useState(data.area[1][0])
  const [serviceParts, setServiceParts] = React.useState(data.service[1][0])
  const [genreParts, setGenreParts] = React.useState(data.genre[1][0])
  const [NHKProgram, setNHKProgram] = React.useState('')
  const [SubNHKProgram, setSubNHKProgram] = React.useState('')
  const description = [
    '地域',
    'サービス',
    'ジャンル',
    '日付（当日から1週間先まで）'
  ]
  const today = new Date()
  const date = []

  const toTripleDigits = num => {
    num += ''
    if (num.length === 2) {
      num = '0' + num
    }
    return num
  }

  const toDoubleDigits = num => {
    num += ''
    if (num.length === 1) {
      num = '0' + num
    }
    return num
  }

  for (let addDate = 0; addDate < 8; addDate++) {
    date.push(
      today.getFullYear() +
        '-' +
        toDoubleDigits(today.getMonth() + 1) +
        '-' +
        toDoubleDigits(today.getDate() + addDate)
    )
  }
  const [dateParts, setDateParts] = React.useState(date[0])
  const apiKey = process.env.SecretKey
  const URI = `https://api.nhk.or.jp/v2/pg/genre/${toTripleDigits(
    areaParts
  )}/${serviceParts}/${genreParts}/${dateParts}.json?key=${apiKey}`

  const areaHandleChange = (event, newValue) => {
    setAreaValue(event.target.value)
    setAreaParts(data.area[1][event.target.value])
  }
  const serviceHandleChange = (event, newValue) => {
    setServiceValue(event.target.value)
    setServiceParts(data.service[1][event.target.value])
  }
  const genreHandleChange = (event, newValue) => {
    setGenreValue(event.target.value)
    setGenreParts(data.genre[1][event.target.value])
  }
  const dateHandleChange = (event, newValue) => {
    setDateValue(event.target.value)
    setDateParts(date[event.target.value])
  }

  const NHKProgramHandleChange = async props => {
    const titleList = []
    const subList = []
    await window
      .fetch(URI)
      .then(res => res.json())
      .then(json => json.list.g1)
      .then(data => {
        for (let ele = 0; ele < data.length; ele++) {
          titleList.push(data[ele].title)
        }
        setNHKProgram(titleList)
      })
    await window
      .fetch(URI)
      .then(res => res.json())
      .then(json => json.list.g1)
      .then(data => {
        for (let ele = 0; ele < data.length; ele++) {
          subList.push(data[ele].subtitle)
        }
        setSubNHKProgram(subList)
      })
    console.log(data2)
  }

  const TitleList = []

  for (let ele = 0; ele < NHKProgram.length; ele++) {
    TitleList.push(NHKProgram[ele])
  }

  const SubTitleList = []

  for (let ele = 0; ele < SubNHKProgram.length; ele++) {
    SubTitleList.push(SubNHKProgram[ele])
  }

  const Views = [
    <SelectView
      data={data.area[0]}
      onChange={areaHandleChange}
      value={areaValue}
      key={0}
    />,
    <SelectView
      data={data.service[0]}
      onChange={serviceHandleChange}
      value={serviceValue}
      key={1}
    />,
    <SelectView
      data={data.genre[0]}
      onChange={genreHandleChange}
      value={genreValue}
      key={2}
    />,
    <SelectView
      data={date}
      onChange={dateHandleChange}
      value={dateValue}
      key={2}
    />
  ]

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>説明</TableCell>
              <TableCell>値</TableCell>
            </TableRow>
          </TableHead>
          {description.map((l, i) => (
            <TableRow key={i}>
              <TableCell>{l}</TableCell>
              <TableCell>{Views[i]}</TableCell>
            </TableRow>
          ))}
        </Table>
      </Paper>
      <NHKProgramView
        Title={TitleList}
        SubTitle={SubTitleList}
        handleChange={NHKProgramHandleChange}
      />
    </>
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

const NHKProgramView = props => {
  return (
    <>
      <Button variant='contained' color='primary' onClick={props.handleChange}>
        ProgramCreate
      </Button>
      <>
        {props.Title.map((l, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>{l}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{props.SubTitle[i]}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    </>
  )
}

export default App
