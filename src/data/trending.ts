import { TrendStateType } from '../type'

export function fetchTrends() {
  const trending:TrendStateType[] = [{
    title: "title1",
    introduction: "introduction1",
    language: "TS",
    total_star: 2100,
    fork: 120,
    dataRange: 'Daily'
  },
  {
    title: "title2",
    introduction: "introduction2",
    language: "JS",
    total_star: 600,
    fork: 120,
    dataRange: 'Weekly'
  },
  {
    title: "title3",
    introduction: "introduction3",
    language: "Python",
    total_star: 200,
    fork: 120,
    dataRange: 'Monthly'
  }];
  return trending;
}

export function fetchLanguages(){
  const languages = ['TS', 'Python']
  return languages
}