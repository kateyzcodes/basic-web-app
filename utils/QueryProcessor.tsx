export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("katelynz")) {
    return (
      "Katelyn Zheng is a third year CMU student majoring "+
      "in Information Systems with a concentration in "+
      "Data Analytics and a minor in Social and Political History."
    );
  }

  return "";
}
