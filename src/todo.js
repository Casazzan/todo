const todoFactory = (...args) => {
  if (args.length < 4) {
    console.log("Invalid input into todoFactory of " + args);
  }
  let title = args[0];
  let date = args[1];
  let description = args[2];
  let priority = args[3];
  let subList = args.slice(4);
  let isComplete = false;

  return { title, date, description, priority, isComplete, subList };
};

export default todoFactory;
