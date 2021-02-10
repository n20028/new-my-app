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
  const [data, setData] = React.useState(0)
  const DataURI = 'http://localhost:8080/data.json'
  React.useEffect(() => {
    window
      .fetch(DataURI)
      .then(res => res.json)
      .then(json => setData(json))
  }, [])

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
