export function fetchTrends() {
  const trending = Array(10).fill({
    title: "title1",
    introduction: "introduction1",
    language: "JS",
    total_star: 200,
    fork: 120,
  });
  return trending;
}
