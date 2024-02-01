import Section from './components/Section'
import Heading from './components/Heading'

export default function App() {
  return (
    <>
      <Section level={1}>
        <Heading>Hello World</Heading>
        <Section level={6}>
          <Heading>Bye Bye World</Heading>
          <section>
            <Heading>Bye Bye World 2 h6</Heading>
          </section>
          <Section level={2}>
            <Heading>Another World</Heading>
            <div>
              <Heading>Another World h2</Heading>
            </div>
          </Section>
        </Section>
      </Section>
    </>
  )
}
