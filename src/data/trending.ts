import { GitHubLanguage, GitHubTrend } from "../type";
import axios from "axios";

export async function fetchGitHubTrends(
  lang: string,
  range: string
): Promise<GitHubTrend[]> {
  const response = await axios.get<GitHubTrend[]>(
    "https://api.reald.app/trend/repos",
    {
      params: {
        lang,
        range,
      },
    }
  );
  const trendData = response.data;
  return trendData;
}

export async function fetchGitHubLanguages(): Promise<GitHubLanguage[]> {
  const response = await axios.get<GitHubLanguage[]>(
    "https://api.reald.app/trend/langs"
  );
  const languages = response.data;
  return languages;
}
