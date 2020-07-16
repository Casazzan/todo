const todoFactory = (...args) => {
  if (args.length < 4) {
    console.log("Invalid input into todoFactory of " + args);
  }
  let name = args[0];
  let date = args[1];
  let notes = args[2];
  let priority = args[3];
  let subList = args[4];
  let isComplete = false;

  return { name, date, notes, priority, isComplete, subList };
};

export default todoFactory;
