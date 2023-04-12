import WordItem from './WordItem';

export default function WordsTable({ words }) {
  return (
    <table>
      <tbody>
        {words.map((item, index) => {
          return <WordItem item={item} key={index} />;
        })}
      </tbody>
    </table>
  );
}
