import Box from '@material-ui/core/Box';
import Container from 'components/Container';
import Divider from '@material-ui/core/Divider';
import ExoThumb from 'components/ExoThumb';
import fs from 'fs';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import path from 'path';
import Typography from '@material-ui/core/Typography';

type Chapter = {
  files: File[];
  name: string;
};

type File = {
  name: string;
  url: string;
};

type Data = Chapter[];

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(5),
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
}));

/**
 * Home
 */
const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles();

  return (
    <Container>
      {data.map((chapter) => (
        <Box className={classes.box} key={chapter.name}>
          <Typography color="textSecondary" gutterBottom variant="h5">
            {chapter.name}
          </Typography>

          <Divider className={classes.divider} />

          <Grid container spacing={2}>
            {chapter.files.map((file, i) => (
              <Grid item key={i} xs={4}>
                <ExoThumb title={file.name} url={file.url} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const dirPath = path.join(process.cwd(), 'pages');
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  const dirs = files.filter((e) => e.isDirectory());

  const results = dirs.map((d) => {
    const p = path.join(dirPath, d.name);
    const filesInDir = fs.readdirSync(p, { withFileTypes: true });
    const f = filesInDir.filter((e) => e.isFile);

    const fms: File[] = f.map((e) => {
      const fm = require(`pages/${d.name}/${e.name}`).frontmatter;

      return {
        name: fm && fm.title ? fm.title : e.name.slice(0, -4),
        url: `${d.name}/${e.name.slice(0, -4)}`,
      };
    });

    return {
      name: d.name,
      files: fms,
    };
  });

  return {
    props: {
      data: results,
    },
  };
};

export default Home;
