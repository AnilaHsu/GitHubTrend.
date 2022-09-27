import { GitHubLanguage, GitHubTrend } from '../type'
import axios from 'axios'


export async function fetchGitHubTrends(lang: string, range: string): Promise<GitHubTrend[]> {
  const response = await axios.get<GitHubTrend[]>('https://api.reald.app/trend/repos',{
    params: {
      lang: lang,
      range: range
    }
  })
  console.log('trend response:',response)
  const trendData = response.data
  return trendData
}

export async function fetchGitHubLanguages(): Promise<GitHubLanguage[]> {
  const response = await axios.get<GitHubLanguage[]>('https://api.reald.app/trend/langs')
  console.log('languages response:',response)
  const languages = response.data
  return languages
}