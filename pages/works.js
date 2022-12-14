import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Link
} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import bootlegger from '/public/images/bootlegger.png'
import facebook from '/public/images/Facebook-logo.png'
import airbnb from '/public/images/alogo.jpg'
import gracesipper from '/public/images/Garden.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="bootlegger"
              title="Bootleg Party"
              thumbnail={bootlegger}
              href="https://bootleg-party.herokuapp.com/"
            >
              An ode to nostaglic gaming with friends!
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="gracesipper"
              title="Grace Sipper"
              thumbnail={gracesipper}
              href="https://grace-sipper.herokuapp.com/"
            >
              A mock e-commerce site that ships craft cocktails to your door
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="airbnb"
              title="Airbnb"
              thumbnail={airbnb}
              href="https://airbnb-clone-liart-ten.vercel.app/"
            >
              A woring clone of Airbnb
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="facebook"
              title="Facebook"
              thumbnail={facebook}
              href="https://fb-clone-c5adb.web.app/"
            >
              A working Facebook (Meta) clone
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
