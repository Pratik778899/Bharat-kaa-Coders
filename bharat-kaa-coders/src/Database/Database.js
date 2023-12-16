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
    title: "A Very Big Sum",
    diffulcity: "Easy",
    question: `In this challenge, you are required to calculate and print the sum of the elements in\nan array, keeping in mind that some of those integers may be quite large.\n\nThe range of the 32-bit integer is\nWhen we add several integer values, the resulting sum might exceed the above\nrange. You might need to use long int C/C++/Java to store such sums.`,
    testCase: [{ input: [ar[0].input1], output: 5000000015 }],
    timer: 15,
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
