export default function WordsHeader({ show, setShow }) {
  const onChange = (item) => {
    const found = show.find((element) => element == item);
    setShow();
  };

  return (
    <form>
      <input type="checkbox" name="rus" onChange={() => onChange('rus')} />
      <label htmlFor="rus">Русский</label>
      <input type="checkbox" name="eng" onChange={() => onChange('eng')} />
      <label htmlFor="eng">English</label>
      <input
        type="checkbox"
        name="transcription"
        onChange={() => onChange('transcription')}
      />
      <label htmlFor="transcription">Транскрипция</label>
      <input
        type="checkbox"
        name="association"
        onChange={() => onChange('association')}
      />
      <label htmlFor="association">Ассоциация</label>
    </form>
  );
}
