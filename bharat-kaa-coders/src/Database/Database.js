const ar = [
  {
    input1: [1000000001, 1000000002, 1000000003, 1000000004, 1000000005],
  },
];

// console.log(ar[0].input1);

export const database = [
  {
    title: "Solve Me First",
    diffulcity: "Very Easy",
    question: `// Complete the function solveMeFirst to compute the sum of two integers.\nExample
\na=7\nb=3\n\nReturn 10.\n\nFunction Description\nComplete the solveMeFirst function in the editor below.\nsolveMeFirst has the following parameters:\nint a: the first value\nint b: the second value\nReturns\n- int: the sum of a and b\nConstraints\n1<a,b<1000\nSample Input\n\na=2\nb=3\n\nsample output\n5\nExplanation\n2+3=5`,
    testCase: [
      { input: [5, 3], output: 8 },
      { input: [5, 10], output: 15 },
    ],
    timer: 10,
  },
  {
    title: "Simple Array Sum",
    diffulcity: "Easy",
    question: `// Given an array of integers, find the sum of its elements.\nFor example, if the array ar=[1,2,3],1+2+3=6 , so return 6.\n\nExplanation\n\nWe print the sum of the array's \n\nelements:1+2+3+4+10+11=31 .`,
    testCase: [
      { input: [ar[0].input1], output: 5000000015 },
    ],
    timer: 5,
  },
  {
    title: "Two Sum 3",
    diffulcity: "Very Easy",
    question: `// Write a function that adds two numbers\nfunction add(a, d) {\n  // Write your code here\n}`,
    testCase: [
      { input: [1, 8], output: 9 },
      { input: [5, 20], output: 25 },
    ],
    timer: 20,
  },
];
