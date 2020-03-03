require('isomorphic-fetch')

const Index = ({ links = [] }) => (<ul>{
  links.map(link => (<li key={link._id}>{link.title}</li>))
}</ul>)

Index.getInitialProps = async ctx => {
  const res = await fetch('http://localhost:3002/api/v1/Link')
  const links = await res.json()
  return { links }
}

export default Index