// Model for a Note
const Note = ([contents = ""]) => {
    let textContent = contents
    return {
        get textContent() {
            return textContent
        },
        set textContent(newText) {
            textContent = newText
        }
    }
}

export default Note;