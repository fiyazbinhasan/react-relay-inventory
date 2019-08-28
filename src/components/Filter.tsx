import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridOnIcon from '@material-ui/icons/GridOn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { FormControl, Select, MenuItem, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    typography: {
      padding: theme.spacing(2)
    },
    itemContainer: {
      padding: theme.spacing(0, 3)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160
    },
    iconButton: {
      margin: theme.spacing(1)
    }
  })
);

export default function Filter() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai'
  });

  function handleChange(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value
    }));
  }
  return (
    <div className={classes.itemContainer}>
      <div className={classes.root}>
        <Typography variant="subtitle1" align="center" color="primary">
          100 Products
        </Typography>
        <form>
          <FormControl className={classes.formControl}>
            <Select
              value={values.age}
              onChange={handleChange}
              displayEmpty
              name="age"
            >
              <MenuItem value="" selected>
                Sort by
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            size="small"
            className={classes.iconButton}
            aria-label="delete"
          >
            <ArrowUpwardIcon color="primary" />
          </IconButton>
          <IconButton
            size="small"
            className={classes.iconButton}
            aria-label="delete"
          >
            <GridOnIcon color="primary" />
          </IconButton>
        </form>
      </div>
    </div>
  );
}
