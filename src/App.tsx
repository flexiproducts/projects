import React from 'react'
import styled from 'styled-components'
import projects from '../data/projects.json'

export default function App() {
  return (
    <Main>
      <Title>projects</Title>
      <Container>
        {projects.map((project) => (
          <ProjectThumbnail key={project.name} project={project} />
        ))}
      </Container>
    </Main>
  )
}

type Project = {
  name: string
  homepage: string
}

function ProjectThumbnail({project}: {project: Project}) {
  const withoutHttp = project.homepage.split('//')[1]
  return (
    <Thumbnail>
      <ProjectLink href={project.homepage}>{withoutHttp}</ProjectLink>
    </Thumbnail>
  )
}

const Title = styled.h1`
  font-size: 50px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`

const Thumbnail = styled.section`
  font-size: 40px;
  margin: 10px;
`

const ProjectLink = styled.a`
  color: #282826;

  :hover {
    color: #f4685d;
  }
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #242422;
`
