export default function CurrentMessage () {
  const day = new Date().getDay()
  return <div>{day}</div>
}
