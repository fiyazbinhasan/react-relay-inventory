import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import GridOnIcon from '@material-ui/icons/GridOn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import {
  Icon,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  IconButton
} from '@material-ui/core';

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
