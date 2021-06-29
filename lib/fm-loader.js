const matter = require("gray-matter");
const stringifyObject = require("stringify-object");

module.exports = async function (src) {
  const callback = this.async();
  const { content, data } = matter(src);

  const code =
    `import { MDWrapper } from '../components/MDWrapper';
export default function Layout({ children, ...props }){
  return (
    <MDWrapper frontmatter={${stringifyObject(data)}} {...props}>
      {children}
    </MDWrapper>
)
}

` + content;

  return callback(null, code);
};
