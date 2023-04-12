export default function WordsHeader() {
  return (
    <form>
      <input type="checkbox" name="rus" />
      <label htmlFor="rus">Русский</label>
      <input type="checkbox" name="eng" />
      <label htmlFor="eng">English</label>
      <input type="checkbox" name="transcription" />
      <label htmlFor="transcription">Транскрипция</label>
      <input type="checkbox" name="association" />
      <label htmlFor="association">Ассоциация</label>
    </form>
  );
}
