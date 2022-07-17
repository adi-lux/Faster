// Model for a Note
const Note = (parameters) => {
    let textContent = ""
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