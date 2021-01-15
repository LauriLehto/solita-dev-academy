import React, { useState } from 'react'

import { Container, Grid, Card, CardContent, Typography, Input, CardActions } from '@material-ui/core'
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
  const [ filtered, setFiltered ]= useState([])
  const classes = useStyles();

  const handleInput = (e) => {
    console.log(e.target.value)
    const filtered = names.filter(n => n.name.toLowerCase().includes(e.target.value))
    console.log(filtered)
    setFiltered(filtered)
    setParam(e.target.value)
  }
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item  xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Nimiä yhteensä {names.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item  xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Nimiä seulottuna {filtered.length}
              </Typography>

              
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
          <Input placeholder="Etsi nimellä..." value={param} onChange={handleInput} />
          <Typography>
            {filtered.length!==names.length && filtered.map(f => f.name+' ')}
          </Typography>
        </Grid>
      </Grid>
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
