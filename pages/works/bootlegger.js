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
  <Layout title="bootlegger">
    <Container>
      <Title>
        Bootleg Party <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/BoardScreen.png" alt="Bootleg" />
      </Center>
      <P>
        Bootleg Party is a web based version of the popular Nintendo game, Mario
        Party.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Up to 4 players at once.</ListItem>
        <ListItem>Can save and return to a game.</ListItem>
        <ListItem>4 unique mini games!</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>(JS/React/Firebase/Phaser)</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://bootleg-party.herokuapp.com/">Project Link</Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>06/15/21</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/shorefb/Bootleg-Party">
            Project Link
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/layouts/chakra'
