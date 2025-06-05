function studentRegisterInput({type, name, onkeyup}) {
    return`
    <div>
        <input type="${type}" name="${name}" autocomplate="off" onkeyup="${onkeyup}(event)">
    </div>
    `
}