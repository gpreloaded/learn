import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string;
  url: string;
}

const useStyles = makeStyles((theme) => ({
  fill: {
    height: '100%',
  },
  root: {
    height: 120,
  },
}));

/**
 * ExoThumb
 */
const ExoThumb = ({ title, url }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={url}>
        <CardActionArea className={classes.fill}>
          <CardContent className={classes.fill}>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

ExoThumb.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ExoThumb;
