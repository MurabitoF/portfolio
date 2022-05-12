import { useState, useEffect } from 'react'

const useProjects = (user, sizePage) => {
  console.log(user, sizePage)

  const [repos, setRepos] = useState([])
  const url = `https://api.github.com/users/${user}/repos?sort=created&per_page=${sizePage}`

  useEffect(() => {
    if (!repos.length) {
      fetch(url)
        .then(res =>
          res.json()
        )
        .then(data => data.map(repo => {
          return {
            title: repo.name,
            description: repo.description,
            technologies: repo.topics,
            url: repo.html_url
          }
        }))
        .then(setRepos)
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  return repos
}

export default useProjects
