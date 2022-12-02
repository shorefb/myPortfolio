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
  <Layout title="facebook">
    <Container>
      <Title>
        Airbnb <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/ab1.png" alt="Airbnb" />
      </Center>
      <P>
        A clone of Airbnb with calendar, search results and live map. Hosted on
        Vercel.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Working Search feature</ListItem>
        <ListItem>Active Calendar</ListItem>
        <ListItem>Sleek and !</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>(JS/Next.js/Node)</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://airbnb-clone-liart-ten.vercel.app/">
            Project Link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>03/15/22</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/shorefb/airbnb-clone">
            Project Link
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/layouts/chakra'
