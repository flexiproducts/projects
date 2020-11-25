import {Octokit} from '@octokit/rest'
import {writeFileSync} from 'fs'

const octokit = new Octokit()

async function main() {
  const {data} = await octokit.repos.listForOrg({
    org: 'flexiproducts',
    type: 'public'
  })
  const reposWithPages = data.filter(({homepage}) => homepage)
  const projects = reposWithPages
    .map(({name, homepage}) => ({name, homepage}))
    .filter(
      ({homepage}) =>
        homepage !== 'https://karugamo.agency' && !homepage.includes('template')
    )
    .sort((a) => {
      if (a.homepage.includes('karugamo')) return 1
      return -1
    })
  writeFileSync('./data/projects.json', JSON.stringify(projects, null, '  '))
}

main()
