import React from 'react'
import Header from '../components/Header/Header'
import PokemonBlock from '../components/PokemonBlock/PokemonBlock'


export const Home = ({pokeData,setInfoPokemon,setUrl,nextUrl}) => {
const [Search,setSearch]=React.useState('')
  return (
    <div>
       <Header/>
       <div className="input" >
                <input type="text"  onChange={(e)=>setSearch(e.target.value)}  placeholder='Search...' />
            </div>
    <div className="Pok">
   <PokemonBlock Allpok={pokeData} Search={Search} url={()=>setUrl()} allInfoPoke={pokemons=>setInfoPokemon(pokemons)} />
   <button style={{position:'fixed', bottom:'50px',right:'50px', padding: '20px 50px',background: 'orange',color:'white',marginLeft: '500px' ,borderRadius:'20px'}} onClick={()=>setUrl(nextUrl)}>More...</button>
    </div>
    </div>
  )
}
export default Home;
