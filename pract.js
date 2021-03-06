const test = {
  name: "john",
  age: 12,
  bool: true,
};

const hi = "hihifhffe";

// console.log()

const printer = (val) => {
  return val;
};

const newarr = printer({ ...test, hi });

console.log(newarr);
