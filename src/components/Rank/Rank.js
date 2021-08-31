export default function Rank({ name, entries }) {
  return (
    <div>
      <div className="f3 white">{`${name}, your entry count is:`}</div>
      <div className="f2 white">{`#${entries}`}</div>
    </div>
  )
}
