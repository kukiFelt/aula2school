export default function Header(){
    return(
        <div className="md:flex justify-between lg:mt-8 font-bold border-b-2 border-[#4d4d4d]">
      <h3>🏫 ESCOLA TECNOLÓGICA 📕</h3>
      <nav className="space-x-3 mx-4">
        <a href="#">Home</a>
        <a href="#">Cursos</a>
        <a href="#">Contato</a>
        <a href="#">Login</a>
      </nav>
      {/* space-x-2  ESPAÇO ENTRE AS TAGS*/}
      {/* mr-4 ESPAÇO DO LADO DIREIRO */}
      {/* mx-4 ESPAÇO NA HORIZONTAL */}
    </div> 
    )
}