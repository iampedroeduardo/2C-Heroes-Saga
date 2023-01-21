var pecas=[], peca, n, objetivo, peca1="", peca2="", peca3="", n1, n2, n3, aud;
var contador, contador1, contador2, contador3;
var posicoes=[];
var fotos2c=["arthur","artur","greice","isabella","jessica","julia","lucas","luize","malu", "mauro","neto","pedro","ph","rafael","rafaela","theo","wendel","xureder","yasmin","yza"];
var tentativas;
function TelaDeEncerramento(){
    tela=[
    '<div class="container">',
    '    <div class="box">',
    '        <h1>Obrigado por jogar!</h1>',
    '        <h2>Colaboração: Alunos da Turma 2C 2023</h2>',
    '    <div>',
    '</div>'
    ]
    document.getElementById("tela").innerHTML=tela.join("\n");
}
function PegaPecas(){
    for(c=0;c<4;c++){
        num=Math.floor(Math.random()*fotos2c.length);
        pecas.push(fotos2c[num]);
        fotos2c.splice(num,1);
    }
}
function SorteiaObjetivo(){
    numeros=[];
    for(c=40;c<=50;c++){
        numeros.push(c);
    }
    n=numeros[Math.floor(Math.random()*numeros.length)];
    peca=pecas[Math.floor(Math.random()*4)];
}
function SorteiaObjetivo2(){
    numeros=[];
    for(c=30;c<=50;c++){
        numeros.push(c);
    }
    n1=numeros[Math.floor(Math.random()*numeros.length)];
    n2=numeros[Math.floor(Math.random()*numeros.length)]
    peca1=pecas[Math.floor(Math.random()*4)];
    do{
        peca2=pecas[Math.floor(Math.random()*4)];
    }while(peca2==peca1)
}
function SorteiaObjetivo3(){
    numeros=[];
    for(c=30;c<=50;c++){
        numeros.push(c);
    }
    n1=numeros[Math.floor(Math.random()*numeros.length)];
    n2=numeros[Math.floor(Math.random()*numeros.length)];
    n3=numeros[Math.floor(Math.random()*numeros.length)];
    peca1=pecas[Math.floor(Math.random()*4)];
    do{
        peca2=pecas[Math.floor(Math.random()*4)];
    }while(peca2==peca1)
    do{
        peca3=pecas[Math.floor(Math.random()*4)];
    }while(peca1==peca3 || peca2==peca3)
}
function MostraObjetivo(){
    document.getElementById("objetivo").innerHTML="Objetivo: Pegar "+n+" "+peca;
    document.getElementById("fotoobj").src=peca+".png";
    document.getElementById("contador").innerHTML=contador+"/"+n;
    document.getElementById("tentativas").innerHTML="Tentativas: "+tentativas;
    if(contador>=n){
           tela=[
               '<div class="container">',
               '    <div class="box">',
               '        <h1>Meus Parabéns! Você finalizou a primeira fase! Vamos para a próxima?</h1>',
               '        <button class="botao" onclick="PegaPecas();Jogo2();">Vamos lá!</button>',
               '    <div>',
               '</div>'
           ]
            setTimeout(()=>{document.getElementById("tela").innerHTML=tela.join("\n")},1000);
            pecas=[];
        }
        else if(tentativas==0){
            tela=[
               '<div class="container">',
               '    <div class="box">',
               '        <h1>Sinto muito! Acabaram suas tentativas! Vamos tentar de novo?</h1>',
               '        <button class="botao" onclick="PegaPecas();Jogo();">Vamos lá!</button>',
               '    <div>',
               '</div>'
           ]
            document.getElementById("tela").innerHTML=tela.join("\n");
            pecas=[];
        }
}
function MostraObjetivo2(){
    document.getElementById("objetivo1").innerHTML="Objetivo: Pegar "+n1+" "+peca1;
    document.getElementById("fotoobj1").src=peca1+".png";
    document.getElementById("contador1").innerHTML=contador1+"/"+n1;
    document.getElementById("objetivo2").innerHTML="Objetivo: Pegar "+n2+" "+peca2;
    document.getElementById("fotoobj2").src=peca2+".png";
    document.getElementById("contador2").innerHTML=contador2+"/"+n2;
    document.getElementById("tentativas").innerHTML="Tentativas: "+tentativas;
    if(contador1>=n1 && contador2>=n2){
           tela=[
               '<div class="container">',
               '    <div class="box">',
               '        <h1>Meus Parabéns! Você finalizou a segunda fase! Vamos para a última?</h1>',
               '        <button class="botao" onclick="PegaPecas();Jogo3();">Vamos lá!</button>',
               '    <div>',
               '</div>'
           ]
            setTimeout(()=>{document.getElementById("tela").innerHTML=tela.join("\n")},1000);
            pecas=[];
        }
        else if(tentativas==0){
            tela=[
               '<div class="container">',
               '    <div class="box">',
               '        <h1>Sinto muito! Acabaram suas tentativas! Vamos tentar de novo?</h1>',
               '        <button class="botao" onclick="PegaPecas();Jogo2();">Vamos lá!</button>',
               '    <div>',
               '</div>'
           ]
            document.getElementById("tela").innerHTML=tela.join("\n");
            pecas=[];
        }
}
function MostraObjetivo3(){
    document.getElementById("objetivo1").innerHTML="Objetivo: Pegar "+n1+" "+peca1;
    document.getElementById("fotoobj1").src=peca1+".png";
    document.getElementById("contador1").innerHTML=contador1+"/"+n1;
    document.getElementById("objetivo2").innerHTML="Objetivo: Pegar "+n2+" "+peca2;
    document.getElementById("fotoobj2").src=peca2+".png";
    document.getElementById("contador2").innerHTML=contador2+"/"+n2;
    document.getElementById("objetivo3").innerHTML="Objetivo: Pegar "+n3+" "+peca3;
    document.getElementById("fotoobj3").src=peca3+".png";
    document.getElementById("contador3").innerHTML=contador3+"/"+n3;
    document.getElementById("tentativas").innerHTML="Tentativas: "+tentativas;
    if(contador1>=n1 && contador2>=n2 && contador3>=n3){
           tela=[
               '<div class="container">',
               '    <div class="box">',
               '        <h1>Meus Parabéns! Você finalizou o jogo! Quer jogar novamente?</h1>',
               '        <button class="botao" onclick="TelaDeEncerramento();">Não!</button>',
               '        <button class="botao" onclick="PegaPecas();Jogo();">Sim!</button>',
               '    <div>',
               '</div>'
           ]
            setTimeout(()=>{document.getElementById("tela").innerHTML=tela.join("\n")},1000);
            pecas=[];
        }
        else if(tentativas==0){
            tela=[
               '<div class="container">',
               '    <div class="box">',
               '        <h1>Sinto muito! Acabaram suas tentativas! Vamos tentar de novo?</h1>',
               '        <button class="botao" onclick="PegaPecas();Jogo3();">Vamos lá!</button>',
               '    <div>',
               '</div>'
           ]
            document.getElementById("tela").innerHTML=tela.join("\n");
            pecas=[];
        }
}
function TiraPrateado(posicao){
    if(posicao.indexOf("prateado")!=-1){
        posicao=posicao.substring(0,posicao.indexOf("prateado"))
    }
    return posicao;
}
function PoderEu(pecinha){
    for(c=0;c<10;c++){
        for(i=0;i<10;i++){
            if(tab[c][i]==pecinha){
               tab[c][i]="blank";
                if(pecinha==peca){
                   contador++;
                }
                if(pecinha==peca1){
                   contador1++;
                }
                if(pecinha==peca2){
                   contador2++;
                }
            }
        }
    }
}
function VerificaTab(tab){
    for(c=0;c<10;c++){
        for(i=0;i<8;i++){
            if(i==7){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2])];
               if(v[0]==v[1] && v[0]==v[2] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=3;
                    }
                   if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca){
                            contador++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                   tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                }
            }
            else if(i==6){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2]),TiraPrateado(tab[c][i+3])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca){
                            contador++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca){
                            contador++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c][i+1]="blank";
                       tab[c][i+2]="blank";
                        tab[c][i+3]="blank";
                    }
                } 
            }
            else{
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2]),TiraPrateado(tab[c][i+3]),TiraPrateado(tab[c][i+4])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           tab[c][j]="blank";
                       }
                        if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                   }
                    tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!=v[4] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca){
                            contador++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c][i+1]="blank";
                       tab[c][i+2]="blank";
                        tab[c][i+3]="blank";
                    }
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]==v[4] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=5;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1 || tab[c][i+4].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca){
                            contador++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                        tab[c][i]="blank";
                        tab[c][i+1]="blank";
                        tab[c][i+2]="eu";
                        tab[c][i+3]="blank";
                        tab[c][i+4]="blank";
                } 
            }
        }
    }
    for(c=0;c<8;c++){
        for(i=0;i<10;i++){
            if(c==7){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i])];
               if(v[0]==v[1] && v[0]==v[2] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=3;
                    }
                   if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca){
                            contador++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                   tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                }
            }
            else if(c==6){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i]),TiraPrateado(tab[c+3][i])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca){
                            contador++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca){
                            contador++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c+1][i]="blank";
                       tab[c+2][i]="blank";
                        tab[c+3][i]="blank";
                    }
                } 
            }
            else{
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i]),TiraPrateado(tab[c+3][i]),TiraPrateado(tab[c+4][i])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca){
                            contador++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!=v[4] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca){
                            contador++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c+1][i]="blank";
                       tab[c+2][i]="blank";
                        tab[c+3][i]="blank";
                    }
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]==v[4] && v[0]!="blank"){
                  if(v[0]==peca){
                      contador+=5;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1 || tab[c+4][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca){
                            contador++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                        tab[c][i]="blank";
                       tab[c+1][i]="blank";
                       tab[c+2][i]="eu";
                        tab[c+3][i]="blank";
                        tab[c+4][i]="blank";
                } 
            }
        }
    }
    for(c=0;c<10;c++){
        for(i=0;i<10;i++){
            if(tab[c][i].indexOf("prateado")!=-1){
               document.getElementById("prateado").innerHTML="Você fez um elemento acizentado, quando ele é juntado com iguais destrói toda a linha ou coluna.";
            }
        }
    }
    for(c=0;c<10;c++){
        for(i=0;i<10;i++){
            if(tab[c][i]=="eu"){
               document.getElementById("eu").innerHTML="Você fez um elemento Pedro, quando ele é trocado com outra peça, destrói todos os elementos iguais a outra peça.";
            }
        }
    }
    MostraObjetivo();
    return tab;
}
function VerificaTab2(tab){
    for(c=0;c<10;c++){
        for(i=0;i<8;i++){
            if(i==7){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2])];
               if(v[0]==v[1] && v[0]==v[2] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                   if(v[0]==peca2){
                      contador2+=3;
                    }
                   if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                   tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                }
            }
            else if(i==6){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2]),TiraPrateado(tab[c][i+3])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c][i+1]="blank";
                       tab[c][i+2]="blank";
                        tab[c][i+3]="blank";
                    }
                } 
            }
            else{
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2]),TiraPrateado(tab[c][i+3]),TiraPrateado(tab[c][i+4])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!=v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c][i+1]="blank";
                       tab[c][i+2]="blank";
                        tab[c][i+3]="blank";
                    }
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]==v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=5;
                    }
                    if(v[0]==peca2){
                      contador2+=5;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1 || tab[c][i+4].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                        tab[c][i]="blank";
                       tab[c][i+1]="blank";
                       tab[c][i+2]="eu";
                        tab[c][i+3]="blank";
                        tab[c][i+4]="blank";
                } 
            }
        }
    }
    for(c=0;c<8;c++){
        for(i=0;i<10;i++){
            if(c==7){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i])];
               if(v[0]==v[1] && v[0]==v[2] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                   if(v[0]==peca2){
                      contador2+=3;
                    }
                   if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                   tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                }
            }
            else if(c==6){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i]),TiraPrateado(tab[c+3][i])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca1){
                            contador2++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c+1][i]="blank";
                       tab[c+2][i]="blank";
                        tab[c+3][i]="blank";
                    }
                } 
            }
            else{
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i]),TiraPrateado(tab[c+3][i]),TiraPrateado(tab[c+4][i])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!=v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c+1][i]="blank";
                       tab[c+2][i]="blank";
                        tab[c+3][i]="blank";
                    }
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]==v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=5;
                    }
                    if(v[0]==peca2){
                      contador2+=5;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1 || tab[c+4][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                        tab[c][i]="blank";
                       tab[c+1][i]="blank";
                       tab[c+2][i]="eu";
                        tab[c+3][i]="blank";
                        tab[c+4][i]="blank";
                } 
            }
        }
    }
    MostraObjetivo2();
    return tab;
}
function VerificaTab3(tab){
    for(c=0;c<10;c++){
        for(i=0;i<8;i++){
            if(i==7){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2])];
               if(v[0]==v[1] && v[0]==v[2] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                   if(v[0]==peca2){
                      contador2+=3;
                    }
                   if(v[0]==peca3){
                      contador3+=3;
                    }
                   if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j]==peca3){
                            contador3++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                   tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                }
            }
            else if(i==6){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2]),TiraPrateado(tab[c][i+3])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(v[0]==peca3){
                      contador3+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j]==peca3){
                            contador3++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(v[0]==peca3){
                      contador3+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j]==peca3){
                            contador3++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c][i+1]="blank";
                       tab[c][i+2]="blank";
                        tab[c][i+3]="blank";
                    }
                } 
            }
            else{
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c][i+1]),TiraPrateado(tab[c][i+2]),TiraPrateado(tab[c][i+3]),TiraPrateado(tab[c][i+4])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(v[0]==peca3){
                      contador3+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c][i+1]="blank";
                   tab[c][i+2]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!=v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(v[0]==peca3){
                      contador3+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j]==peca3){
                            contador3++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c][i+1]="blank";
                       tab[c][i+2]="blank";
                        tab[c][i+3]="blank";
                    }
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]==v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=5;
                    }
                    if(v[0]==peca2){
                      contador2+=5;
                    }
                    if(v[0]==peca3){
                      contador3+=5;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c][i+1].indexOf("prateado")!=-1 || tab[c][i+2].indexOf("prateado")!=-1 || tab[c][i+3].indexOf("prateado")!=-1 || tab[c][i+4].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[c][j]==peca1){
                            contador1++;
                           }
                           if(tab[c][j]==peca2){
                            contador2++;
                           }
                           if(tab[c][j]==peca3){
                            contador3++;
                           }
                           if(tab[c][j].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[l][j]="blank";
                              }
                            }
                           tab[c][j]="blank";
                       }
                   }
                        tab[c][i]="blank";
                       tab[c][i+1]="blank";
                       tab[c][i+2]="eu";
                        tab[c][i+3]="blank";
                        tab[c][i+4]="blank";
                } 
            }
        }
    }
    for(c=0;c<8;c++){
        for(i=0;i<10;i++){
            if(c==7){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i])];
               if(v[0]==v[1] && v[0]==v[2] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                   if(v[0]==peca2){
                      contador2+=3;
                    }
                   if(v[0]==peca3){
                      contador3+=3;
                    }
                   if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i]==peca3){
                            contador3++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                   tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                }
            }
            else if(c==6){
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i]),TiraPrateado(tab[c+3][i])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(v[0]==peca3){
                      contador3+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i]==peca3){
                            contador3++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(v[0]==peca3){
                      contador3+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i]==peca3){
                            contador3++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c+1][i]="blank";
                       tab[c+2][i]="blank";
                        tab[c+3][i]="blank";
                    }
                } 
            }
            else{
                v=[TiraPrateado(tab[c][i]),TiraPrateado(tab[c+1][i]),TiraPrateado(tab[c+2][i]),TiraPrateado(tab[c+3][i]),TiraPrateado(tab[c+4][i])];
                if(v[0]==v[1] && v[0]==v[2] && v[0]!=v[3] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=3;
                    }
                    if(v[0]==peca2){
                      contador2+=3;
                    }
                    if(v[0]==peca3){
                      contador3+=3;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i]==peca3){
                            contador3++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    tab[c][i]="blank";
                   tab[c+1][i]="blank";
                   tab[c+2][i]="blank";
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]!=v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=4;
                    }
                    if(v[0]==peca2){
                      contador2+=4;
                    }
                    if(v[0]==peca3){
                      contador3+=4;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i]==peca3){
                            contador3++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                    else{
                        tab[c][i]=tab[c][i]+"prateado"
                       tab[c+1][i]="blank";
                       tab[c+2][i]="blank";
                        tab[c+3][i]="blank";
                    }
                } 
                if(v[0]==v[1] && v[0]==v[2] && v[0]==v[3] && v[0]==v[4] && v[0]!="blank"){
                  if(v[0]==peca1){
                      contador1+=5;
                    }
                    if(v[0]==peca2){
                      contador2+=5;
                    }
                    if(v[0]==peca3){
                      contador3+=5;
                    }
                    if(tab[c][i].indexOf("prateado")!=-1 || tab[c+1][i].indexOf("prateado")!=-1 || tab[c+2][i].indexOf("prateado")!=-1 || tab[c+3][i].indexOf("prateado")!=-1 || tab[c+4][i].indexOf("prateado")!=-1){
                       for(j=0;j<10;j++){
                           if(tab[j][i]==peca1){
                            contador1++;
                           }
                           if(tab[j][i]==peca2){
                            contador2++;
                           }
                           if(tab[j][i]==peca3){
                            contador3++;
                           }
                           if(tab[j][i].indexOf("prateado")!=-1){
                              for(l=0;l<10;l++){
                                  tab[j][l]="blank";
                              }
                            }
                           tab[j][i]="blank";
                       }
                   }
                        tab[c][i]="blank";
                       tab[c+1][i]="blank";
                       tab[c+2][i]="eu";
                        tab[c+3][i]="blank";
                        tab[c+4][i]="blank";
                } 
            }
        }
    }
    MostraObjetivo3();
    return tab;
}
function Cair(tab){
    for(c=9;c>=1;c--){
            for(i=0;i<10;i++){
                if(tab[c][i]=="blank" || tab[c][i]=="blankprateado"){
                   if(tab[c-1][i]!="blank" || tab[c-1][i]=="blankprateado"){
                      tab[c][i]=tab[c-1][i];
                      tab[c-1][i]="blank";
                   }
                }
            }
        }
    return tab;
}
function CairNovos(tab){
    for(c=9;c>=0;c--){
        for(i=0;i<10;i++){
            if(tab[c][i]=="blank" || tab[c][i]=="blankprateado"){
               foto=pecas[Math.floor(Math.random()*4)];
               tab[c][i]=foto;
            }
        }
    }
    return tab;
}
function Trocar(tab){
        pos1=posicoes[0];
        pos2=posicoes[1];
        if((pos1[0]==pos2[0] && (pos1[1]==pos2[1]+1 || pos1[1]==pos2[1]-1)) || (pos1[1]==pos2[1] && (pos1[0]==pos2[0]+1 || pos1[0]==pos2[0]-1))){
            contpos1=tab[pos1[0]][pos1[1]];
            contpos2=tab[pos2[0]][pos2[1]];
            tab[pos1[0]][pos1[1]]=contpos2;
            tab[pos2[0]][pos2[1]]=contpos1;
            aud=TiraPrateado(contpos2);
            GeraTabHTML(tab);
            if(contpos1=="eu"){
                aud="eu";
                PoderEu(TiraPrateado(contpos2));
                tab[pos2[0]][pos2[1]]="blank";
            }
            if(contpos2=="eu"){
                aud="eu";
                PoderEu(TiraPrateado(contpos1));
                tab[pos1[0]][pos1[1]]="blank";
            }
        }
        else{
            tentativas++;
        }
    return tab;
}
function GeraTabHTML(tab){
    tabuleiro=[];
    for(c=0;c<10;c++){
        tabuleiro.push('<tr>');
        for(i=0;i<10;i++){
            tabuleiro.push('<td onclick="posicoes.unshift(['+c+','+i+']);if(posicoes.length%2==0){Testa();}">');
            tabuleiro.push('<img src="'+tab[c][i]+'.png" style="width:65px;height:65px;">');
            tabuleiro.push('</td>');
        }
        tabuleiro.push('</tr>');
    }
    document.getElementById("tabela").innerHTML=tabuleiro.join("\n");
}
function GeraTabHTML2(tab){
    tabuleiro=[];
    for(c=0;c<10;c++){
        tabuleiro.push('<tr>');
        for(i=0;i<10;i++){
            tabuleiro.push('<td onclick="posicoes.unshift(['+c+','+i+']);if(posicoes.length%2==0){Testa2();}">');
            tabuleiro.push('<img src="'+tab[c][i]+'.png" style="width:65px;height:65px;">');
            tabuleiro.push('</td>');
        }
        tabuleiro.push('</tr>');
    }
    document.getElementById("tabela").innerHTML=tabuleiro.join("\n");
}
function GeraTabHTML3(tab){
    tabuleiro=[];
    for(c=0;c<10;c++){
        tabuleiro.push('<tr>');
        for(i=0;i<10;i++){
            tabuleiro.push('<td onclick="posicoes.unshift(['+c+','+i+']);if(posicoes.length%2==0){Testa3();}">');
            tabuleiro.push('<img src="'+tab[c][i]+'.png" style="width:65px;height:65px;">');
            tabuleiro.push('</td>');
        }
        tabuleiro.push('</tr>');
    }
    document.getElementById("tabela").innerHTML=tabuleiro.join("\n");
}
function Testa(){
    if(tentativas>0 && contador<n){
        tab=Trocar(tab);
        audio=[
            '<audio id="player" autoplay="autoplay">',
	           '<source src="'+aud+'.ogg" type="audio/ogg" />',
	       '</audio>'
        ]
        document.getElementById("audio").innerHTML=audio.join("\n");
        document.getElementById("player").play();
        GeraTabHTML(tab);
        for(c=0;c<15;c++){
            setTimeout(()=>{VerificaTab(tab);GeraTabHTML(tab);},1000);
            setTimeout(()=>{for(j=0;j<10;j++){tab=Cair(tab);};GeraTabHTML(tab);},1000);
            setTimeout(()=>{tab=CairNovos(tab);GeraTabHTML(tab);},1000);
        }
        tentativas--;
    }
}
function Testa2(){
    if(tentativas>0 && (contador1<n1 || contador2<n2)){
        tab=Trocar(tab);
        audio=[
            '<audio id="player" autoplay="autoplay">',
	           '<source src="'+aud+'.ogg" type="audio/ogg" />',
	       '</audio>'
        ]
        document.getElementById("audio").innerHTML=audio.join("\n");
        document.getElementById("player").play();
        GeraTabHTML2(tab);
        for(c=0;c<15;c++){
            setTimeout(()=>{VerificaTab2(tab);GeraTabHTML2(tab);},1000);
            setTimeout(()=>{for(j=0;j<10;j++){tab=Cair(tab);};GeraTabHTML2(tab);},1000);
            setTimeout(()=>{tab=CairNovos(tab);GeraTabHTML2(tab);},1000);
        }
        tentativas--;
    }
}
function Testa3(){
    if(tentativas>0 && (contador1<n1 || contador2<n2 || contador3<n3)){
        tab=Trocar(tab);
        audio=[
            '<audio id="player" autoplay="autoplay">',
	           '<source src="'+aud+'.ogg" type="audio/ogg" />',
	       '</audio>'
        ]
        document.getElementById("audio").innerHTML=audio.join("\n");
        document.getElementById("player").play();
        GeraTabHTML3(tab);
        for(c=0;c<15;c++){
            setTimeout(()=>{VerificaTab3(tab);GeraTabHTML3(tab);},1000);
            setTimeout(()=>{for(j=0;j<10;j++){tab=Cair(tab);};GeraTabHTML3(tab);},1000);
            setTimeout(()=>{tab=CairNovos(tab);GeraTabHTML3(tab);},1000);
        }
        tentativas--;
    }
}
function SorteiaTab(){
    tab=[];
    for(c=0;c<10;c++){
        tab.push([]);
        for(i=0;i<10;i++){
            if(c<2 && i<2){
                foto=pecas[Math.floor(Math.random()*4)];
                tab[c][i]=foto;
            }
            if(c<2 && i>1){
                do{
                    foto=pecas[Math.floor(Math.random()*4)];
                    if(tab[c][i-2]!=foto || tab[c][i-1]!=foto){
                        tab[c][i]=foto;
                    }
                }while(tab[c][i-2]==foto && tab[c][i-1]==foto)
            }
            if(c>1 && i<2){
                do{
                    foto=pecas[Math.floor(Math.random()*4)];
                    if(tab[c-2][i]!=foto || tab[c-1][i]!=foto){
                        tab[c][i]=foto;
                    }
                }while(tab[c-2][i]==foto && tab[c-1][i]==foto)
            }
            if(c>1 && i>1){
                do{
                    foto=pecas[Math.floor(Math.random()*4)];
                    if((tab[c-2][i]!=foto || tab[c-1][i]!=foto) && (tab[c][i-2]!=foto || tab[c][i-1]!=foto)){
                        tab[c][i]=foto;
                    }
                }while((tab[c-2][i]==foto && tab[c-1][i]==foto) || (tab[c][i-2]==foto && tab[c][i-1]==foto))
            }
        }
    }
    return tab;
}
function Jogo(){
    tela=[  
        '<div class="jogo">',
        '   <div class="pontuacao">',
        '       <h2 id="objetivo"></h2>',
        '       <img id="fotoobj" style="width:40px;height:40px;">',
        '       <p id="contador"></p>',
        '       <p id="tentativas"></p>',
        '   </div>',
        '   <div class="tabuleiro">',
        '   <table id="tabela"></table>',
        '   </div>',
        '   <div class="mensagens">',
        '       <h1 id="prateado"></h1>',
        '       <h1 id="eu"></h1>',
        '   </div>',
        '</div>'
    ];
    document.getElementById("tela").innerHTML=tela.join("\n");
    contador=0;
    tentativas=12;
    SorteiaObjetivo();
    MostraObjetivo();
    tab=SorteiaTab();
    GeraTabHTML(tab);
}
function Jogo2(){
    tela=[  
        '<div class="jogo">',
        '   <div class="pontuacao">',
        '       <h2 id="objetivo1"></h2>',
        '       <img id="fotoobj1" style="width:40px;height:40px;">',
        '       <p id="contador1"></p>',
        '       <h2 id="objetivo2"></h2>',
        '       <img id="fotoobj2" style="width:40px;height:40px;">',
        '       <p id="contador2"></p>',
        '       <p id="tentativas"></p>',
        '   </div>',
        '   <div class="tabuleiro">',
        '   <table id="tabela"></table>',
        '   </div>',
        '   <h1 id="prateado"></h1>',
        '   <h1 id="eu"></h1>',
        '</div>'
    ];
    document.getElementById("tela").innerHTML=tela.join("\n");
    contador1=0;
    contador2=0;
    tentativas=15;
    SorteiaObjetivo2();
    MostraObjetivo2();
    tab=SorteiaTab();
    GeraTabHTML2(tab);
}
function Jogo3(){
    tela=[  
        '<div class="jogo">',
        '   <div class="pontuacao">',
        '       <h2 id="objetivo1"></h2>',
        '       <img id="fotoobj1" style="width:40px;height:40px;">',
        '       <p id="contador1"></p>',
        '       <h2 id="objetivo2"></h2>',
        '       <img id="fotoobj2" style="width:40px;height:40px;">',
        '       <p id="contador2"></p>',
        '       <h2 id="objetivo3"></h2>',
        '       <img id="fotoobj3" style="width:40px;height:40px;">',
        '       <p id="contador3"></p>',
        '       <p id="tentativas"></p>',
        '   </div>',
        '   <div class="tabuleiro">',
        '   <table id="tabela"></table>',
        '   </div>',
        '   <h1 id="prateado"></h1>',
        '   <h1 id="eu"></h1>',
        '</div>'
    ];
    document.getElementById("tela").innerHTML=tela.join("\n");
    contador1=0;
    contador2=0;
    contador3=0;
    tentativas=17;
    SorteiaObjetivo3();
    MostraObjetivo3();
    tab=SorteiaTab();
    GeraTabHTML3(tab);
}
