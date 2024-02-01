import Section from "./components/Section"
import Heading from "./components/Heading"

export default function App() {

  return (
    <>
      <Section level={1}>
        <Heading>
          Hello World
        </Heading>
        <Section level={6}>
          <Heading>
            Bye Bye World
          </Heading>
          <Section level={2}>
            <Heading>Another World</Heading>
          </Section>
        </Section>
      </Section>
    </>
  )
}
