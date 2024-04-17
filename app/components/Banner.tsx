export default function Banner(){
    return(
        <div className="mt-8 md:grid grid-cols-2 items-center lg:size-4/5">
        <div>
          <h2>UTFTEC</h2>
          <h3 className="text-[#00e77f]">A Melhor Escola de Informática</h3>
          <button className="btn">Informações</button>
        </div>
        <div>
          <img src="/img/banner.svg" alt="" />
        </div>
      </div>
    )
}