import React from "react";  
import pedra from '../imgs/Pedra.png' 
import papel from '../imgs/Papel.png' 
import tesoura from '../imgs/Tesoura.png'
import { useState } from "react"; 
import { useEffect } from "react";

function Main(){  
    const [jogador, setJogador] = useState('') 
    const [computador, setComputador] = useState('')
    const [msg, setMsg] = useState('')

    const arrayComputador = [pedra, papel, tesoura] 
    const indexComputador = Math.floor(Math.random() * arrayComputador.length) 
    
    const escolhaPc=(escolha)=>{ 
        setComputador(escolha)  
    }

    const escolhaJogador=(escolha)=>{  
        setJogador(escolha) 
        escolhaPc(arrayComputador[indexComputador])   
    }
    const msgVencedor=(jogador, computador)=>{ 
        if(jogador != '' && computador != ''){ 
            if(jogador == pedra && computador == tesoura){ 
                setMsg('Parabéns, você venceu!')
            } else if(jogador == papel && computador == pedra){ 
                setMsg('Parabéns, você venceu!')
            } else if(jogador == tesoura && computador == papel){ 
                setMsg('Parabéns, você venceu!') 
            } else if(jogador == papel && computador == tesoura){ 
                setMsg('O computador venceu!') 
            } else if(jogador == pedra && computador == papel){ 
                setMsg('O computador venceu!')
            } else if(jogador == tesoura && computador == pedra){ 
                setMsg('O computador venceu!')
            } else if(jogador == papel && computador == papel){ 
                setMsg('Empate!')
            } else if(jogador == pedra && computador == pedra){ 
                setMsg('Empate!')
            }else if(jogador == tesoura && computador == tesoura){ 
                setMsg('Empate!')
            }
        } 
    }

    useEffect(()=>{ 
        msgVencedor(jogador, computador)
    }, [jogador, computador])
    return(  
        <>
        <div className="main"> 
            <div className="card_jogador">  
                <p className="title-main">Jogador</p>
                <div className="card-bottons">
                    <button onClick={() => escolhaJogador(pedra)}>Pedra</button> 
                    <button onClick={() => escolhaJogador(papel)}>Papel</button> 
                    <button onClick={() => escolhaJogador(tesoura)}>Tesoura</button> 
                </div>     
                <div className="escolha_jogador"><img className="img-jogo" src={jogador}/></div>
            </div> 
            <div className="card_maquina">    
                <p className="title-main">Computador</p>
                <div className="escolha_pc"><img className="img-jogo" src={computador}/></div>
            </div>
            <div className="card_vitoria">   
                <p className="msg">{msg}</p>
            </div>
        </div> 
        </>
    )
}

export default Main