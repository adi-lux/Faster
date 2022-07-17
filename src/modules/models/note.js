// Model for a Note
const Note = ([name, contents = ""]) => {
  let noteName = name;
  let textContent = contents;
  return {
    get textContent() {
      return textContent;
    },
    set textContent(newText) {
      textContent = newText;
    },
    get noteName() {},
    set noteName(newNoteName) {},
  };
};

export default Note;
