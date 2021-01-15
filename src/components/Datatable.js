import React, { useState } from 'react'

import { Container, Card, CardContent, Typography, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { tableIcons } from '../icons/Icons'
import { names } from '../names.json'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Datatable = () => {

  const [ param, setParam ] = useState('')
  const classes = useStyles();

  const handleInput = (e) => {
    console.log(e.target.value)
  }
  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Nimiä {names.length}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Input placeholder="Etsi nimellä..." onChange={handleInput} />
          <Typography variant="h5" component="h2">
            Nimiä {names.length}
          </Typography>
        </CardContent>
      </Card>
      <MaterialTable 
        icons={tableIcons}
        columns={[
          { title: "Nimi", field: "name" },
          { title: "Arvo", field: "amount" },
        ]}
        data={names}
        title="Nimet ja arvot järjestyksessä"
      />
    </Container>
  )
}

export default Datatable
