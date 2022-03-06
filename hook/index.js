function setData(data) {
  setData.data = data;
}

function useState(data) {
  setData.data = { value: data };
  return [setData.data, setData];
}

////////////////////////////////////////////////////////////////////////////////

const [count, setCount] = useState(0);

console.log({ setCount });
setCount(count + 1);

console.log({ count });
