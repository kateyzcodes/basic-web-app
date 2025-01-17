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
  // if (query.toLowerCase().includes("which of the following numbers is the largest")) {
  //   const largestRegex = /([0-9]+),([0-9]+),([0-9]+)/;
  //   const match = query.match(largestRegex);
  //   return (
  //     "Match"
  //     // Expected output: "Width: 1440 / Height: 900."
  //   );
  // }
  
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
  const x: number = parseInt(minusMatch[1]);
  const y: number = parseInt(minusMatch[2]);
  return (x-y).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
  const x: number = parseInt(multiplyMatch[1]);
  const y: number = parseInt(multiplyMatch[2]);
  return (x*y).toString();
  }
  

  return "";
}
