export default function NavBar(){
    return(
    <div className="flex justify-evenly p-6 border-b-2">
        <h1>Logo</h1>
        <a href="/admin">Home</a>
        <a href="/admin/student">Navegar Estudante</a>
        <h1>Avatar</h1>
    </div>
    // flex justify-evenly FAZ COM QUE SEPARA AS TAGS
    // flex justify-betwen faz as tags dos cantos ficar no final
    // border-b-2 para por borda em baixo
    //  p-6 espaçamento do meio
    )
}