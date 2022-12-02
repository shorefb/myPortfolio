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
        Facebook <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/fbcapture.png" alt="Facebook" />
      </Center>
      <P>
        A Facebook replica with sign-in and livefeed feature, hosted on
        Firebase.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Working Google Sign-In</ListItem>
        <ListItem>Live Newfeed feature</ListItem>
        <ListItem>Pixel perfect replica!</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>(JS/React/Firebase)</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://fb-clone-c5adb.web.app/">Project Link</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>02/11/22</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/shorefb/facebook-clone">
            Project Link
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/layouts/chakra'
