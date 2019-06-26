import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface Props {
  token: string;
  error: string;
}

const Inspector: React.SFC<Props> = props => {
  return (
    <Box mt={5}>
      <Typography variant="body2" color="textSecondary">
        <b>Token:</b> {props.token}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <b>Error:</b> {props.error}
      </Typography>
    </Box>
  );
};

export default Inspector;
