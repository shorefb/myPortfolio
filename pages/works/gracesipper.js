import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/layouts/work'
import P from '../../components/layouts/paragraph'

const Work = () => (
  <Layout title="gracesipper">
    <Container>
      <Title>
        Grace Sipper <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/sipper.jpg" alt="GraceSipper" />
      </Center>
      <P>
        Grace Sipper is a mock e-commerce site that was made to deliver craft
        made cocktails to your door.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Scrolls through available cocktails.</ListItem>
        <ListItem>Working uniquecart/checkout feature.</ListItem>
        <ListItem>Launched Using Heroku!(please wait for hotfix)</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>(JS/Node/React/Redux)</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://grace-sipper.herokuapp.com/">Project Link</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>06/15/21</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/shorefb/GraceSHOPPER">Project</Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/layouts/chakra'
