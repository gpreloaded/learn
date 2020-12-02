import Blockquote from './md/Blockquote';
import BlockquoteGroup from './custom/BlockquoteGroup';
import Emphasis from './md/Emphasis';
import Image from './md/Image';
import Li from './md/Li';
import Link from './md/Link';
import Math from './custom/Math';
import MathInline from './custom/MathInline';
import Ol from './md/Ol';
import Paragraph from './md/Paragraph';
import SectionHeader from './md/SectionHeader';
import Strong from './md/Strong';
import SubSectionHeader from './md/SubSectionHeader';
import Table from './md/Table';
import TableBody from './md/TableBody';
import TableCell from './md/TableCell';
import TableHead from './md/TableHead';
import TableRow from './md/TableRow';
import Title from './md/Title';
import Ul from './md/Ul';

const components = {
  a: Link,
  blockquote: Blockquote,
  BlockquoteGroup,
  em: Emphasis,
  h1: Title,
  h2: SectionHeader,
  h3: SubSectionHeader,
  h4: SubSectionHeader,
  h5: SubSectionHeader,
  h6: SubSectionHeader,
  img: Image,
  li: Li,
  Math,
  MathInline,
  ol: Ol,
  p: Paragraph,
  strong: Strong,
  table: Table,
  tbody: TableBody,
  td: TableCell,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
  ul: Ul,
};

export default components;
