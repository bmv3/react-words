export default function WordItem({ item }) {
  // console.log(index);
  return (
    <tr>
      <td>{item.rus}</td>
      <td>{item.eng}</td>
      <td>{item.transcription}</td>
      <td>{item.association}</td>
    </tr>
  );
}
